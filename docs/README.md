# Happykit

> **a full new admin framework engine for vue3js!**


## 提案
```ts
/**
 * 2020年12月24日16:50:46
 */
import { createApp } from 'vue'
import
{
  /**
   * happykit相关的静态独立工厂方法
   */
  //创建框架实例
  createFramework,
  //创建路由实例
  createRouter,
  //创建接口请求器实例
  createHttp,
  //创建路由拦截器
  createRouterInterceptor,
  //创建接口请求拦截器
  createHttpInterceptor,
  //路由拦截类型枚举
  RouterInterceptor,
  //请求拦截类型枚举
  HttpInterceptor,
  //创建默认路由拦截器
  createDefaultRouterInterceptor,
  //创建默认接口请求拦截器
  createDefaultHttpInterceptor
} from 'happykit'

//框架相关
const options = {}
const framework = createFramework(options)


/**
 * 路由相关
 */
const routerBefore = createRouterInterceptor(RouterInterceptor.Before,(to: any, from: any, next: any) => {
  next()
})
const routerAfter = createRouterInterceptor(RouterInterceptor.After,(to: any, from: any) => {})
const routerOptions = {
  routerBefore,
  routerAfter
}
const router = createRouter(routerOptions)


/**
 * axios相关
 */
const httpBefore = createHttpInterceptor(HttpInterceptor.Before,(config: any) => {})
const httpAfter = createHttpInterceptor(HttpInterceptor.After,(response: any) => {
  return response
})
const httpOptions = {
  httpBefore,
  httpAfter,
}
const http = createHttp(httpOptions)



const app = createApp(App)
/**
 * framework在install方法中进行挂载到vue实例的全局变量中。
 */
app.use(framework)
app.use(router)
app.use(http)
app.mount('#app')

```
