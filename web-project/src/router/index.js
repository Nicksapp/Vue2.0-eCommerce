import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'

Vue.use(Router)

const Home = resolve => {
  require.ensure(['../App.vue'], () => {
    resolve(require('../App.vue'))
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/first',
      name: 'Home',
      component: Home
    },{
      path: '/hello',
      component: Hello
    },{
      path: '/first',
      name: 'first',
      component: function (resolve) {
        require(['../views/first.vue'], resolve)
      }
    },{
      path: '/location',
      name: 'location',
      component: function (resolve) {
        require(['../views/location.vue'], resolve)
      }
    },{
      path: '/list',
      name: 'list',
      component: function (resolve) {
        require(['../views/list.vue'], resolve)
      }
    },{
      path: '/profile',
      name: 'profile',
      component: function (resolve) {
        require(['../views/profile.vue'], resolve)
      }
    },{
      path: '/headlines',
      name: 'headlines',
      component: function (resolve) {
        require(['../views/headlines.vue'], resolve)
      }
    },{
      path: '*',
      component: function (resolve) {
        require(['../App.vue'], resolve)
      }
    }
  ]
})
