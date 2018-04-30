<!--**
 * author: F-loat <chaimaoyuan@foxmail.com>
 *
 * github地址: https://github.com/F-loat/mpvue-wxParse
 *
 * for: Mpvue框架下 微信小程序富文本解析
 */-->

<template>
<!--基础元素-->
<div class="wxParse">
  <block v-for="node of wxParseData.nodes" :key="node.index">
    <wxParseTemplate :node="node" />
  </block>
</div>
</template>

<script>
import HtmlToJson from './libs/html2json';
import wxParseTemplate from './components/wxParseTemplate0';

export default {
  name: 'wxParse',
  props: {
    content: {
      type: String,
      default: '',
    },
    noData: {
      type: String,
      default: '<div style="color: red;">数据不能为空</div>',
    },
    startHandler: {
      type: Function,
      default: null,
    },
    endHandler: {
      type: Function,
      default: null,
    },
    charsHandler: {
      type: Function,
      default: null,
    },
    image: {
      type: Object,
      default() {
        return {
          mode: 'aspectFit',
          padding: 0,
          lazyLoad: false,
        };
      },
    },
  },
  components: {
    wxParseTemplate,
  },
  computed: {
    wxParseData() {
      const {
        content,
        noData,
        image,
        startHandler,
        endHandler,
        charsHandler,
      } = this;
      const parseData = content || noData;
      const customHandler = {
        start: startHandler,
        end: endHandler,
        chars: charsHandler,
      };
      const transData = HtmlToJson(parseData, customHandler, image);
      return transData;
    },
  },
};

</script>

<style>
@import url("./wxParse.css");
</style>
