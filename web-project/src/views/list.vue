<template lang="html">
  <div style="height:100%;">
    <div style="height:100%;">
      <tab :line-width=2  v-model="index">
        <tab-item class="vux-center" :selected="activedTab === item" v-for="item in tabList" @click="activedTab = item">{{item}}</tab-item>
      </tab>
      <scroller  lock-x scrollbar-y use-pullup use-pulldown :pulldown-config="{content:'下拉刷新',downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中'}" @on-pullup-loading="loadMore"  @on-pulldown-loading="refresh" v-model="status" ref="scroller">
        <div class="scroll-box">
          <p v-for="i in n">placeholder {{i}}</p>
        </div>
        <!--pullup slot-->
        <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
          <span v-show="status.pullupStatus === 'default'"></span>
          <span class="pullup-arrow" v-show="status.pullupStatus === 'down' || status.pullupStatus === 'up'" :class="{'rotate': status.pullupStatus === 'up'}">↑</span>
          <span v-show="status.pullupStatus === 'loading'"><spinner type="ios-small"></spinner></span>
        </div>
      </scroller>
    </div>
  </div>
</template>



<script>
import {
  Tab,
  TabItem,
  Swiper,
  SwiperItem,
  Scroller,
  Spinner
} from 'vux'
const list = () => ['全部', '待付款', '待使用', '待评价', '退款/售后']
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Scroller,
    Spinner
  },
  data () {
    return {
      tabList: list(),
      activedTab: '全部',
      index: 0,
      status: {
        pullupStatus: 'default',
        pulldownStatus: 'default'
      },
      n: 20,
      list2: list()
    }
  },
  methods: {
    loadMore () {
      setTimeout(() => {
        this.n += 10
        setTimeout(() => {
          this.$refs.scroller.donePullup()
        }, 10)
      }, 2000)
    },
    refresh () {
      setTimeout(() => {
        this.n = 10
        this.$nextTick(() => {
          setTimeout(() => {
            this.$refs.scroller.donePulldown()
            this.pullupEnabled && this.$refs.scroller.enablePullup()
          }, 10)
        })
      }, 2000)
    },
  }
}
</script>

<style lang="css">
.scroll-box {
  background-color: #fff;
}

</style>
