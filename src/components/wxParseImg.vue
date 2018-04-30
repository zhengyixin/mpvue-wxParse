<template>
  <image
    :mode="node.attr.mode"
    :lazy-load="node.attr.lazyLoad"
    :class="node.classStr"
    :style="newStyleStr || node.styleStr"
    :data-src="node.attr.src"
    :src="node.attr.src"
    @tap="wxParseImgTap"
    @load="wxParseImgLoad"
    />
</template>

<script>
import bus from '../utils/bus';

export default {
  name: 'wxParseImg',
  data() {
    return {
      newStyleStr: '',
      preview: true,
    };
  },
  props: {
    node: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    wxParseImgTap(e) {
      if (!this.preview) return;
      const { src } = e.target.dataset;
      if (!src) return;
      bus.$emit('preview', src);
    },
    // 图片视觉宽高计算函数区
    wxParseImgLoad(e) {
      const { src } = e.target.dataset;
      if (!src) return;
      const { width, height } = e.mp.detail;
      const recal = this.wxAutoImageCal(width, height);
      const { imageheight, imageWidth } = recal;
      const { padding } = this.node.attr;
      const { styleStr } = this.node;
      this.newStyleStr = `${styleStr};height: ${imageheight}px; width: ${imageWidth}px; padding: 0 ${padding}px;`;
    },
    // 计算视觉优先的图片宽高
    wxAutoImageCal(originalWidth, originalHeight) {
      // 获取图片的原始长宽
      const { padding } = this.node.attr;
      const windowWidth = this.node.screen.width - (2 * padding);
      const results = {};

      if (originalWidth < 100 || originalHeight < 100) {
        const { src } = this.node.attr;
        bus.$emit('nopreview', src);
        this.preview = false;
      }

      // 判断按照那种方式进行缩放
      if (originalWidth > windowWidth) {
        // 在图片width大于手机屏幕width时候
        results.imageWidth = windowWidth;
        results.imageheight = windowWidth * (originalHeight / originalWidth);
      } else {
        // 否则展示原来的数据
        results.imageWidth = originalWidth;
        results.imageheight = originalHeight;
      }

      return results;
    },
  },
};
</script>
