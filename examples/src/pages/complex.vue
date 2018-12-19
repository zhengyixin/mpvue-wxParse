<template lang="pug">
.container
  .raw(v-if="raw") {{article}}
  wxParse(v-else, :content="article", ref="wxParse")
  .turn-btn(@click="raw = !raw") 切换
</template>

<script>
import wxParse from 'mpvue-wxparse'

export default {
  components: {
    wxParse
  },
  data () {
    return {
      raw: false,
      article: ''
    }
  },
  mounted () {
    this.getData()
  },
  onPullDownRefresh () {
    this.getData()
  },
  methods: {
    async getData () {
      wx.showLoading({ title: '加载中' })
      const article = await this.$request.get('https://m.dealmoon.com/cn/15-Off-Sitewide-Sephora-8-5/858287.html')
      this.article = article.data
      wx.stopPullDownRefresh()
      wx.hideLoading()
    }
  }
}
</script>

<style>
@import url("~mpvue-wxparse/src/wxParse.css");
</style>
