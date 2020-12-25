# Vue开发规范

<table>
<tr><td>版本号</td><td>v1.0</td></tr>
<tr><td>撰写时间</td><td>2020年11月20日</td></tr>
<tr><td>适用范围</td><td>vue2开发、vue3开发</td></tr>
<tr><td>注意</td><td>下文出现的代码是基于vue3</td></tr>
</table>

## 目录
[[toc]]

## 1.前言
一个良好的开发习惯，对于团队来讲是必不可缺的。能提高团队的协同开发效率，减少不需要的沟通成本。以下对于几点常见的内容，我们来约定一下。我们的约定不一定是符合大厂要求的，我们需要适应我们自己的情况。一口吃成胖子是不太现实的。

## 2.工程结构
常用的SPA工程结构如下（不区分vue2、vue3）

```
some-project（ts+vue3描述）
├── README.md（必须要写readme，在其中表述清除项目的相关信息，比如名称）
├── babel.config.js
├── docker（存放各种环境的dockerfile）
│   ├── prod
│   │   └── Dockerfile
│   └── test
│       └── Dockerfile
├── nginx.conf（nginx配置文件，用于docker构建镜像）
├── package.json（项目依赖配置）
├── public（静态资源目录）
│   ├── config
│   │   └── api.js（剥离到外部的全局应用配置）
│   ├── favicon.ico
│   └── index.html
├── src（源代码目录）
│   ├── App.vue（根组件）
│   ├── apis（http接口）
│   │   ├── config.ts（接口请求配置）
│   │   ├── definition.ts（接口定义描述）
│   │   └── index.ts（通用请求方法）
│   ├── assets（存放小型静态资源，小型资源会转成base64直接嵌入文件）
│   │   └── logo.png
│   ├── common（通用方法和工具）
│   │   ├── eventBus.ts（事件总线）
│   │   ├── handlers.ts（各种处理器方法）
│   │   └── utils.ts（常用工具方法）
│   ├── components（全局通用组件）
│   │   └── DemoCom.vue
│   ├── main.ts（初始化入口）
│   ├── router（路由）
│   │   ├── config.ts（路由配置）
│   │   └── index.ts（路由初始化）
│   ├── shims-vue.d.ts
│   ├── store（vuex全局状态管理，如果需要分模块，请为模块创建一个单独的模块js，存放在当前目录下，再在index中引入注册）
│   │   └── index.ts（vuex初始化）
│   └── views（页面视图）
│       └── home（每个页面都应该有自己的文件夹，当前页面的局部组件存放在该页面下的components文件下）
│           └── index.vue（页面统一叫index）
├── tsconfig.json（ts配置文件）
├── vue.config.js（vue的全局配置文件）
└── yarn.lock（yarn构建依赖锁定文件）
```

## 3.README.md
`README.md`的存在可以很好地帮助开发人员了解项目的部分内容，也便于区分项目，在项目初期我们应该尽可能先把这个文件给编写好。

- 文件命名要求为`README.md`存放在项目的根目录下
- 使用`markdown`语法进行编写

例如：

```
# vue-test-app（项目名称）

## 应用描述
这是一个vue的测试应用。主要测试vue3的新特性。

## 主要人员
张三、小明、李四（负责人）

```

## 4.文件命名要求

### 4.1.组件

全部组件的命名都要求为大驼峰，举个例子AppButton.vue，而且最好携带统一的前缀

>[Vue官方的代码风格建议](https://www.vue3js.cn/docs/zh/style-guide/#%E4%BC%98%E5%85%88%E7%BA%A7-b-%E7%9A%84%E8%A7%84%E5%88%99-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90-%E5%A2%9E%E5%BC%BA%E4%BB%A3%E7%A0%81%E5%8F%AF%E8%AF%BB%E6%80%A7)  
> 反例
> 
```
components/
|- Heading.vue
|- MySidebar.vue
```
```
components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue
```
```
components/
|- SearchSidebar.vue
|- NavigationForSearchSidebar.vue
```


> 好例子
>
```
components/
|- TheHeading.vue
|- TheSidebar.vue
```
```
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
```
```
components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
```


### 4.2.Typescript、Javascript文件
- 一律使用小驼峰的命名方式进行命名js和ts文件，包括其中定义的变量、方法名称。   
- 尽可能使用ES6语法进行编写代码。
- 尽可能使用常量来定义对象、数组、方法；根据应用场景进行随机应变。
- 不要过度封装无意义的函数，导致阅读困难。
- 单个方法的代码长度尽可能不要超过80行。
- 尽可能保持方法功能的单一性。


### 4.3.文件夹
- 文件夹的命名：**横线连接 (kebab-case)**  
 
比如你可能需要命名一个页面(用户中心)的文件夹为`user-center`,请注意：不期望是`userCenter`或者`UserCenter`。

### 4.4.页面视图
- 页面视图的命名：**横线连接 (kebab-case)**  
 
比如你可能需要命名一个页面为`用户列表`，期望的命名方式为`index.vue`,但是考虑到`views`文件夹下会有很多页面，因此，我们需要给每个页面外层包裹一个`文件夹`（正如上一节所描述的）。最后得到的文件路径是 `views/user-list/index.vue`

页面视图也是vue的标准单文件组件，我们把它称之为页面视图是为了和功能性的组件进行区分，以减少沟通成本和认知成本。页面视图更加倾向于实现页面的布局和对功能组件的使用。最终通过**路由系统（vue-router）**映射为用户可以直接通过浏览器访问的页面。      
 
如果页面视图需要编写局部组件，请把局部组件存放在该页面视图文件夹下的`components`文件夹（如果不存在请自建）。如果几个页面视图之间需要共用一部分局部组件，可以在`views`文件夹下单独创建一个`components`文件夹，存放于此。这里还应该根据实际情况，看需不需要把局部组件提升为全局组件，全局组件存放在最外层独立的`components `文件夹中。




## 5.插件开发
插件的开发尽可能不使用extend、mixin模式来进行开发，因为extend、mixin的工作原理会导致代码可读性变差，还会出现变量、方法等冲突，造成调试困难，令开发人员莫名其妙。插件的功能尽可能单调、不耦合其他插件。      

- 插件尽可能使用`install`的方式去开发，然后在app实例上进行use。

这里贴出`httpApi`请求插件的代码（基于vue3+typescript）：

```typescript
import axios from 'axios'
import axiosConfig from '@/apis/config'
import apiDefinition from '@/apis/definition'
import { App } from 'vue'
import {
  requestInterceptor,
  responseInterceptor,
  requestErrorHandler,
  responseErrorHandler
} from '@/apis/config'

//创建http请求客户端
export const httpClient = axios.create(axiosConfig)
httpClient.interceptors.request.use(requestInterceptor, requestErrorHandler)
httpClient.interceptors.response.use(responseInterceptor, responseErrorHandler)

export function $post(url: string, params: any) {
  return new Promise((resolve, reject) => {
    httpClient
      .post(url, params)
      .then(
        res => {
          console.log(res)
          resolve(res.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(err => {
        reject(err)
      })
  })
}

export function $get(url: string, params: any) {
  return new Promise((resolve, reject) => {
    httpClient
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function $delete(url: string, params: any) {
  return new Promise((resolve, reject) => {
    httpClient
      .delete(url, { params: params })
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(err => {
        reject(err)
      })
  })
}

export function $put(url: string, params: any) {
  return new Promise((resolve, reject) => {
    httpClient
      .put(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const http = {
  // eslint-disable-next-line no-unused-vars
  install(app: App, options: any) { // 必须包含install方法！！！！！！！！！！！！！！！
    app.config.globalProperties.$http = httpClient
    app.config.globalProperties.$api = this
  },
  ...apiDefinition
}

export default http
```
***注意：插件代码只是作为参考，其中导出的http模块中包含了`install`方法，因此我们可以在`main.ts`中导入并调用***

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import http from '@/apis' //注意这行代码！！！！！！！！！！！！
import {errorHandler,warnHandler} from '@/common/handlers.ts'
import eventBus from '@/common/eventBus'

const app = createApp(App)
app.config.errorHandler = errorHandler
app.config.warnHandler = warnHandler
app.use(router)
app.use(http) //注意这行代码！！！！！！！！！！！！
app.use(store)
app.use(eventBus)
app.mount('#app')
```

## 6.组件开发

- 组件开发统一使用SFC方式。
- 组件内部name属性必须填写和组件的文件名保持一致。


对于名词的定义请查询官网等其他资料。比较常用的是SFC模式，就是单文件组件，其中包含模板代码块、js或者ts代码块、还有css代码块。对于一些更加灵活的组件可以使用`render`函数进行编写。在vue3中该函数可以全局导入。
## 7.组件参数、事件

- 组件`props`，声明的时候使用小驼峰形式，在使用时请使用**横线连接 (kebab-case)** 的方式。
- 在组件内使用`emit`的时候，自定义事件名称也应该遵守上一条的约定。

例子：

子组件

```typescript
export default defineComponent(
    {
      name: 'DemoCom',
      props: {
        name: {
          type: String
        },
        userId:{
          type:String
        }
      },
      setup(props, { emit }) {
        const demoBtnClick = () => {
          emit('demo-click', props.name,props.userId)
        }

        return {
          demoBtnClick
        }
      }
    }
)
```

父组件内调用

``` html
<demo-com @demo-click="someFunction" name="小明" user-id="10000"></demo-com>
```



## 8.错误处理

- 我们应该全局配置错误处理器
- 编写代码的时候尽可能减少`try....catch...`语句的使用，否则代码将会变得很冗长。

配置方式参考[vue官方网站](https://www.vue3js.cn/docs/zh/api/application-config.html#errorhandler)。
配置好全局的处理器后，我们暂时可以把日志输出到控制台，以便调试用。后续有机会的话，我们还可以把这部分日志传输到服务器，以便追踪远程客户端出现的问题。

## 9.css命名规范、作用域、覆盖

- 必须使用**横线连接 (kebab-case)**的方式进行命名`class`，`class`的命名应该具有含义。
- 内敛在html上的样式尽可能要少。
- 对于在Vue组件内的`style`代码块，必须加上`scoped`进行作用域限定。
- 对于部分极端情况需要进行样式覆盖，必须限定覆盖作用范围，可以通过css选择器来进行限定。
- 对于需要全局共用的样式，我们应该抽取到单独的`css`、`scss`文件中。
- 可以使用纯`css`进行编写；也可以使用`node-sass`库来进行编写更高阶的样式，这里限定下，我们只用**`scss`**进行开发。


## 10.工具方法开发

- 开发工具方法的时候，要保证工具方法的单一性，尽可能不要去耦合其他的方法。
- 使用ES6语法进行方法的导出。
- 必须要写明注释，参数要进一步做解释说明。

## 11.定时器的使用
- 定时器的使用包括`setTimeout、setInterval`，必须在离开页面时进行手动清除，分别调用`clearTimeout`、`clearInterval`。

以免出现在其他页面还在定时执行上一个页面的相关逻辑，造成性能问题和莫名其妙的问题。
针对vue2，我们可以在`beforeDestory`生命钩子中进行清除；针对vue3，我们可以在`onBeforeUnmount`生命钩子中进行清除。

下图展示的是vue的生命周期
![vue生命钩子](https://www.vue3js.cn/docs/zh/images/lifecycle.png)


## 12.模块、方法、变量导入导出
- 导入导出遵循[**ES6模块**](https://www.runoob.com/w3cnote/es6-module.html)规范即可。

注意：不推荐使用class的方式来实现模块和其他的类库，我们不期望把事情搞复杂了。

例如：导入文件模块相关的方法

`import {stat,exists,readFile} from 'fs'`

例如：导入vue模块的相关方法

`import { defineComponent } from 'vue'`

例如：导出工具类中的时间格式化方法

`export function timeFormat(time: Date | string | number, format?: string): string {.......}`

例如：导出组件

`export default defineComponent(.......)`




## 13.localstorage、cookie
`localStorage`的使用是比较随意的，因为它的作用域是跟着`协议:域名:端口`走的。而cookie是跟着`域名`+`path`走的，因此使用同一个项目模板进行开发的多个项目部署在一台机器上很容易出现cookie冲突。为了解决这个问题，我们只要对`cookie`的使用进行一个规范：

- 每个项目的`cookie`的key应该加上一个`clientId`作为前缀（这个方法目前还不太优雅）。

## 14.接口请求的规范
请求规范主要依托于后端接口设计的规范，前端主要是跟进后端的设计。

- 图片、文件类的上传接口，杜绝使用base64的方式进行传输，应该使用`Formdata`的方式进行上传。
- 接口响应数据结构应该是一个通用的数据传输结构（前后端应该进行约定）。
- 避免响应数据结构JSON中还包含以字符串形式出现的JSON串，否则会出现不必要的二次解析。
- 避免请求的JSON中包含JSON字符串。
- token、clientId等通用参数统一在请求的headers中进行传输。
- 统一使用`axios`类库进行接口的请求（一般会由项目模板预设好）。

## 15.状态vuex的使用约定
尽可能杜绝直接对状态集的直接赋值、读取，应该使用`actions`、`mutations`、`getters`。不太好的例子比如：`$store.state.user.nickname='小明'`、`const value = $store.state.user.nickname`。使用方法不太会的开发者请参考[官方文档](https://vuex.vuejs.org/)。

## 16.路由router的使用约定
路由我们统一使用vue官方提供的`vue-router`，其他第三方路由实现请参考第三方各自的文档。

- 路由的path尽可能是用**横线连接 (kebab-case)** 的方式，比如：`/user-center`
- 路由参数的传递不做任何限制。可以使用`vue-router`提供的任何传参方式。
- 路由meta的使用应该读取大于写入，在某些情况下写入是无效的，不应该作为数据交换的渠道。
- 路由中组件的引入统一为`() => import('组件路径')`

## 17.clientId
> 引入客户端`clientId`可以更好的帮助我们收集和追踪客户端的错误信息，`clientId`比`用户id`颗粒度更加细致。因此我们约定我们的项目中，必须在应用实例化完成前进行`clientId`的创建和缓存，以保证当前客户端和服务器通信的唯一性。**这里存在一个风险**：用户可以手动拷贝当前客户端id去其他浏览器中使用，但是这是少数的情况。

`客户端clientId`的创建，我们可以采用简单高效的`UUID`、`GUID`，如果需要考虑到减小流量，我们可以采用更短的id算法。
`clientId`后续需要配合后端接口，同步携带在请求中,`clientId`携带在`headers`中。

## 18.包管理工具的统一
对于一般项目我们使用`yarn`作为包管理工具，`npm`也可以使用，但是为了统一技术体系，我们在实际开发中还是选择`yarn`。`yarn`的构建速度要快些。

## 19.结尾
后续我们的项目模板中会把大部分的基础设施给建设好，开发者无需关心其运作状态，但是最好知道其设计目的。
