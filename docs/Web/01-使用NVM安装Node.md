# 使用NVM安装Node

不管是 Vue 还是 React，我们都需要先安装 Node.js 环境，但是项目中不同 Node 版本可能对于启动项目有影响，所以这里建议使用 nvm 来管理 Node 环境，这样我们一台电脑上就可以在多个 Node 版本之间来回切换了。

## 安装nvm
> nvm下载地址：[https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.zip)
>

安装 nvm 前，我们需要先卸载掉已经安装好的 Node.js。卸载也很简单，直接在软件中卸载即可，卸载完成后删除之前存储的缓存数据。

双击 nvm 开始安装，需要注意的是：nvm 安装期间会设置两个地址，第一个是 nvm 安装的位置，第二个位置是 nvm 后续安装管理 nodejs 的位置。除了这两个位置之外，其他无脑下一步即可。

安装完成之后，打开控制台查看`nvm version`判断是否安装成功。

## 设置国内镜像
> 淘宝镜像域名已经更换，具体如下：
>
> + <font style="color:rgb(1, 1, 1);">Web 站点：https://npmmirror.com</font>
> + <font style="color:rgb(1, 1, 1);">Registry Endpoint：https://registry.npmmirror.com</font>
>

然后执行以下命令设置 nvm 镜像为国内镜像：

```bash
# 设置 node 的镜像，默认：https://nodejs.org/dist/
nvm node_mirror https://npmmirror.com/mirrors/node/
# 设置 npm 的镜像，默认：https://github.com/npm/npm/archive/
nvm npm_mirror https://npmmirror.com/mirrors/npm/
```

## nvm 常用命令
下面是一些 nvm 的常用命令：

```bash
# 获取 nvm 命令解释
nvm --help
# 开启 node 版本管理
nvm on
# 关闭 node 版本管理
nvm off
# 查看可以下载的 node 版本
nvm list available
# 查看已安装的 node 版本
nvm list
# 安装指定版本（18.20.4）
nvm install 18.20.4
# 切换指定版本
nvm use 18.20.4
# 卸载指定版本
nvm unistall 18.20.4
```

## 安装 Yarn
```bash
# 
npm install -g yarn
# 设置国内镜像
yarn config set registry https://registry.npmmirror.com
# 查看版本
yarn -v
# 查看yarn配置
yarn config list
# 查看yarn当前镜像源
yarn config get registry
```

