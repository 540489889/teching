import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    defaultTitle: localStorage.teachingTitle ? localStorage.teachingTitle: '首页',
    showNavBar:  localStorage.showNav ? localStorage.showNav : true,
    IMGPATH: 'http://cqeic.swkj2014.com/'
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      console.log(state,user.Authorization,999)
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    },
    //导航
    changeTitle (state, title){
      localStorage.teachingTitle = title
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
