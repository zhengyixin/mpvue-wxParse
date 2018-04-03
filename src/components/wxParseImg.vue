<template>
  <image
    class="img"
    :mode="node.imageMode"
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
  methods: {
    wxParseImgTap(e) {
      const { src } = e.target.dataset
      if (!src) return
      wx.previewImage({
        current: src, // 当前显示图片的http链接
        urls: this.node.imageUrls // 需要预览的图片http链接列表
      })
    }
  }
}
</script>
