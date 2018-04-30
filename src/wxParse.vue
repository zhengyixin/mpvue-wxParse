<!--**
 * author: F-loat <chaimaoyuan@foxmail.com>
 *
 * github地址: https://github.com/F-loat/mpvue-wxParse
 *
 * for: Mpvue框架下 微信小程序富文本解析
 */-->

<template>
<!--基础元素-->
<div class="wxParse" :class="className">
  <block v-for="node of wxParseData.nodes" :key="node.index">
    <wxParseTemplate :node="node" />
  </block>
</div>
</template>

<script>
import HtmlToJson from './libs/html2json';
import bus from './utils/bus';
import wxParseTemplate from './components/wxParseTemplate0';

export default {
  name: 'wxParse',
  props: {
    className: {
      type: String,
      default: '',
    },
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
    imageProp: {
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
        imageProp,
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
      const transData = HtmlToJson(parseData, customHandler, imageProp);
      return transData;
    },
  },
  mounted() {
    this.initEvents();
  },
  methods: {
    initEvents() {
      bus.$on('navigate', this.navigate);
      bus.$on('preview', this.preview);
      bus.$on('nopreview', this.removeImageUrl);
    },
    navigate(href) {
      this.$emit('navigate', href);
    },
    preview(src) {
      const { imageUrls } = this.wxParseData;
      if (!imageUrls.length) return;
      wx.previewImage({
        current: src,
        urls: imageUrls,
      });
      this.$emit('preview', src);
    },
    removeImageUrl(src) {
      const { imageUrls } = this.wxParseData;
      imageUrls.splice(imageUrls.indexOf(src), 1);
    },
  },
};

</script>
