<template lang="html">
  <div style="height:100%;">

    <!-- 搜索栏 -->
    <search @on-submit="onSubmit" :auto-fixed="autoFixed"></search>
    <!-- 轮播模块 -->
    <swiper :list="adv_list" loop auto
    style="margin:0 auto; height: 150px;"
    dots-class="custom-bottom"
    dots-position="center"></swiper>
    <!-- 功能分类栏 -->
    <div class="func-list">
      <div class="func-list-item" v-for="item in func_list">
        <a :href="item.url"><img class="func-icon" :src="item.icon_url" alt="" /></a>
        <span class="func-name">
          {{item.name}}
        </span>
      </div>
    </div>
    <!-- 垂直滚动广告栏 -->
    <div class="column-scroll">
      <div class="column-title"><a href="#headlines"><p>购物头条</p></a></div>
      <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
        <swiper-item  v-for="item in text_list">
          <p><span class="column-tag">{{item.tag}}</span>{{item.text}}</p>
        </swiper-item>
      </swiper>
    </div>
    <!-- 商品推荐栏 -->
    <div class="recommend-list">
      <div class="recommend-left">
        <span class="recommend-title">
          <strong style="color: #55a40f">抢购中</strong>
          <small>限时限量汇集全网好货</small>
        </span>
        <span class="recommend-img" style="width: 90px; margin-top: 15px;">
          <img src="../assets/img/first/phone.jpg" alt="" />
        </span>
      </div>
      <div class="recommend-right">
        <div class="right-top">
          <span class="recommend-title">
            <strong style="color: #ff3f0d">有好货</strong>
            <small style="margin-top: 5px;">好品味从挑剔开始</small>
          </span>
          <span class="recommend-img-right">
            <img src="../assets/img/first/timg.jpg" alt="" />
          </span>
        </div>
        <div class="right-bottom">
          <div class="bottom-left">
            <span class="recommend-title">
              <strong style="color: #f742a0">爱逛街</strong>
              <small>正流行的好品味</small>
            </span>
            <span class="recommend-img" style="width: 30px;">
              <img src="../assets/img/first/egg.jpg" alt="" />
            </span>
          </div>
          <div class="bottom-right">
            <span class="recommend-title">
              <strong style="color: #ff8601">必买清单</strong>
              <small>都帮你准备好啦</small>
            </span>
            <span class="recommend-img" style="width: 30px; ">
              <img src="../assets/img/first/noodles.png" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 猜你喜欢栏 -->
    <div class="guess-list">
      <divider>猜你喜欢</divider>
      <div class="guess-list-item">
        <div class="guess-left">
          <img src="https://img3.doubanio.com/view/movie_poster_cover/spst/public/p480747492.jpg" alt="" />
        </div>
        <div class="guess-right">
          <div class="right-title">
            <strong>肖申克的救赎</strong>
            <small class="right-title-c">导演: 弗兰克·德拉邦特</small>
            <small class="right-title-c">类型: 剧情 / 犯罪</small>
          </div>
          <div class="right-num">
            <span class="right-num-price">29.9元</span>
            <!-- <span>门市价/时间</span> -->
            <span class="right-num-other">上映日期:1994-09-10</span>
          </div>
        </div>
      </div>
      <div class="guess-list-item">
        <div class="guess-left">
          <img src="https://img3.doubanio.com/view/movie_poster_cover/spst/public/p480747492.jpg" alt="" />
        </div>
        <div class="guess-right">
          <div class="right-title">
            <strong>肖申克的救赎</strong>
            <small class="right-title-c">导演: 弗兰克·德拉邦特</small>
            <small class="right-title-c">类型: 剧情 / 犯罪</small>
          </div>
          <div class="right-num">
            <span class="right-num-price">29.9元</span>
            <!-- <span>门市价/时间</span> -->
            <span class="right-num-other">上映日期:1994-09-10</span>
          </div>
        </div>
      </div>
      <div class="guess-list-item">
        <div class="guess-left">
          <img src="https://img3.doubanio.com/view/movie_poster_cover/spst/public/p480747492.jpg" alt="" />
        </div>
        <div class="guess-right">
          <div class="right-title">
            <strong>肖申克的救赎</strong>
            <small class="right-title-c">导演: 弗兰克·德拉邦特</small>
            <small class="right-title-c">类型: 剧情 / 犯罪</small>
          </div>
          <div class="right-num">
            <span class="right-num-price">29.9元</span>
            <!-- <span>门市价/时间</span> -->
            <span class="right-num-other">上映日期:1994-09-10</span>
          </div>
        </div>
      </div>
      <div class="guess-list-item">
        <div class="guess-left">
          <img src="https://img3.doubanio.com/view/movie_poster_cover/spst/public/p480747492.jpg" alt="" />
        </div>
        <div class="guess-right">
          <div class="right-title">
            <strong>肖申克的救赎</strong>
            <small class="right-title-c">导演: 弗兰克·德拉邦特</small>
            <small class="right-title-c">类型: 剧情 / 犯罪</small>
          </div>
          <div class="right-num">
            <span class="right-num-price">29.9元</span>
            <!-- <span>门市价/时间</span> -->
            <span class="right-num-other">上映日期:1994-09-10</span>
          </div>
        </div>
      </div>
      <div class="guess-list-item">
        <div class="guess-left">
          <img src="https://img3.doubanio.com/view/movie_poster_cover/spst/public/p480747492.jpg" alt="" />
        </div>
        <div class="guess-right">
          <div class="right-title">
            <strong>肖申克的救赎</strong>
            <small class="right-title-c">导演: 弗兰克·德拉邦特</small>
            <small class="right-title-c">类型: 剧情 / 犯罪</small>
          </div>
          <div class="right-num">
            <span class="right-num-price">29.9元</span>
            <!-- <span>门市价/时间</span> -->
            <span class="right-num-other">上映日期:1994-09-10</span>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
import {
  Search,
  ViewBox,
  Tab,
  TabItem,
  Swiper,
  SwiperItem,
  Divider
} from 'vux'

// 顶端轮播组件图
const baseList = [{
  url: 'javascript:',
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487241042307&di=eae360e8d9d448146b0bf1d3c4dd916f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f96d55f987a032f875a1325bf12c.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487240882093&di=3361b3d73e5cc15af4335e117abe7594&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01dd9555bf36a16ac7253f36c775e0.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487240882094&di=80a1f45f76da4ba76900f363c9276022&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c93f5791f7c70000018c1bb77640.jpg',
  title: '送你一次旅行'
}]

const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img
    // title: `(可点击)${item.title}`
}))


const funcList = [{
  name: '美食',
  url: 'javascript:',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconfood.png'
}, {
  name: '电影',
  url: 'javascript:',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconmovie.png'
}, {
  name: '酒店住宿',
  url: 'javascript:',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconhotel.png'
}, {
  name: '休闲娱乐',
  url: 'javascript:',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconxiuxian.png'
}, {
  name: '外卖',
  url: 'javascript:',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconfive.png'
}, {
  name: '火车/飞机票',
  url: 'javascript:',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/icontransport.png'
}, {
  name: 'KTV',
  url: 'javascript:',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconfour.png'
}, {
  name: '旅游出行',
  url: 'javascript:',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/icontrip.png'
}, {
  name: '丽人/美发',
  url: 'javascript:',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconhair.png'
}, {
  name: '全部分类',
  url: 'javascript:',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconmore.png'
}]

const advList = [
  {
    text: '曾经80w元！这双球鞋将面世',
    tag: '热评'
  },{
    text: '这部苹果8碉堡了 Home键能这么玩',
    tag: '热议'
  },{
    text: '内存暴增，IOS10.3挽救老果粉',
    tag: '热议'
  },{
    text: '苹果将提前大规模量产iPhone8',
    tag: '热议'
  },{
    text: '顺丰新专用手机曝光，原来他们都用这个！',
    tag: '热评'
  },{
    text: '这款现代"阿斯顿马丁",27万即可拥有',
    tag: '热议'
  }
]

export default {
  data() {
    return {
      show: false,
      articles: [],
      autoFixed: false,
      adv_list: urlList,
      func_list: funcList,
      text_list: advList,
      n2: 10,
      pullupConfig2: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      }
    }
  },
  methods: {
    onSubmit(val) {
      window.alert('on submit' + val)
    },
    load2 () {
      setTimeout(() => {
        this.n2 += 10
        setTimeout(() => {
          this.$refs.demo2.donePullup()
        }, 100)
        if (this.n2 === 30) { // unload plugin
          setTimeout(() => {
            this.$refs.demo2.disablePullup()
          }, 100)
        }
      }, 2000)
    }
  },
  mounted: function() {
    // this.$store.dispatch('LOAD_PROJECT_LIST')
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
      headers: {

      },
      emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调

      this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以

    }, function(response) {
      // 这里是处理错误的回调
      console.log(response)
    });
  },
  components: {
    Search,
    ViewBox,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Divider
  }
}
</script>

<style lang="css">

.func-list {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 180px;
  background: #fff;
}
.func-list-item {
  width: 20%;
  height: 52px;
  /*align-self: center;*/
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 25px;
  font-size: 0.688em;
}
.func-list-item img {
  width: 48px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
}
.column-scroll{
  background-color: #fff;
  height: 30px;
}
.column-title {
  float: left;
  width: 22%;
  padding: 3px 0 10px 10px;
  border-right: 1px #f0f0f0 solid;
}
.column-title p{
  font-size: 1em;
  color: red;
  font-weight: 800;
  font-style: italic;
  line-height: 16px;

}
.text-scroll {
  background-color: #fff;
  width: 78%;
  float: right;
}
.text-scroll p{
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 0.875em;
  text-align: center;
  line-height: 20px;
  margin-left: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.column-tag {
  color: red;
  border: 1px red solid;
  border-radius: 2px;
  font-size: .625em;
  display: inline;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 0 3px;
}

.recommend-list {
  margin-top: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 170px;
  padding: 5px;
}
.recommend-left {
  padding-left: 10px;
  /*flex-grow: 3;*/
  width: 40%;
  border-right: 1px #f0f0f0 solid;
}
.recommend-right {
  display: flex;
  flex-direction: column;
  justify-content:space-around;;
  width: 60%;
}
.right-top {
  padding-left: 20px;
  padding-top: 10px;
  border-bottom: 1px #f0f0f0 solid;
  display: flex;
  justify-content: space-around;
  /*align-items: flex-start;*/
}
.right-bottom {
  display: flex;
  flex-direction: row;
}
.bottom-left {
  width: 50%;
  border-right: 1px #f0f0f0 solid;
  padding-left: 20px;
  padding-top: 5px;
}
.bottom-right {
  width: 50%;
  padding-top: 5px;
  padding-left: 20px;
}
.recommend-title {
  display: inline-block;
}
.recommend-title strong{
  display: block;
  font-size: 1em;
  font-weight: 500;
}
.recommend-title small {
  color: #666;
  font-size: .68em;
}
.recommend-img {
  display: block;
  margin-left: 20px;
}
.recommend-img-right {
  display: inline-block;
  width: 50px;
  /*margin-left: 20px;*/
}

.guess-list {
  margin-top: 5px;
  background-color: #fff;
  /*height: 500px;*/
  padding-bottom: 50px;
}
.guess-list-item {
  border-top: 1px #f0f0f0 solid;
  border-bottom: 1px #f0f0f0 solid;
  padding: 5px;
  display: flex;
  flex-direction: row;
  /*justify-content: space-around;*/
}
.guess-left {
  flex-grow: 1;
  /*width: 20%;*/
  height: 120px;
  display: flex;
  justify-content: center;
}
.guess-left img {
  height: 120px;
  /*margin-left: 5px;*/
}
.guess-right {
  flex-grow: 15;
  padding-left: 2px;
  /*width: 80%;*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.right-title strong, .right-title small {
  display: block;
}
.right-title-c {
  color: #666;
}
.right-num {
  display: flex;
  justify-content: space-between;
}
.right-num-price {
  color: #06c1ae;
  font-weight: 600;
  font-size:1.188em;
}
.right-num-other {
  font-size: .75em;
  line-height: 2.5em;
  color: #666;
}
</style>
