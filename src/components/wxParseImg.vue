<template>
  <image :class="node.classStr" class="wxParse-img" data-from="node.from" data-src="node.attr.src" data-idx="node.imgIndex" :src="node.attr.src" mode="aspectFit" bindload="wxParseImgLoad" bindtap="wxParseImgTap" :style="node.styleStr"
    />
</template>

<script>
export default {
  name: 'wxParseImg',
  props: {
    node: {}
  }
}
</script>
