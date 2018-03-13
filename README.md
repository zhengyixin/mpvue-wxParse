
<p align="center"><a href="https://github.com/F-loat/mpvue-wxParse" target="_blank"><img src="screenshoot/wxParse_logo.jpg"></a></p>
<p align="center"><a href="https://github.com/F-loat/mpvue-wxParse" target="_blank"><img src="screenshoot/weappmsg_qr.jpg"></a></p>
<h1 align="center" style="margin-bottom: 20px;">mpvue-wxParse-适用于 Mpvue 的微信小程序富文本解析组件</h1>
<h2 align="center">支持 Html 及 markdown 转 wxml 可视化</h2>
<p align="center"><code>版本号:0.3</code></p>
<p align="center">修改自: [微信小程序开发论坛-weappdev](https://weappdev.com)</p>
<p align="center">作用: 将Html/Markdown转换为微信小程序的可视化方案</p>


## 特性


| 支持特性        | 实验功能           | ToDo  |
| ------------- |-------------| -----|
| - [x] HTML的大部分标签解析 | [x] 小表情emjio | [x] table标签 |
| - [x] 内联style          | [x] a标签跳转   |               |
| - [x] 标签Class          | [x] 动态添加    |               |
| - [x] 图片自适应规则       |               |                |
| - [x] 图片多图片预览      |                |               |
| - [x] 模版层级可扩展性    |                |               |
| - [x] 多数据循环方式      |                |  |
| - [x] 内联style         |                |   |
|         |                |   |

## 相关截图

![相关截图](screenshoot/screen.jpg)

## 感谢

[@stonewen](https://github.com/stonewen)| [@Daissmentii](https://github.com/Daissmentii)        | [@wuyanwen](https://github.com/wuyanwen)           | [@vcxiaohan](https://github.com/vcxiaohan)  |

## 基本使用方法

* 1. 安装
``` bash
npm i mpvue-wxparse
```

* 2. 引入

``` js
// 在使用的页面或组件中引入 mpvue-wxParse 组件
import wxParse from 'mpvue-wxparse';
```

* 3. 数据绑定
``` vue
<template>
  <div>
    <wxParse :content="article" />
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'

export default {
  components: {
    wxParse
  },
  data () {
    return {
      article: '<div>我是HTML代码</div>'
    }
  }
}
</script>
```
