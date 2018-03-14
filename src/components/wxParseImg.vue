<template>
  <image
    class="wxParse-img"
    mode="aspectFit"
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
      wx.previewImage({
        current: e.target.dataset.src, // 当前显示图片的http链接
        urls: this.$root.$children[0].wxParseData.imageUrls // 需要预览的图片http链接列表
      })
    }
  }
}
</script>
