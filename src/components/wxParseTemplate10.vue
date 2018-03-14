<template>
  <!--判断是否是标签节点-->
  <block v-if="node.node == 'element'">
    <block v-if="node.tag == 'button'">
      <button type="default" size="mini">
        <block v-for="node of node.nodes" :key="node.index">
          <wx-parse-template :node="node" />
        </block>
      </button>
    </block>

    <!--li类型-->
    <block v-else-if="node.tag == 'li'">
      <view :class="node.classStr" class="wxParse-li" :style="node.styleStr">
        <view :class="node.classStr" class="wxParse-li-inner">
          <view :class="node.classStr" class="wxParse-li-text">
            <view :class="node.classStr" class="wxParse-li-circle"></view>
          </view>
          <view :class="node.classStr" class="wxParse-li-text">
            <block v-for="node of node.nodes" :key="node.index">
              <wx-parse-template :node="node" />
            </block>
          </view>
        </view>
      </view>
    </block>

    <!--video类型-->
    <block v-else-if="node.tag == 'video'">
      <wx-parse-video :node="node" />
    </block>

    <!--img类型-->
    <block v-else-if="node.tag == 'img'">
      <wx-parse-img :node="node" />
    </block>

    <!--a类型-->
    <block v-else-if="node.tag == 'a'">
      <view bindtap="wxParseTagATap" :class="node.classStr" class="wxParse-inline wxParse-a" data-src="node.attr.href" :style="node.styleStr">
        <block v-for="node of node.nodes" :key="node.index">
          <wx-parse-template :node="node" />
        </block>
      </view>
    </block>

    <block v-else-if="node.tag == 'br'">
      <wx-parse-br />
    </block>
    <!--其他块级标签-->
    <block v-else-if="node.tagType == 'block'">
      <view :class="node.classStr" class="wxParse-block" :style="node.styleStr">
        <block v-for="node of node.nodes" :key="node.index">
          <wx-parse-template :node="node" />
        </block>
      </view>
    </block>

    <!--内联标签-->
    <view v-else :class="node.classStr" class="wxParse-span wxParse-inline" :style="node.styleStr">
      <block v-for="node of node.nodes" :key="node.index">
        <wx-parse-template :node="node" />
      </block>
    </view>

  </block>

  <!--判断是否是文本节点-->
  <block v-else-if="node.node == 'text'">
    <!--如果是，直接进行-->
    <wx-parse-text :node="node" />
  </block>
</template>

<script>
import wxParseTemplate from './wxParseTemplate11'
import wxParseText from './wxParseText'
import wxParseBr from './wxParseBr'
import wxParseImg from './wxParseImg'
import wxParseVideo from './wxParseVideo'

export default {
  name: 'wxParseTemplate10',
  props: {
    node: {}
  },
  components: {
    wxParseTemplate,
    wxParseText,
    wxParseBr,
    wxParseImg,
    wxParseVideo
  }
}
</script>
