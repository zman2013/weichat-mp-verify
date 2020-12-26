# 概要
微信公众号有两处需要进行程序认证：网站有效性认证、网页授权回调认证

## 网站有效性认证
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Access_Overview.html)

### 操作步骤
1. 在公众号后台获取token
获取方法：后台 -> 基本配置 -> 服务器配置 -> 令牌（Token），记录Token为: weixin_token
2. 在服务器启动脚本
`node verify-server-address.js {weixin_token} {port?}`
port: 可选，默认 8081

## 网页授权回调认证
[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)

### 操作步骤
1. 在公众号后台获取验证信息
获取方法：后台 -> 接口权限 -> 网页服务 -> 网页授权 -> 网页授权域名 -> 设置，下载验证文件，复制其内容记为: verify_content
2. 在服务器启动脚本
`node webpage-authorization-callback.js {verify_content} {port?}`
port: 可选，默认 8081

