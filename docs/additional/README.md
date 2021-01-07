# 附录

## 默认菜单数据结构
该数据结构是从服务端返回的，实际开发可以自定义。

```js
[
  {
    name: '看板',
    path: '/dashboard',
    view: '/dashboard',
    isRouter: true,
    isKeepalive: true,
    type: 'menu',
    children: [
      {
        name: '重置',
        permissionKey: 'reset',
        path: '',
        view: '',
        isRouter: false,
        isKeepalive: false,
        type: 'button',
        children: []
      },
      {
        name: '新增',
        permissionKey: 'add',
        path: '',
        view: '',
        isRouter: false,
        isKeepalive: false,
        type: 'button',
        children: []
      },
      {
        name: '编辑',
        permissionKey: 'edit',
        path: '',
        view: '',
        isRouter: false,
        isKeepalive: false,
        type: 'button',
        children: []
      }
    ]
  },
  {
    name: 'element ui',
    path: '/element',
    view: '/iframe',
    isRouter: true,
    isKeepalive: false,
    externalLink: true, //外链
    linkTarget: '_tab', //刷新自己
    externalLinkAddress: 'https://element.eleme.cn/#/zh-CN/component/changelog',
    type: 'menu',
    children: []
  },
  {
    name: 'Demo',
    path: '/demo',
    view: '',
    isRouter: false,
    isKeepalive: false,
    type: 'menu',
    children: [
      {
        name: '外部链接',
        path: '/links',
        view: '',
        isRouter: false,
        isKeepalive: false,
        type: 'menu',
        children: [
          {
            name: '松鼠乐园外部1',
            path: '',
            view: '',
            isRouter: true,
            isKeepalive: true,
            externalLink: true, //外链
            linkTarget: '_self', //刷新自己
            externalLinkAddress: 'http://www.squirrelzoo.com',
            type: 'menu',
            children: []
          },
          {
            name: '松鼠乐园外部2',
            path: '',
            view: '',
            isRouter: true,
            isKeepalive: true,
            externalLink: true, //外链
            externalLinkAddress: 'http://www.squirrelzoo.com',
            linkTarget: '_blank', //浏览器标签
            type: 'menu',
            children: []
          },
          {
            name: '松鼠乐园内部',
            path: '/squirrelzoo',
            view: '/iframe',
            isRouter: true,
            isKeepalive: true,
            externalLink: true, //外链
            externalLinkAddress: 'http://www.squirrelzoo.com',
            linkTarget: '_tab', //页内标签
            type: 'menu',
            children: []
          },
          {
            name: '百度内部',
            path: '/baidu',
            view: '/iframe',
            isRouter: true,
            isKeepalive: true,
            externalLink: true, //外链
            externalLinkAddress: 'http://www.baidu.com',
            linkTarget: '_tab', //页内标签
            type: 'menu',
            children: []
          }
        ]
      },
      {
        name: '用户',
        path: '/user-mgt',
        view: '',
        isRouter: false,
        isKeepalive: false,
        type: 'menu',
        children: [
          {
            name: '高级管理',
            path: '/adv',
            view: '',
            isRouter: false,
            isKeepalive: false,
            type: 'menu',
            children: [
              {
                name: '高级111',
                path: '/xxxxxx111',
                view: '/role',
                isRouter: true,
                isKeepalive: false,
                type: 'menu',
                children: []
              }
            ]
          }
        ]
      },
      {
        name: '测试管理',
        path: '', //TODO  这个路径要拼接进实际的路由 //如果父节点为空，那么就产生一个临时的
        view: '',
        isRouter: false,
        isKeepalive: false,
        type: 'menu',
        children: [
          {
            name: '测试项目组',
            path: '/test/aaa',
            view: '/role',
            isRouter: true,
            isKeepalive: false,
            type: 'menu',
            children: []
          }
        ]
      }
    ]
  },
  {
    name: '系统管理',
    path: '/system',
    view: '',
    isRouter: false,
    isKeepalive: false,
    type: 'menu',
    children: [
      {
        name: '用户管理',
        path: '/user',
        view: '/user',
        isRouter: true,
        isKeepalive: false,
        type: 'menu',
        children: []
      },
      {
        name: '角色管理',
        path: '/role',
        view: '/role',
        isRouter: true,
        isKeepalive: true,
        type: 'menu',
        children: [
          {
            name: '新增',
            permissionKey: 'add',
            path: '',
            view: '',
            isRouter: false,
            isKeepalive: false,
            type: 'button',
            children: []
          },
          {
            name: '编辑弹出框取消',
            permissionKey: 'cancel',
            path: '',
            view: '',
            isRouter: false,
            isKeepalive: false,
            type: 'button',
            children: []
          }
        ]
      },
      {
        name: '部门管理',
        path: '/department',
        view: '/department',
        isRouter: true,
        isKeepalive: false,
        type: 'menu',
        children: [
          {
            name: '新增',
            permissionKey: 'add',
            path: '',
            view: '',
            isRouter: false,
            isKeepalive: false,
            type: 'button',
            children: []
          }
        ]
      },
      {
        name: '区域管理',
        path: '/region',
        view: '/region',
        isRouter: true,
        isKeepalive: false,
        type: 'menu',
        children: [
          {
            name: '新增',
            permissionKey: 'add',
            path: '',
            view: '',
            isRouter: false,
            isKeepalive: false,
            type: 'button',
            children: []
          }
        ]
      },
      {
        name: '菜单管理',
        path: '/menu',
        view: '/menu',
        isRouter: true,
        isKeepalive: false,
        type: 'menu',
        children: [
          {
            name: '新增',
            permissionKey: 'add',
            path: '',
            view: '',
            isRouter: false,
            isKeepalive: false,
            type: 'button',
            children: []
          }
        ]
      },
      {
        name: '日志审计',
        path: '/log-report',
        view: '/log-report',
        isRouter: true,
        isKeepalive: false,
        type: 'menu',
        children: []
      }
    ]
  },
  {
    name: '字典管理',
    path: '/dictionary',
    view: '/dictionary',
    isRouter: true,
    isKeepalive: false,
    type: 'menu',
    children: []
  },
  {
    name: '隐藏路由1级',
    path: '/hide',
    view: '',
    isRouter: false,
    isKeepalive: false,
    type: 'menu',
    hide: true, //隐藏路由
    children: [
      {
        name: '隐藏路由2级',
        path: '/test',
        view: '/hide',
        isRouter: true,
        isKeepalive: false,
        type: 'menu',
        children: []
      }
    ]
  }
]
```



## 参考组件
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
    <p v-for='e in routeMappingList' :key='e.menuId'>
      <a @click='goto(e.menuId)'>{{ e.menuId }} - {{ e.name }} - {{ e.routerPath }}</a>
    </p>
    <p>面包屑</p>
    <span>{{ breadcrumb }}</span>
    <p>当前路由</p>
    <div v-if='currentRouteMenu'>
      【{{ currentRouteMenu.title }}】
    </div>
    <div>
      <button @click="openNav('dash-1111')">open1</button>
      <button @click="openNav('dash-2222')">open2</button>
      <button @click="openNav('dash-3333')">open3</button>
    </div>
    <button @click='closeNav(0)'>关闭全部</button>
    <button @click='closeNav(1)'>关闭左侧</button>
    <button @click='closeNav(2)'>关闭右侧</button>
    <button @click='closeNav(3)'>关闭其他</button>
    <div v-for='e in navList' :key='e.pageId'>
      <button @click='closeNav(4,e.pageId)'>CLOSE</button>
      <a :style="currentRouteMenu?.pageId===e.pageId?'color:red':''" @click='navClick(e.pageId)'>{{ e.title }}</a>
    </div>
    <div>
      user：{{ user }}
    </div>
    <div style='height: 500px;width: 400px;background: antiquewhite'>
      <router-view />
    </div>
  </div>
</template>

<script lang='ts'>

  import { computed, getCurrentInstance, watchEffect, watch, reactive, isReactive, isRef, ref, onMounted } from 'vue'
  import { HappyKitFramework, NavCloseType, HappyKitRouter, HappyKitSecurity } from 'happykit'
  import { Router } from 'vue-router'

  export default {
    setup() {
      const self = getCurrentInstance()
      const ctx = (self as any).ctx
      const instance = ctx.$happykit as HappyKitFramework
      const security = ctx.$security as HappyKitSecurity
      security.signIn('token-string', {
        username: 'username',
        image: 'image-url',
      })
      console.log(security)
      const user = security.getUser()

      const menuTree = instance.getMenuTree()
      const routeMappingList = instance.getRouteMappingList()
      const currentRouteMenu = instance.getCurrentMenuRoute()
      const navList = instance.getNavList()

      const breadcrumb = computed(() => {
        return currentRouteMenu.value?.menuItem.breadcrumb.map((e: any) => e.name).join('/')
      })

      const router = ctx.$router as Router

      const goto = (menuId: string) => {
        instance.clickMenuItem(menuId, (menuItems: any) => {
          // console.log('需要跳转1', menuItems)
          router.push(menuItems[0].routerPath)
        })
      }

      const tp: any = [NavCloseType.ALL, NavCloseType.LEFT, NavCloseType.RIGHT, NavCloseType.OTHER, NavCloseType.SELF]
      const closeNav = (type: number, pageId?: string) => {
        instance.closeNav(tp[type], pageId, (removedNavs: any, needNavs: any) => {
          console.log('已经移除1', removedNavs)
          console.log('需要跳转3', needNavs)
          // console.log('更新后的NavList', navList.value)
          if (needNavs.length > 0) {
            router.push(needNavs[0].to)
          } else {
            if (navList.value.length === 0) {
              router.push('/')
            }
          }
        })
      }

      const navClick = (pageId: string) => {
        instance.clickNavItem(pageId, (a: any, needNavs: any) => {
          // console.log('需要跳转2', needNavs)
          if (needNavs.length > 0) {
            router.push(needNavs[0].to)
          }
        })
      }

      const openNav = (title: string) => {
        (router as HappyKitRouter).push('/dashboard?id=1&title=' + title, title)
      }

      onMounted(() => {
        setInterval(() => {
          user.value.time = new Date().getTime()
        }, 1000)
      })

      return {
        menuTree,
        navList,
        routeMappingList,
        currentRouteMenu,
        breadcrumb,
        user,
        goto,
        closeNav,
        navClick,
        openNav,
      }
    },
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

