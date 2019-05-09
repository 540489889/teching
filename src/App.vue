<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
    <nav-bar v-show="showBar"></nav-bar>
  </div>
</template>

<script>
import navBar from './pages/components/navBar.vue'
export default {
  name: 'app',
  data (){
    return{
      transitionName:'',
      showBar: true
    }
  },
  created (){

  },
  components:{
    navBar
  },
  watch: {
    //使用watch 监听$router的变化
    '$route' (to, from) {

      //导航显示
      switch (to.name){
        case 'Home':
          this.showBar = true
          break
        case 'communityIndex':
          this.showBar = true
          break
        case 'MeIndex':
          this.showBar = true
          break
        case 'classroomIndex':
          this.showBar = true
          break
        default :
          this.showBar = false
      }
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }, deep: true
  }
}
</script>

<style lang="less" scoped>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
