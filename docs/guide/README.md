# 快速上手

## 安装
```shell script
yarn add happykit
# npm install happykit
```

## 使用
默认的使用方式，在`main.ts`中
```ts
import {
createDefaultRouterInterceptor, 
createHappyFramework, 
RouterInterceptorType
} from "happykit"

const happyFramework = createHappyFramework()

const beforeInterceptor = createDefaultRouterInterceptor({
    interceptorType:RouterInterceptorType.BEFORE,
    framework:happyFramework,
    dataLoader(){
        //实际开发环境应该从服务端拉取数据
        //实际拉取服务器数据尽可能使用async/await方式同步promise
        //同时应该根据实际的数据结构进行编写对应的适配器
        //同时应该自行处理好请求失败等情况
        return routerData
    },
    dataLoadFailureHandler(){
        console.log('数据加载失败')
    },
    routerInjectOption:{
        parentRoute: {
            name: 'home',
            path: '/home',
            component: () => import('@/views/home/index.vue'!)
        },
        routes: [],
        viewLoader(view){
            return ()=>import(`@/views${view}`)
        }
    }
})

router.beforeEach((to: any, from: any, next: any)=>{
    //使用拦截器
    beforeInterceptor.filter(to,from,next)
})

createApp(App)
    .use(store)
    .use(router)
    .use(happyFramework)
    .mount("#app");

```


### 框架数据获取

```ts
import { getCurrentInstance } from 'vue'
import { HappyKitFramework } from 'happykit'
export default {
  setup() {
    const self = getCurrentInstance()
    const ctx = (self as any).ctx
    const instance = ctx.$happykit as HappyKitFramework
    //菜单数据
    const menuTree = instance.getMenuTree()
    //路由列表
    const routeMappingList = instance.getRouteMappingList()
    //当前路由
    const currentRouteMenu = instance.getCurrentMenuRoute()
    //导航列表
    const navList = instance.getNavList()
    //当前路由的面包屑
    const breadcrumb = computed(() => {
      return currentRouteMenu.value?.menuItem.breadcrumb.map((e: any) => e.name).join('/')
    })
    return {
      menuTree,
      navList,
      routeMappingList,
      currentRouteMenu,
      breadcrumb,
    }
  }
}
```

### 参考组件
测试组件如下

- 路由数据获取
- 当前路由数据获取
- 面包屑获取
- 菜单点击处理
- 导航按钮点击处理
- 自定义打开菜单处理

```html
<template>
  <div>
    <p v-for="e in routeMappingList.value" :key="e.menuId">
      <a @click="goto(e.menuId)">{{e.menuId}} - {{e.name}} - {{e.routerPath}}</a>
    </p>
    <p>面包屑</p>
    <span>{{breadcrumb}}</span>
    <p>当前路由</p>
    <div v-if="currentRouteMenu.value">
      【{{currentRouteMenu.value.title}}】
    </div>
    <div>
      <button @click="openNav('dash-1111')">open1</button>
      <button @click="openNav('dash-2222')">open2</button>
      <button @click="openNav('dash-3333')">open3</button>
    </div>
    <button @click="closeNav(0)">关闭全部</button>
    <button @click="closeNav(1)">关闭左侧</button>
    <button @click="closeNav(2)">关闭右侧</button>
    <button @click="closeNav(3)">关闭其他</button>
    <div v-for="e in navList.value" :key="e.pageId">
      <button @click="closeNav(4,e.pageId)">CLOSE</button>
      <a :style="currentRouteMenu.value?.pageId===e.pageId?'color:red':''" @click="navClick(e.pageId)">{{e.title}}</a>
    </div>
    <div style="height: 500px;width: 400px;background: antiquewhite">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">

import { computed, getCurrentInstance } from 'vue'
import { HappyKitFramework, NavCloseType } from 'happykit'
export default {
  setup() {
    const self = getCurrentInstance()
    const ctx = (self as any).ctx
    const instance = ctx.$happykit as HappyKitFramework

    const menuTree = instance.getMenuTree()
    const routeMappingList = instance.getRouteMappingList()
    const currentRouteMenu = instance.getCurrentMenuRoute()
    const navList = instance.getNavList()

    const breadcrumb = computed(() => {
      return currentRouteMenu.value?.menuItem.breadcrumb.map((e: any) => e.name).join('/')
    })

    const router = ctx.$router

    const goto = (menuId: string) => {
      instance.clickMenuItem(menuId, (menuItems: any) => {
        console.log('需要跳转1', menuItems)
        router.push(menuItems[0].routerPath)
      })
    }

    const tp: any = [NavCloseType.ALL, NavCloseType.LEFT, NavCloseType.RIGHT, NavCloseType.OTHER, NavCloseType.SELF]
    const closeNav = (type: number, pageId?: string) => {
      instance.closeNav(tp[type], pageId, (removedNavs: any, needNavs: any) => {
        console.log('已经移除1', removedNavs)
        console.log('需要跳转3', needNavs)
        if (needNavs.length>0){
          router.push(needNavs[0].to)
        }else{
          router.push('/')
        }
      })
    }

    const navClick = (pageId: string) => {
      instance.clickNavItem(pageId, (a: any, needNavs: any) => {
        console.log('需要跳转2', needNavs)
        if (needNavs.length>0){
          router.push(needNavs[0].to)
        }
      })
    }

    const openNav = (title: string) => {
      const node = instance.openNav('/dashboard?id=1&title=' + title, routeMappingList.value[0], title)
      instance.setCurrentMenuRoute(node)
      console.log('需要跳转4', node)
      router.push(node!.to)

    }

    return {
      menuTree,
      navList,
      routeMappingList,
      currentRouteMenu,
      breadcrumb,
      goto,
      closeNav,
      navClick,
      openNav
    }
  }
}
</script>
<style>
p {
  margin: 0;
}

a {
  cursor: pointer;
}

a:hover {
  color: blue;
}
</style>
```

