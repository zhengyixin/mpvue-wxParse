<template lang="pug">
.container
  .raw(v-if="show === 'md'") {{readme.raw}}
  .raw(v-if="show === 'html'") {{readme.html}}
  wxParse(v-else-if="readme.html", :content="readme.html", ref="wxParse")
  .turn-btn(@click="turn") 切换
</template>

<script>
import marked from 'marked'
import wxParse from 'mpvue-wxparse'

export default {
  components: {
    wxParse
  },
  data () {
    return {
      types: ['rich', 'md', 'html'],
      show: 'rich',
      readme: {
        raw: '',
        html: ''
      }
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
      const res = await this.$request.get('https://gitlab.com/F-loat/mpvue-wxParse/raw/master/README.md')
      this.readme.raw = res.data
      this.readme.html = marked(res.data)
      wx.stopPullDownRefresh()
      wx.hideLoading()
      console.log(this.$refs.wxParse.nodes)
    },
    turn () {
      const current = this.show
      const currentIndex = this.types.indexOf(current)
      if (currentIndex < this.types.length) {
        this.show = this.types[currentIndex + 1]
      } else {
        this.show = this.types[0]
      }
    }
  }
}
</script>

<style>
@import url("~mpvue-wxparse/src/wxParse.css");
</style>
