<template>
  <image
    class="img"
    :mode="image.mode"
    :class="node.classStr"
    :style="node.styleStr"
    :data-src="node.attr.src"
    :src="node.attr.src"
    @tap="wxParseImgTap"
    />
</template>

<script>
export default {
  name: 'wxParseImg',
  props: {
    node: {}
  },
  computed: {
    image() {
      const $wxParse = this.$root.$children.find(child => child.imageMode)
      return {
        mode: $wxParse.imageMode,
        urls: $wxParse.imageUrls
      }
    }
  },
  methods: {
    wxParseImgTap(e) {
      wx.previewImage({
        current: e.target.dataset.src, // 当前显示图片的http链接
        urls: this.image.urls // 需要预览的图片http链接列表
      })
    }
  }
}
</script>
