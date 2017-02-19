<template>
<div style="height:100%;">

  <loading v-model="isLoading"></loading>

  <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
      <router-view class="router-view"></router-view>
  </transition>

  <tabbar style="position: fixed;">
    <tabbar-item selected :link="{path:'/first'}">
      <img slot="icon" src="./assets/Home04.png">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item show-dot :link="{path:'/location'}">
      <img slot="icon" src="./assets/Compass04.png">
      <span slot="label">发现</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/list'}">
      <img slot="icon" src="./assets/Clipboard04.png">
      <span slot="label">订单</span>
    </tabbar-item>
    <tabbar-item badge="2" :link="{path:'/profile'}">
      <img slot="icon" src="./assets/User04.png">
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</div>
</template>

<script>
import {
  XHeader,
  Tabbar,
  TabbarItem,
  Group,
  Cell,
  Loading
} from 'vux'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    headerTransition () {
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
}

body {
  background-color: #efefef;
}

/**
* vue-router transition
*/
.router-view {
  width: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  backface-visibility: hidden;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  height: 100%;
  position: absolute;
  left: 0;
}
.vux-pop-out-enter-active {
  animation-name: popInLeft;
}
.vux-pop-out-leave-active {
  animation-name: popOutRight;
}
.vux-pop-in-enter-active {
  perspective: 1000;
  animation-name: popInRight;
}
.vux-pop-in-leave-active {
  animation-name: popOutLeft;
}
@keyframes popInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutLeft {
  from {
    opacity: 1;
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes popInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutRight {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
}

</style>
