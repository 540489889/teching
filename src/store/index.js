import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    showNavBar:  localStorage.showNav ? localStorage.showNav : true,
    IMGPATH: 'http://cqeic.swkj2014.com/',
    defaultTitle: '首页',
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      console.log(state,user.Authorization)
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    },
    //导航
    changeTitle (state, title){
      state.defaultTitle = title
    },
    changeShowNav (state, val){
      localStorage.showNav = val
    }
  },
  actions: {
    // changeMallInfo(ctx,data){
    //   ctx.commit("changeMallInfo",data)
    // }
  }
})
