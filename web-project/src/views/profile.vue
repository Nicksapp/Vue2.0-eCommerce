<template>
  <div style="height:100%;">
    <div class="profile-header">
      <div class="profile-avatar">
        <img src="http://tb.himg.baidu.com/sys/portraitn/item/13bb6368616e676a6965363030316521" alt="" />
      </div>
      <div class="profile-info">
        <div class="info-username">
          <a href="#">username</a>
          <img src="../assets/img/profile/VIP.png" alt="" />
        </div>
        <div class="info-other">
          <a href="#">个人信息 ></a>
        </div>
      </div>
    </div>

    <div class="main-section">
      <div  class="my-section">
        <cell :title="cellTitle.myAccount" :link="{path:'/first'}"  is-link>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/profile/wallett.png">
        </cell>
        <cell :title="cellTitle.yue" :value="money" is-link>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/profile/Money1.png">
        </cell>
        <cell :title="cellTitle.diyongquan" :value="numOfDiyongquan" is-link>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/profile/Moneyt.png">
        </cell>
        <cell :title="cellTitle.vip" is-link>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/profile/diamond.png">
        </cell>
      </div>
      <div  class="my-section">
        <cell :title="cellTitle.friend" :value="friendInfo" is-link>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/profile/user_2.png">
        </cell>
        <cell :title="cellTitle.pingjia" is-link>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/profile/paper.png">
        </cell>
        <cell :title="cellTitle.shoucang" is-link>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/profile/start.png">
        </cell>
        <cell :title="cellTitle.huiyuan" :value="huiyuanInfo" is-link>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/profile/vipt.png">
        </cell>
        <cell :title="cellTitle.jifen" :value="jifenInfo" is-link>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/profile/giftt.png">
        </cell>
      </div>
      <div  class="my-section">
        <cell :title="cellTitle.kefu" is-link>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/profile/sharet.png">
        </cell>
        <cell :title="cellTitle.about" :value="aboutInfo" is-link>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/img/profile/like_.png">
        </cell>
      </div>
    </div>
  </div>
</template>

<script>
import {Group, Cell} from 'vux'
const cellTitle = {
  myAccount: '我的钱包',
  yue: '余额',
  diyongquan: '抵用券',
  vip: '会员卡',
  friend: '好友去哪',
  pingjia: '我的评价',
  shoucang: '我的收藏',
  huiyuan: '会员中心',
  jifen: '积分商城',
  kefu: '客服中心',
  about: '关于作者'
}
export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      cellTitle: cellTitle,
      money: '￥0',
      numOfDiyongquan: '0',
      friendInfo: '和好友分享吃喝玩乐好去处',
      huiyuanInfo: 'V0',
      jifenInfo: '好礼已上线',
      aboutInfo: '我要支持'
    }
  }
}
</script>

<style scoped>
.profile-header {
  height: 100px;
  background-color: #06c1ae;
  display: flex;
  align-items: flex-end;;
  padding-left: 8px;
  padding-bottom: 10px
}
.profile-avatar img{
  width: 56px;
  height: 56px;
  border-radius: 50%;
}
.profile-info {
  margin-left: 15px;
  margin-bottom: 10px;
}
.profile-info a {
  color: #fff;
}
.info-username {
  font-size: 1.2em;
  font-weight: 400;
}
.info-username img {
  width: 20px;
  vertical-align: middle;
}
.info-other {
  font-size: .75em;
  font-weight: lighter;
}

.my-section {
  margin-top: 10px;
  background-color: #fff;
}

</style>
