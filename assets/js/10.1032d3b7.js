(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{364:function(t,a,s){"use strict";s.r(a);var e=s(42),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用手册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用手册"}},[t._v("#")]),t._v(" 使用手册")]),t._v(" "),s("h2",{attrs:{id:"happykitframework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#happykitframework"}},[t._v("#")]),t._v(" HappyKitFramework")]),t._v(" "),s("p",[t._v("核心框架")]),t._v(" "),s("h3",{attrs:{id:"创建实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建实例"}},[t._v("#")]),t._v(" 创建实例")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("createHappyFramework")]),t._v("进行创建实例，默认可以不传任何参数。在创建时可以自定义传入对象")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{\n    app: App, // vue实例\n    menuAdapter: MenuAdapter<MenuItem>, // 菜单数据适配器\n    pageIdFactory: PageIdFactory, // 页面id工厂\n    trackerIdFactory: TrackerIdFactory, // 追踪器id工厂\n    permissionDirectiveName: string, // 权限点指令名称\n    autoRegisterDirective: boolean // 是否自动注册权限点指令\n}\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("每个参数都是可以选的，只要传需要自定义的参数。")])]),t._v(" "),s("h3",{attrs:{id:"vue安装方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue安装方法"}},[t._v("#")]),t._v(" vue安装方法")]),t._v(" "),s("p",[t._v("简单通过"),s("code",[t._v("app.use")]),t._v("方法安装即可。框架会把自己挂载到vue全局变量中：\n"),s("code",[t._v("app.config.globalProperties.$happykit")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"权限指令v-point"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#权限指令v-point"}},[t._v("#")]),t._v(" 权限指令v-point")]),t._v(" "),s("p",[s("code",[t._v("v-point")]),t._v("权限指令是用于控制dom节点的显示隐藏。")]),t._v(" "),s("h4",{attrs:{id:"指令注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令注册"}},[t._v("#")]),t._v(" 指令注册")]),t._v(" "),s("p",[t._v("该指令在"),s("code",[t._v("app.use")]),t._v("挂载的时候默认同步进行自动注册。如果需要取消自动注册指令， 或者需要对指令更名，也是很简单的。在框架初始化的时候，可以通过参数设定。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{\n    permissionDirectiveName: 'point', // 权限点指令名称\n    autoRegisterDirective: true // 是否自动注册权限点指令\n}\n")])])]),s("h4",{attrs:{id:"指令用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令用法"}},[t._v("#")]),t._v(" 指令用法")]),t._v(" "),s("p",[t._v("只需要在dom节点上使用即可，例如：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-point")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("submit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("保存"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("code",[t._v("v-point")]),t._v("会根据当前路由所对应的菜单节点进行查找，如果找不到就删除dom节点。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[s("code",[t._v("v-point")]),t._v("不是响应式的，只会在组件"),s("code",[t._v("mounted")]),t._v("中执行一次。")])]),t._v(" "),s("h3",{attrs:{id:"客户端追踪器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端追踪器"}},[t._v("#")]),t._v(" 客户端追踪器")]),t._v(" "),s("p",[t._v("框架初始化的时候会"),s("strong",[t._v("强制")]),t._v("自动初始化追踪器，设计追踪器的目的是为了更好的标识客户端的唯一性。 目前追踪器只维护了一个客户端id，\n该id由框架默认的"),s("code",[t._v("trackerIdFactory")]),t._v("生成，该id会持久化到"),s("code",[t._v("localStroage")]),t._v("\n中，以key为"),s("code",[t._v("clientId")]),t._v("存储。")]),t._v(" "),s("h4",{attrs:{id:"用处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用处"}},[t._v("#")]),t._v(" 用处")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("getTracker")]),t._v("得到追踪器实例，然后您可以把该id携带在"),s("code",[t._v("http")]),t._v("请求上， 还可以用在"),s("code",[t._v("websocket")]),t._v("上作为客户端连接的唯一id。")]),t._v(" "),s("h3",{attrs:{id:"刷新客户端id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#刷新客户端id"}},[t._v("#")]),t._v(" 刷新客户端Id")]),t._v(" "),s("p",[t._v("有时候可能需要强制刷新本地的追踪器id，可以调用"),s("code",[t._v("refreshClientId")]),t._v("，它会完成刷新并且持久化。")]),t._v(" "),s("h3",{attrs:{id:"获取菜单树数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取菜单树数据"}},[t._v("#")]),t._v(" 获取菜单树数据")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("getMenuTree")]),t._v("返回响应式数组"),s("code",[t._v("ref([])")]),t._v("，它的类型签名为"),s("code",[t._v("Ref<MenuItem[]>")]),t._v("。 得到该变量后，您可以直接利用递归组件进行渲染树。")]),t._v(" "),s("h3",{attrs:{id:"刷新菜单树数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#刷新菜单树数据"}},[t._v("#")]),t._v(" 刷新菜单树数据")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("setMenuTree(rawData: any, dataAdapter?: MenuAdapter<MenuItem>)")]),t._v("可以主动初始化菜单树， 并且同步会刷新框架内部维护的路由列表"),s("code",[t._v("routeMappingList")]),t._v("\n和菜单id映射表"),s("code",[t._v("menuIdMappingMap")]),t._v("， 但是这不会刷新"),s("code",[t._v("vue-router")]),t._v("中的路由表。")]),t._v(" "),s("h3",{attrs:{id:"获取导航列表数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取导航列表数据"}},[t._v("#")]),t._v(" 获取导航列表数据")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("getNavList")]),t._v("返回响应式数组"),s("code",[t._v("ref([])")]),t._v("，它的类型签名为"),s("code",[t._v("Ref<NavItem[]>")]),t._v("。 得到该变量后，您可以直接利用"),s("code",[t._v("v-for")]),t._v("进行渲染。")]),t._v(" "),s("h3",{attrs:{id:"获取动态路由列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取动态路由列表"}},[t._v("#")]),t._v(" 获取动态路由列表")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("getRouteMappingList")]),t._v("返回响应式数组"),s("code",[t._v("ref([])")]),t._v("，它的类型签名为"),s("code",[t._v("Ref<NavItem[]>")]),t._v("。该数组是一个展平的以为数组。 您可以使用"),s("code",[t._v("injectRoutes")]),t._v("进行路由注入。")]),t._v(" "),s("h3",{attrs:{id:"获取当前激活的导航项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取当前激活的导航项"}},[t._v("#")]),t._v(" 获取当前激活的导航项")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("getCurrentMenuRoute")]),t._v("返回响应式对象"),s("code",[t._v("Ref<NavItem | null>")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"获取面包屑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取面包屑"}},[t._v("#")]),t._v(" 获取面包屑")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("getBreadcrumb")]),t._v("默认返回当前路由的面包屑，如果需要指定"),s("code",[t._v("pageId")]),t._v("的面包屑，需要主动传入该参数。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[s("code",[t._v("getBreadcrumb")]),t._v("返回的数组不是响应式的。")])]),t._v(" "),s("h3",{attrs:{id:"获取单个导航项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取单个导航项"}},[t._v("#")]),t._v(" 获取单个导航项")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("getNav")]),t._v("，传入"),s("code",[t._v("pageId")]),t._v("可以获取单个导航项。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[s("code",[t._v("getNav")]),t._v("返回的对象不是响应式的。")])]),t._v(" "),s("h3",{attrs:{id:"检查某个导航项是否存在"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查某个导航项是否存在"}},[t._v("#")]),t._v(" 检查某个导航项是否存在")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("isExistNav")]),t._v("，传入"),s("code",[t._v("pageId")]),t._v("可以获取"),s("code",[t._v("boolen")]),t._v("值。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[s("code",[t._v("isExistNav")]),t._v("返回的值不是响应式的。")])]),t._v(" "),s("h3",{attrs:{id:"打开导航项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打开导航项"}},[t._v("#")]),t._v(" 打开导航项")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("openNav(to: any, menuItem: MenuItem, title?: string)")]),t._v(","),s("code",[t._v("to")]),t._v("参数可以是拼接好的路由地址，也可以是以对象形式传入，该参数等同于"),s("code",[t._v("router.push")]),t._v("方法中的"),s("code",[t._v("to")]),t._v("参数；\n"),s("code",[t._v("menuItem")]),t._v("是目标路由所对应的菜单项；"),s("code",[t._v("title")]),t._v("是可选的，默认会使用"),s("code",[t._v("menuItem.name")]),t._v("属性，如果自定义传入则使用自定义传入的值，该值会影响导航项中的"),s("code",[t._v("title")]),t._v("属性。")]),t._v(" "),s("h3",{attrs:{id:"关闭导航项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭导航项"}},[t._v("#")]),t._v(" 关闭导航项")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("closeNav(type: NavCloseType, pageId?: string, event?: HappyKitNavEvent)")]),t._v("，可以通过不同方式关闭导航项。"),s("br"),t._v("\n通过"),s("code",[t._v("NavCloseType")]),t._v("枚举进行确定关闭的方式，当传入"),s("code",[t._v("NavCloseType.ALL")]),t._v("的时候，可以不传入"),s("code",[t._v("pageId")]),t._v("。")]),t._v(" "),s("ul",[s("li",[t._v("SELF 关闭指定的导航项")]),t._v(" "),s("li",[t._v("LEFT 关闭当前导航项左侧的所有导航项（不包含当前）")]),t._v(" "),s("li",[t._v("RIGHT 关闭当前导航项右侧侧的所有导航项（不包含当前）")]),t._v(" "),s("li",[t._v("OTHER 关闭当前导航项除外的所有导航项")]),t._v(" "),s("li",[t._v("ALL 关闭全部导航项")])]),t._v(" "),s("p",[t._v("一般在关闭导航项后需要做路由的跳转，因此框架提供一个回调事件来处理。该事件会返回需要跳转的导航项列表，和已经关闭的导航项列表。")]),t._v(" "),s("h3",{attrs:{id:"切换导航项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换导航项"}},[t._v("#")]),t._v(" 切换导航项")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("setCurrentMenuRoute(currentMenuRoute: NavItem | null)")]),t._v("，传入导航项即可。\n该调用不会触发路由的切换，需要手动调用"),s("code",[t._v("router.push")]),t._v("进行同步。")]),t._v(" "),s("h3",{attrs:{id:"菜单项点击事件代理方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#菜单项点击事件代理方法"}},[t._v("#")]),t._v(" 菜单项点击事件代理方法")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("clickMenuItem(menuId: string, event?: HappyKitMenuEvent)")]),t._v("，可以减少对框架数据状态的关注。\n在"),s("code",[t._v("event")]),t._v("中实现自定义逻辑。事件详见"),s("RouterLink",{attrs:{to:"/api/#happykitmenuevent"}},[t._v("HappyKitMenuEvent")]),t._v("。")],1),t._v(" "),s("h3",{attrs:{id:"导航项点击事件代理方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导航项点击事件代理方法"}},[t._v("#")]),t._v(" 导航项点击事件代理方法")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("clickNavItem(pageId: string, event?: HappyKitNavEvent)")]),t._v("，可以减少对框架数据状态的关注。\n在"),s("code",[t._v("event")]),t._v("中实现自定义逻辑。事件详见"),s("RouterLink",{attrs:{to:"/api/#happykitnavevent"}},[t._v("HappyKitNavEvent")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"happykitrouter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#happykitrouter"}},[t._v("#")]),t._v(" HappyKitRouter")]),t._v(" "),s("p",[s("code",[t._v("HappyKitRouter")]),t._v("集成了vue的"),s("code",[t._v("Router")]),t._v("，目前扩展了"),s("code",[t._v("push")]),t._v("的重载方法和集成了框架实例。")]),t._v(" "),s("h3",{attrs:{id:"创建实例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建实例-2"}},[t._v("#")]),t._v(" 创建实例")]),t._v(" "),s("p",[s("code",[t._v("HappyKitRouter")]),t._v("没有主动实例化方法，需要使用"),s("code",[t._v("upgradeRouter")]),t._v(",把"),s("code",[t._v("Router")]),t._v("升级为"),s("code",[t._v("HappyKitRouter")]),t._v("，保留了全部原始特性。\n这个路由升级不是必须的。")]),t._v(" "),s("h3",{attrs:{id:"页面跳转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面跳转"}},[t._v("#")]),t._v(" 页面跳转")]),t._v(" "),s("p",[t._v("升级路由后，现在支持2种路由跳转方法。")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RouteLocationRaw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("NavigationFailure "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 扩展的可选的title参数是作为导航项的标题")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RouteLocationRaw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("NavigationFailure "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("重载方法的调用需要做类型断言：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 像这样")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" HappyKitRouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" HappyKitRouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" HappyKitRouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"happykitsecurity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#happykitsecurity"}},[t._v("#")]),t._v(" HappyKitSecurity")]),t._v(" "),s("p",[t._v("安全框架，独立于核心框架，可以单独使用。")]),t._v(" "),s("h3",{attrs:{id:"实例化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例化"}},[t._v("#")]),t._v(" 实例化")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("createHappySecurity")]),t._v("进行创建实例，默认可以不传任何参数。在创建时可以自定义传入对象")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{\n  /**\n   * 存储引擎\n   */\n  storageEngine: StorageEngine\n}\n")])])]),s("p",[t._v("默认使用"),s("code",[t._v("localStorage")]),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("每个参数都是可以选的，只要传需要自定义的参数。")])]),t._v(" "),s("h3",{attrs:{id:"vue安装方法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue安装方法-2"}},[t._v("#")]),t._v(" vue安装方法")]),t._v(" "),s("p",[t._v("简单通过"),s("code",[t._v("app.use")]),t._v("方法安装即可。框架会把自己挂载到vue全局变量中：\n"),s("code",[t._v("app.config.globalProperties.$security")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[t._v("#")]),t._v(" 登录")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("signIn(token: string, user: User): void")]),t._v("，把数据写入框架中。")]),t._v(" "),s("h3",{attrs:{id:"注销"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注销"}},[t._v("#")]),t._v(" 注销")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("signOut(): void")]),t._v("，把数据从框架中清除。")]),t._v(" "),s("h3",{attrs:{id:"token刷新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token刷新"}},[t._v("#")]),t._v(" Token刷新")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("refreshToken(token: string): void")]),t._v("，把token刷新进框架，并且根据引擎类型持久化。")]),t._v(" "),s("h3",{attrs:{id:"token获取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token获取"}},[t._v("#")]),t._v(" Token获取")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("getToken(): string")]),t._v("，返回token。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),s("p",[t._v("token不是响应式数据。")])]),t._v(" "),s("h3",{attrs:{id:"用户信息刷新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户信息刷新"}},[t._v("#")]),t._v(" 用户信息刷新")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("refreshUser(user: User): void")]),t._v("，把用户信息对象刷新进框架，并且根据引擎类型持久化。")]),t._v(" "),s("h3",{attrs:{id:"用户信息获取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户信息获取"}},[t._v("#")]),t._v(" 用户信息获取")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("getUser(): Ref<User | null>")]),t._v("，返回响应式用户信息对象。可以用来直接渲染。")]),t._v(" "),s("h3",{attrs:{id:"数据加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据加载"}},[t._v("#")]),t._v(" 数据加载")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("loadFromStorage(): void")]),t._v("，从存储中读取全部数据到内存中。")]),t._v(" "),s("h3",{attrs:{id:"数据持久化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据持久化"}},[t._v("#")]),t._v(" 数据持久化")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("saveIntoStorage(): void")]),t._v("，把内存中的数据全部持久化到存储中。")]),t._v(" "),s("h3",{attrs:{id:"数据清除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据清除"}},[t._v("#")]),t._v(" 数据清除")]),t._v(" "),s("p",[t._v("调用"),s("code",[t._v("flushStorage(): void")]),t._v("，清空存储中框架的全部数据。")]),t._v(" "),s("h2",{attrs:{id:"高阶用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高阶用法"}},[t._v("#")]),t._v(" 高阶用法")]),t._v(" "),s("p",[t._v("高阶用法可以更加灵活的更改一些配置和策略。")]),t._v(" "),s("h3",{attrs:{id:"自定义菜单适配器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义菜单适配器"}},[t._v("#")]),t._v(" 自定义菜单适配器")]),t._v(" "),s("p",[t._v("由于服务端返回的菜单数据结构和框架中的数据结构不一样，因此我们需要自定义适配器。"),s("br"),t._v("\n实现"),s("code",[t._v("MenuAdapter<MenuItem>")]),t._v("这个接口即可。然后在框架实例化的时候作为参数传入，覆盖掉默认的参数数据适配器即可。")]),t._v(" "),s("h3",{attrs:{id:"自定义追踪器id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义追踪器id"}},[t._v("#")]),t._v(" 自定义追踪器id")]),t._v(" "),s("p",[t._v("实现"),s("code",[t._v("TrackerIdFactory")]),t._v("这个接口即可。然后在框架实例化的时候作为参数传入，覆盖掉默认的参数数据适配器即可。")]),t._v(" "),s("h3",{attrs:{id:"自定义页面id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义页面id"}},[t._v("#")]),t._v(" 自定义页面id")]),t._v(" "),s("p",[t._v("实现"),s("code",[t._v("PageIdFactory")]),t._v("这个接口即可。然后在框架实例化的时候作为参数传入，覆盖掉默认的参数数据适配器即可。")])])}),[],!1,null,null,null);a.default=v.exports}}]);