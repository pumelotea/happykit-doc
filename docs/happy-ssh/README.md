# HappySSH
> 基于Electron+vue3+ts+ssh2实现的ssh连接工具   
> 目前只实现了基础的ssh连接功能


![preview](/happy-ssh-preview.png)

## Github
[https://github.com/pumelotea/happy-ssh](https://github.com/pumelotea/happy-ssh)


## 本地运行

```SHELL
cd client
yarn electron:serve
cd server
yarn run
```

## 打包编译
修改`client/src/background.ts`取消`// require('./agent')`注释
```SHELL
yarn electron:build
```


