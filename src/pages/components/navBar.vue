<template>
  <cube-tab-bar
    class="navBar"
    v-model="selectedLabelSlots"
    @click="clickHandler"
    @change="changeHandler">
    <cube-tab
      :showSlider="showSlider"
      :inline="inline"
      :useTransition="useTransition"
      v-for="(item, index) in tabs"
      :label="item.label"
      :key="item.label">
      <!-- name为icon的插槽 -->
      <i slot="icon" :class="item.icon"></i>
      <!-- 默认插槽 -->
      {{item.label}}
    </cube-tab>
  </cube-tab-bar>
</template>

<script>
  import './../../assets/style/cubeRest.css'
  export default {
    data () {
      return {
        selectedLabelSlots: this.$store.state.defaultTitle,
        tabs: [{
          label: '首页',
          icon: 'cubeic-home'
        }, {
          label: '空中课堂',
          icon: 'cubeic-like'
        }, {
          label: '教育数据',
          icon: 'cubeic-vip'
        }, {
          label: '我的',
          icon: 'cubeic-person'
        }],
        showSlider: false,
        inline: true,
        useTransition: false
      }
    },
    props:{
      selectedNavTitle: String
    },
    methods: {
      clickHandler (label) {
        // if you clicked home tab, then print 'Home'
        this.$store.commit('changeTitle',label)
        switch (label){
          case '首页':
            this.$router.push('/')
                break
          case '我的':
            this.$router.push('/me/index')
                break
          case '空中课堂':
            this.$router.push('/classroom/index')
            break
          case '教育数据':
            alert('敬请期待')
            break
        }

      },
      changeHandler (label) {
        // if you clicked different tab, this methods can be emitted
//        console.log(this.$route.path)
      }
    },
    mounted (){
//      this.clickHandler(this.selectedNavTitle)
    }
  }
</script>

<style scoped lang="less">
  .navBar{
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    font-size:24px;
    background-color:white;
    border-top:1px solid #eee;
    z-index: 99;
  }
  .navBar .cube-tab_active{
    color: #029b46;
  }
</style>
