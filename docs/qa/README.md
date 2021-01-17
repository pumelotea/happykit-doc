# 常见问题

## 类型不兼容
由于`happykit`中的依赖库版本可能会低于或高于您项目中的同类库版本，会引起类型不兼容的问题。临时解决方案，利用`TypeScript`的类型断言能力`as any`即可。

## 路由警告
```
[Vue Router warn]: No match found for location with path "/"
warn @ vue-router.esm-bundler.js?6c02:50
resolve @ vue-router.esm-bundler.js?6c02:2715
pushWithRedirect @ vue-router.esm-bundler.js?6c02:2806
push @ vue-router.esm-bundler.js?6c02:2800
install @ vue-router.esm-bundler.js?6c02:3158
use @ runtime-core.esm-bundler.js?5c40:2911
eval @ main.ts?cd49:25
./src/main.ts @ app.js:1617
__webpack_require__ @ app.js:854
fn @ app.js:151
1 @ app.js:1690
__webpack_require__ @ app.js:854
checkDeferredModules @ app.js:46
(匿名) @ app.js:994
(匿名) @ app.js:997
:8081/#/:1 
```
在动态路由页面强制刷新，即`F5`or `CMD+R`刷新页面的时候，会出现上述的警告，原因是框架会调用`router.resolve`
进行解析和生成`pageId`。该警告只会出现一次，动态路由装载完成后就不会再次出现。
