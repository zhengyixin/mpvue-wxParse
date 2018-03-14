# mpvue-wxParse 适用于 Mpvue 的微信小程序富文本解析组件</h1>

> 支持 Html 及 markdown 转 wxml 可视化，修改自: [wxParse](https://github.com/icindy/wxParse)

[![npm package](https://img.shields.io/npm/v/mpvue-wxparse.svg)](https://npmjs.org/package/mpvue-wxparse)
[![npm downloads](http://img.shields.io/npm/dm/mpvue-wxparse.svg)](https://npmjs.org/package/mpvue-wxparse)


## 特性

| 支持特性                  | 实验功能        | ToDo          |
| ------------------------ |---------------- | ------------- |
| - [x] HTML的大部分标签解析 | [x] 小表情emjio | [x] table标签 |
| - [x] 内联style           | [x] a标签跳转   |               |
| - [x] 标签Class           | [x] 动态添加    |               |
| - [x] 图片自适应规则       |                |               |
| - [x] 图片多图片预览       |                |               |
| - [x] 模版层级可扩展性     |                |               |
| - [x] 多数据循环方式       |                |               |
| - [x] 内联style           |                |               |


## 基本使用方法

* 1. 安装
``` bash
npm i mpvue-wxparse
```

* 2. 使用

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

## 常见问题

* 打包时出错 `ERROR in static/js/vendor.js from UglifyJs`

参照以下配置使 babel 处理 mpvue-wxparse，或直接关闭 UglifyJs 插件
``` js
// webpack.base.conf.js
{
  test: /\.js$/,
  include: [
    resolve('src'),
    resolve('node_modules/mpvue-wxparse')
  ],
  use: [
    'babel-loader',
    {
      loader: 'mpvue-loader',
      options: {
        checkMPEntry: true
      }
    }
  ]
}
```


## 相关截图

![相关截图](screenshoot/screen.jpg)


## 感谢

[@stonewen](https://github.com/stonewen)| [@Daissmentii](https://github.com/Daissmentii)        | [@wuyanwen](https://github.com/wuyanwen)           | [@vcxiaohan](https://github.com/vcxiaohan)
