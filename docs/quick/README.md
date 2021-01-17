# 快速上手

## 安装

```shell script
yarn add happykit
# npm install happykit
```

## 核心框架

### 创建和配置

默认的使用方式，在`main.ts`中

```ts
import {
    createDefaultRouterInterceptor,
    createHappyFramework,
    RouterInterceptorType
} from "happykit"

const happyFramework = createHappyFramework()
const beforeInterceptor = createDefaultRouterInterceptor({
    interceptorType: RouterInterceptorType.BEFORE,
    framework: happyFramework,
    dataLoader() {
        //实际开发环境应该从服务端拉取数据
        //实际拉取服务器数据尽可能使用async/await方式同步promise
        //同时应该根据实际的数据结构进行编写对应的适配器
        //同时应该自行处理好请求失败等情况
        return routerData
    },
    dataLoadFailureHandler() {
        console.log('数据加载失败')
    },
    routerInjectOption: {
        parentRoute: {
            name: 'home',
            path: '/home',
            component: () => import('@/views/home/index.vue'!)
        },
        routes: [],
        viewLoader(view) {
            return () => import(`@/views${view}`)
        }
    }
})

router.beforeEach((to: any, from: any, next: any) => {
    //使用拦截器
    beforeInterceptor.filter(to, from, next)
})

//升级路由
const happyKitRouter = upgradeRouter(happyFramework, router)


createApp(App)
    .use(store)
    .use(happyKitRouter) //引入升级后路由
    .use(happyFramework) //引入框架
    .mount("#app");

```

### 调用示例

```ts
import {getCurrentInstance} from 'vue'
import {HappyKitFramework} from 'happykit'

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
更多接口调用请前往阅读[接口说明](/api/)

## Security框架

### 创建和配置

```ts
import {createHappySecurity} from 'happykit'

//创建实例
const happySecurity = createHappySecurity()

//作为插件引入
app.use(happySecurity)
```

### 调用示例

```ts
const security = ctx.$security as HappyKitSecurity
security.signIn('user_token', {
    username: 'username',
    image: 'url',
    //...更多属性,请自行写入
})
//user是响应式对象
const user = security.getUser()
```
更多接口调用请前往阅读[接口说明](/api/)
