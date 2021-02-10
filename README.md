## 环境配置

### 安装nodejs

[Node.js](https://nodejs.org/zh-cn/)

### 安装yarn

[安装 | Yarn 中文文档 (bootcss.com)](https://yarn.bootcss.com/docs/install/#windows-stable)

### 安装IPFS

[IPFS](https://github.com/ipfs-shipyard/ipfs-desktop)

### 安装truffle

```shell
npm install -g truffle
```

### 安装ganache

[ganache链接](https://github.com/trufflesuite/ganache/releases))

### 安装MetaMask

[MetaMask](https://metamask.io/)

## 使用的组件

[Ant Design](https://ant.design/index-cn)

## 相关配置和启动项目

### IPFS 配置跨域

```shell
{
	"API": {
		"HTTPHeaders": {
            "Access-Control-Allow-Methods": [
                "POST",
                "GET"
               ],
               "Access-Control-Allow-Origin": [
                "http://localhost:3000",  # 运行本地3000端口跨域访问(可根据运行的Dapp实际端口号配置)
                "https://webui.ipfs.io",  
                "http://127.0.0.1:5001"
               ]
        	}
		}
	}
	......
}
```

### 启动

```shell
// 安装依赖
yarn install
// 启动项目
npm start
```

