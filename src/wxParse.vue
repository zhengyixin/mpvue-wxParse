<!--**
 * author: F-loat <chaimaoyuan@foxmail.com>
 *
 * github地址: https://github.com/F-loat/mpvue-wxParse
 *
 * for: Mpvue框架下 微信小程序富文本解析
 */-->

<template>
<!--基础元素-->
<div>
  <block v-for="node of wxParseData.nodes" :key="node.index">
    <wxParseTemplate :node="node" />
  </block>
</div>
</template>

<script>
import { wxParse } from './wxParse'
import wxParseTemplate from './components/wxParseTemplate0'

export default {
  props: {
    type: 'html',
    content: '',
    imagePadding: 0
  },
  components: {
    wxParseTemplate
  },
  computed: {
    wxParseData() {
      return wxParse('content', this.type, this.content, this, this.imagePadding)
    }
  }
}

</script>

<style>
@import url("./wxParse.css");
</style>
