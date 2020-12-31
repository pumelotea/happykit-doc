# 接口说明

## 工厂方法

### createEmptyMenuItem
```ts
export declare function createEmptyMenuItem(): MenuItem
```

### createDefaultMenuAdapter
```ts
export declare function createDefaultMenuAdapter(): MenuAdapter<MenuItem>
```

### createDefaultPageIdFactory
```ts
export declare function createDefaultPageIdFactory(
  framework: HappyKitFramework
): PageIdFactory
```

### injectRoutes
```ts
export declare function injectRoutes(options: RouterInjectOption):void
```

### createDefaultRouterInterceptor
```ts
export declare function createDefaultRouterInterceptor(
  options: RouterInterceptorOption
): RouterInterceptor
```

## 接口定义

### MenuType
```ts
/**
 * 菜单类型
 */
export declare enum MenuType {
    MENU = 0,
    BUTTON = 1
}
```
### LinkTarget
```ts
/**
 * 链接跳转类型
 */
export declare enum LinkTarget {
    SELF = 0,
    TAB = 1,
    BLANK = 2
}
```
### NavCloseType
```ts
/**
 * 导航项关闭类型
 */
export declare enum NavCloseType {
    SELF = 0,
    LEFT = 1,
    RIGHT = 2,
    OTHER = 3,
    ALL = 4
}
```
### RouterInterceptorType
```ts
/**
 * 路由拦截类型
 */
export declare enum RouterInterceptorType {
    BEFORE = 0,
    AFTER = 1
}
```
### HTTPInterceptorType
```ts
/**
 * HTTP请求拦截类型
 */
export declare enum HTTPInterceptorType {
    BEFORE = 0,
    AFTER = 1
}
```
### MenuItem
```ts
/**
 * 菜单数据结构
 */
export declare interface MenuItem {
    /**
     * 必须要有的数据
     */
    menuId: string;
    name: string;
    icon: string;
    path: string;
    view: string;
    isRouter: boolean;
    isKeepalive: boolean;
    type: MenuType;
    externalLink: boolean;
    linkTarget: LinkTarget;
    externalLinkAddress: string;
    hide: boolean;
    isHome: boolean;
    permissionKey: string;
    children: Array<MenuItem>;
    /**
     * 预处理后的数据
     * 使用上面的数据经过预处理后的数据
     */
    routerPath: string;
    menuPath: Array<MenuItem>;
    breadcrumb: Array<MenuItem>;
    buttonList: Array<MenuItem>;
    buttonsMap: Map<string, MenuItem>;
    [propName: string]: any;
}
```
### Tracker
```ts
/**
 * 追踪器数据结构
 */
export declare interface Tracker {
    clientId: string;
}
```
### NavItem
```ts
/**
 * 导航项数据结构
 */
export declare interface NavItem {
    pageId: string;
    title: string;
    to: any;
    menuItem: MenuItem;
}
```
### Adapter
```ts
/**
 * 通用适配器
 */
export declare interface Adapter<T> {
    convert(rawData: any): Array<T>;
}
```
### MenuAdapter
```ts
/**
 * 菜单数据适配器
 */
export declare interface MenuAdapter<T> {
    convert(rawData: any): {
        routeMappingList: T[];
        menuTreeConverted: T[];
        menuIdMappingMap: Map<string, T>;
    };
}
```
### HappyKitNavEvent
```ts
/**
 * 导航项相关事件
 */
export declare interface HappyKitNavEvent {
    (removedNavs: Array<NavItem>, needNavs: Array<NavItem>): void;
}
```
### HappyKitMenuEvent
```ts
/**
 * 菜单项相关事件
 */
export declare interface HappyKitMenuEvent {
    (menuItems: Array<MenuItem>): void;
}
```
### CurrentMenuRoute
```ts
/**
 * 当前菜单路由
 */
export declare interface CurrentMenuRoute {
    value: null | NavItem;
}
```
### PageIdFactory
```ts
/**
 * 页面id工厂结构
 */
export declare interface PageIdFactory {
    framework: HappyKitFramework;
    generate(uniqueString: string): string;
    getNextPageId(to: any): string;
}
```
### HappyKitFrameworkOption
```ts
/**
 * 核心框架选项数据结构
 */
export declare interface HappyKitFrameworkOption {
    app?: App;
    menuAdapter?: MenuAdapter<MenuItem>;
    pageIdFactory?: PageIdFactory;
    [propName: string]: any;
}
```
### HappyKitFramework
```ts
/**
 * 框架
 */
export declare interface HappyKitFramework {
    /**
     * 初始化属性
     */
    options: HappyKitFrameworkOption;
    /**
     * 菜单树
     */
    menuTree: {
        value: Array<MenuItem>;
    };
    /**
     * 导航列表
     */
    navigatorList: {
        value: Array<NavItem>;
    };
    /**
     * 路由列表
     */
    routeMappingList: {
        value: Array<MenuItem>;
    };
    /**
     * 菜单id映射表
     * 提高查找速度
     */
    menuIdMappingMap: {
        value: Map<string, MenuItem>;
    };
    /**
     * 当前路由
     */
    currentMenuRoute: CurrentMenuRoute;
    /**
     * 路由初始化完成标记
     */
    routerInitiated: boolean;
    /**
     * 客户端追踪器
     */
    tracker: Tracker;
    /**
     * 初始化器
     * @param options
     */
    init(options?: any): void;
    /**
     * 设置菜单树
     * @param rawData 原始数据
     * @param dataAdapter 数据适配器，提供默认的数据适配器
     */
    setMenuTree(rawData: any, dataAdapter?: MenuAdapter<MenuItem>): void;
    /**
     * 设置当前的菜单路由
     * @param currentMenuRoute
     */
    setCurrentMenuRoute(currentMenuRoute: NavItem | null): void;
    /**
     * 获取菜单树
     */
    getMenuTree(): {
        value: Array<MenuItem>;
    };
    /**
     * 获取路由列表
     */
    getRouteMappingList(): {
        value: Array<MenuItem>;
    };
    /**
     * 获取当前菜单路由
     */
    getCurrentMenuRoute(): CurrentMenuRoute;
    /**
     * 获取面包屑
     * @param pageId 如果不传，默认获取当前激活的
     */
    getBreadcrumb(pageId?: string): Array<MenuItem>;
    /**
     * 获取追踪器实例
     */
    getTracker(): Tracker;
    /**
     * 初始化追踪器
     */
    initTracker(): void;
    /**
     * 刷新客户端id
     */
    refreshClientId(): string;
    /**
     * 获取导航列表
     */
    getNavList(): {
        value: Array<NavItem>;
    };
    getNav(pageId: string): NavItem | null;
    /**
     * 是否存在该导航项
     * @param pageId
     */
    isExistNav(pageId: string): boolean;
    /**
     * 打开新的导航项
     *
     * #case1:
     * 同一个路由，只能打开一个页面
     * #case2:
     * 同一个路由，打开多个页面，不同参数
     *
     * @param to 前往目标
     * @param menuItem
     * @param title 可选的标题
     */
    openNav(to: any, menuItem: MenuItem, title?: string): NavItem | null;
    /**
     * 关闭导航项
     * @param type
     * @param pageId
     * @param event
     */
    closeNav(type: NavCloseType, pageId?: string, event?: HappyKitNavEvent): void;
    /**
     * 点击导航项
     * @param pageId
     * @param event
     */
    clickNavItem(pageId: string, event?: HappyKitNavEvent): void;
    /**
     * 点击菜单项
     * @param menuId
     * @param event
     */
    clickMenuItem(menuId: string, event?: HappyKitMenuEvent): void;
    /**
     * vue插件方法
     * @param app
     */
    install(app: App): void;
}
```
### RouterInjectOption
```ts
/**
 * 路由注入选项
 */
export declare interface RouterInjectOption {
    /**
     * 父级路由
     * 子路由全部注入在该路由下
     */
    parentRoute: RouteRecordRaw;
    /**
     * 待注入的路由实例
     */
    router?: Router;
    /**
     * 待注入的路由数组
     */
    routes: Array<MenuItem>;
    /**
     * 视图组件加载器
     * @param view
     */
    viewLoader(view: string): any;
}
```
### RouterInterceptorOption
```ts
/**
 * 路由拦截器选项
 */
export declare interface RouterInterceptorOption {
    /**
     * 框架实例
     * 作为上下文
     */
    framework: HappyKitFramework;
    /**
     * 路由拦截类型
     */
    interceptorType: RouterInterceptorType;
    /**
     * 数据加载器
     */
    dataLoader?(): any;
    /**
     * 数据加载失败回调
     */
    dataLoadFailureHandler?(): void;
    /**
     * 路由注入参数
     * 用于拦截时需要注入的情况
     */
    routerInjectOption?: RouterInjectOption;
}
```
### RouterInterceptor

```ts
/**
 * 路由拦截器
 */
export declare interface RouterInterceptor {
    /**
     * 路由拦截参数
     */
    options: RouterInterceptorOption;
    /**
     * 拦截方法
     * @param to
     * @param from
     * @param next
     */
    filter(to: RouteLocationNormalized, from: RouteLocationNormalized, next?: NavigationGuardNext): void;
}
```


