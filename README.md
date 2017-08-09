# vue-ream
vue的服务器渲染网上流传的demo和方法都与官方文档差不多，虽然方法可行，但对webpack的配置实在太麻烦。官方也推荐使用nuxt.js，nuxt很方便，基于vue扩展了一些功能，一条命令即自动生成项目结构和服务器渲染的相关配置代码，还可以根据pages目录结构自动生成路由，几乎不用人工配置。但感觉nuxt的约定太多，缺乏灵活性，而且除了你熟悉的vue，还需要额外的学习nuxt的各种规范和约定等等，增加学习成本。

无意中发了另一个基于vue扩展的服务器渲染框架ream.js。但除了ream官方一些简单的英文文档外，网络上没有一篇关于ream.js的介绍。但ream的使用非常简单方便，没有任何约束，只需通过ream命令生成项目后，完全跟使用vue一样的开发模式，连官方文档都不用看，没有额外的学习成本。

这是通过ream.js框架利用豆瓣api图书接口开发的一个demo。

## 运行到的扩展
   ream(vue) + vuex + vue-router + element-ui + axios

## 通过ream扩展实现vue服务器渲染
### 全局安装create-ream-app命令行
`npm install create-ream-app -g`
### 创建项目并安装依赖
`create-ream-app projectName`
> 注：create-ream-app命令创建项目后，会自动使用yarn安装依赖，可能需要翻墙，建议将yarn安装源改为国内源。
执行命令：
`yarn config set registry https://registry.npm.taobao.org`


#### 或进入已有项目目录，用yarn安装依赖：
`yarn install`
#### 运行开发环境： 
`npm run dev`
#### 打包：
`npm run build`

#### 开启服务器渲染：
`npm run start`

## License

MIT &copy; coolwind
