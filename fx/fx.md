1、我主要讲的是我们纯RN项目的更新流程以及基于热更新codepush服务开发的RN APP管理及版本更新控制工具

维护一套版本管理升级的原因：

因为我们负责的项目是根公司员工用的，也就是企业应用；并且ios用的开发证书也是企业证书，这就注定我们的项目不能发到应用商店；android是没有这个限制的；

下边这个是我从网上收集的一个账号类型以及他们的用途

![zhanghaoqubie](/Users/sishaohua/Desktop/fen/zhanghaoqubie.jpeg)

2、接下来先介绍一下我们项目里面使用的两种更新方式；

* 整包更新
* 热更新（code-push）

3、先看一下整包更新的更新流程

因为我们不需要跳转到应用商店，所以整包更新的流程就比较简单的；我们只需要在打开应用的时候，发一个请求到服务器，去获取版本的信息；然后和自身版本码进行比较，如果发现获取的数据里的版本码大于应用自身的，说明已经有新版本了，我们就弹出提示框提示用户，有新版本了，同时在获取到的数据里面有新包的url地址，点击确定更新，就去下载新包进行更新；

【介绍一下获取到的字段，干什么用的】【画 更新图】 【画：截一个更新时的图片进行展示，整包更新】

4、热更新 code-push的更新流程

先介绍一下codepush，codepush是微软开发的一个开源项目，供ReactNative 、CORDOVA、WINDOWS等平台提供热更新服务，它只提供js/css/图片前端相关的资源的更新，如果修改了的文件涉及到原生的文件，它就更新不了，这是就必须使用整包更新；

codepush 分为两部分，一部分是装在客户端的包，另一部分是服务器；

codepush更新的优点，更新方便、不需要打包，只需要执行命令编译js，然后会讲文件上传到服务器，服务器会根据当前上传上去的js与上一版本进行diff比较，同时生成一个文件的hash；这个hash是很重要的，它是作为判断是否有新更新的依据；

接下来看一下它的更新流程；【示意图】

看一下它常用的命令