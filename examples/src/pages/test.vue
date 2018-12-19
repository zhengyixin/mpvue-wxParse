<template lang="pug">
.container
  .raw(v-if="raw") {{article}}
  wxParse(v-else, :content="article", ref="wxParse", @navigate="navigate", @preview="preview")
  .turn-btn(@click="raw = !raw") 切换
</template>

<script>
import wxParse from 'mpvue-wxparse'

export default {
  components: {
    wxParse
  },
  data () {
    return {
      raw: false,
      article: `
<!DOCTYPE html>
<html>
  <head>
    <title>Test</title>
    <link rel="stylesheet" href="" />
    <style>
      body {
        color: red;
      }
    </style>
  </head>
  <body>
    <style>
      body {
        color: green;
      }
    </style>
    <h1 class="test1">H1</h1>
    <h2 class="test1 test2">H2</h2>
    <h3 style="color: red">H3</h3>
    <h4 style="color: blue;border: 1px solid #000">H4</h4>
    <h5>H5</h5>
    <h6>H6</h6>
    <p>
      mpvue-wxParse 适用于 Mpvue 的微信小程序<del>图表</del>富文本解析组件
    </p>
    <strong><a href="https://qq.com">链接</a></strong>
    <br />
    <a>空链接</a>
    <ul>
      <li>咖啡</li>
      <li>茶
        <ol>
        <li>红茶</li>
        <li>绿茶
          <ul>
          <li>中国茶</li>
          <li>非洲茶</li>
          </ul>
        </li>
        </ol>
      </li>
      <li>牛奶</li>
    </ul>
    <table border="1">
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
    </table>
    <pre>for i = 1 to 10
  print i
next i
    </pre>
    <pre>
      <code>console.log('hello mpvue!')</code>
    </pre>
    <img style="border-radius: 10px" src="https://img5.imgtn.bdimg.com/it/u=3620627241,993246732&fm=27&gp=0.jpg" />
    <video src="https://common-1251785959.cosbj.myqcloud.com/%E6%9D%8E%E8%8D%A3%E6%B5%A9%20-%20%E6%AD%8C%E8%B0%A3.mp4">
    <script>console.log('test')<\/script>
  </body>
</html>
      `
    }
  },
  mounted () {
    console.log(this.$refs.wxParse.nodes)
  },
  methods: {
    navigate (href) {
      console.log(href)
    },
    preview (src) {
      console.log(src)
    }
  }
}
</script>

<style>
@import url("~mpvue-wxparse/src/wxParse.css");
</style>
