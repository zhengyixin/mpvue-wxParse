<template>
  <view class="wxParseText inline" :style="node.styleStr">
    <block v-for="node of node.textArray" :key="node.index">
      <block v-if="node.node == 'text'">{{node.text}}</block>
    </block>
  </view>
</template>

<script>
export default {
  name: 'wxParseText',
  props: {
    node: {}
  }
}
</script>
