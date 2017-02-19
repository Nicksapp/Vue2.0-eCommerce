<template lang="html">
  <div class="func-list">
    <div class="func-item">
      <img class="func-icon" :src="item.icon_url" alt="" />
      <span class="func-name">
        {{item.name}}
      </span>
    </div>
  </div>
</template>

<script>

const funcList = [{
  name: '美食',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconfood.png'
}, {
  name: '电影',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconmovie.png'
}, {
  name: '酒店住宿',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconhotel.png'
}, {
  name: '休闲娱乐',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconxiuxian.png'
}, {
  name: '外卖',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconfive.png'
}, {
  name: '火车/飞机票',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/icontransport.png'
}, {
  name: 'KTV',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconfour.png'
}, {
  name: '旅游出行',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/icontrip.png'
}, {
  name: '丽人/美发',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconhair.png'
}, {
  name: '全部分类',
  icon_url: 'http://of30nsqpd.bkt.clouddn.com/iconmore.png'
}]
export default {
  data () {
    return {
      func_list: funcList
    }
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
  margin-top: 18px;
  font-size: 14px;
}
.func-list-item img {
  width: 36px;
  height: 36px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
