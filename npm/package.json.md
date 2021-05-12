`package.json`文件中`scripts`属性是一个字典，可以自定义一些属性，通过`npm run  [cmd]`命令执行，同时它还包含了一些生命周期属性，也就是在执行某些操作时会执行对应的生命周期命令；下面的介绍相关生命周期属性及执行条件：



`prepublish`：在打包和发布该软件之前，以及在不带任何参数的本地`npm i`安装上运行；

`prepare`：在打包和发布该软件包之前，以及在不带任何参数的本地`npm i`安装上，都会运行。具体时间段在预发布`prepublish`之后，仅仅预发布`prepublishOnly`之前运行；

`prepublishOnly`：在准备和大宝软件包之前运行，仅仅在`npm publish`命令上运行；

`prepack`：在打包`tarball`之前运行，在`npm pack`、`npm publish`和安装`git`依赖项时

`postpack`：在生成`tarball`并将其移至最终目的地运行

`publish`,`postpublis`：在发布包之后运行

`preinstall`：在安装软件包之前运行

`install`,`postinstall`：在安装软件包之后运行

`preuninstall`,`uninstall`：在卸载软件包之前运行

`postuninstall`：在卸载软件包之后运行

`preversion`：在提高软件包版本之前运行

`version`：在提高软件包版本之后运行，但在提交之前

`postversion`：在提高软件包版本、并提交之后运行

`pretest`、`test`、`posttest`：执行`npm test`命令时运行

`prestop`、`stop`、`poststop`：执行`npm stop`命令时运行

`prestart`、`start`、`poststart`：执行`npm start`命令时运行

`prerestart`、`restart`、`postrestart`：执行`npm restart`命令时运行，需要注意的是，如果未提供重新启动脚本，则`npm restart`将运行停止和启动脚本；

`preshrinkwrap`、`shrinkwrap`、`postshrinkwrap`：执行`npm shrinkwrap`命令时执行；

### 例子

安装husky的时候配置，该配置就是在安装软件包的时候，先通过`husky install`命令来修改`Git hooks`默认路径指向，最终结果为：`core.hooksPath=.husky`，`git hooks`默认路径为`.git/hooks`;

```
{
	"scripts":{
		"prepare":"husky install"
	}
}
```



[参考地址](http://caibaojian.com/npm/files/package.json.html)



