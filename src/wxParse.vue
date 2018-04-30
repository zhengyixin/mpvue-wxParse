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
  <block v-for="node of nodes" :key="node.index">
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
  data() {
    return {
      imageUrls: [],
    };
  },
  computed: {
    nodes() {
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
      const { nodes, imageUrls } = HtmlToJson(parseData, customHandler, imageProp);
      this.imageUrls = imageUrls.map(url => url);
      return nodes;
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
      if (!this.imageUrls.length) return;
      wx.previewImage({
        current: src,
        urls: this.imageUrls,
      });
      this.$emit('preview', src);
    },
    removeImageUrl(src) {
      const { imageUrls } = this;
      imageUrls.splice(imageUrls.indexOf(src), 1);
    },
  },
};
</script>
