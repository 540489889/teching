<template>
  <div class="meWrapper recommend-content">
    <loading v-if="isLoading"></loading>
    <div class="">
      <div class="meTitle flex-box">
        <!--<router-link tag="h6" to="/reg/login" class="mePsBg">-->
          <!--<span><i></i></span>-->
          <!--<p>登录</p>-->
        <!--</router-link>-->
      </div>
      <div class="userInfo flex-box">
        <img v-if="list.port" class="userTx"  :src="$store.state.IMGPATH+list.port" alt="">
        <img v-else class="userTx"  src="./../../assets/ico/mrtx.jpg" alt="">
        <span v-if="list.username">{{list.username}}</span>
        <span v-else>{{list.iphone}}</span>
        <span class="setUp" @click="setUpClick"><i class="cubeic-setting"></i>设置</span>
      </div>
      <div class="meContent">
        <!--<h2 class="flex-box">-->
          <!--<span class="left-ico flex-box"><i class="ds-ico"></i>最近阅读</span>-->
          <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
        <!--</h2>-->
        <h3 class="tabMe">
          <cube-tab-bar
            v-model="selectedLabelSlots"
            inline
            @click="clickHandler">
            <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
              <!-- name为icon的插槽 -->
              <i slot="icon" :class="item.icon"></i>
              <!-- 默认插槽 -->
              {{item.label}}
            </cube-tab>
          </cube-tab-bar>
        </h3>
        <transition name="component-fade" mode="out-in">
          <component
            :is="view"
            :experience="experience"
            :ebook="ebook"
            :live="live"
          ></component>
        </transition>
      </div>
      <!--<div class="outLog" @click="outLogin">-->
        <!--退出登录-->
      <!--</div>-->
    </div>
    <!--<nav-bar :selectedNavTitle="selectedNavTitle"></nav-bar>-->
  </div>
</template>

<script>
  import loading from '../components/loading.vue'
  import navBar from './../components/navBar.vue'
  import reading from './components/reading.vue'
  import live from './components/live.vue'
  import experience from './components/experience.vue'
  import './../../assets/style/cubeRest.css'
  export default {
    name: 'Home',
    data () {
      return {
        view: 'reading',
        selectedLabelSlots: '在线阅读',
        tabs: [{
          label: '在线阅读',
          icon: 'cub1'
        }, {
          label: '直播课堂',
          icon: 'cub2'
        }, {
          label: '读书心得',
          icon: 'cub3'
        }, ],
        searchVal: '',
        isLoading: true,
        ebook: [],
        experience: [],
        live: [],
        list: {}
      }
    },
    components: {
      loading,
      navBar,
      reading,
      live,
      experience
    },
    created (){
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    },
    mounted (){
      this.getMeData()
    },
    methods:{
      setUpClick(){
          let data = {}
          data.username = this.list.username
          data.coverImg = this.list.port
          this.$router.push({path:'/me/setUp', query: { list: JSON.stringify(data)}})
      },
      clickHandler (label) {
        if(label=='在线阅读'){
          this.view = 'reading'
        }
        if(label=='直播课堂'){
          this.view = 'live'
        }
        if(label=='读书心得'){
          this.view = 'experience'
        }
      },
      getMeData(){
        this.http.get(this.ports.me.userIndex,res=>{
          console.log(res)
          if(res.status === 200){
            const data = res.data
            this.ebook = data.ebook
            this.experience = data.experience
            this.live = data.live
            this.list = data
          }
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }
  .meWrapper{
    background-color:#f5f5f5;
    font-size:28px;
    .meTitle{
      width:750px;
      height:243px;
      background:url(./../../assets/ico/m-t-1.png) no-repeat center white;
      background-size:100%;
      text-align: center;
      justify-content: center;
      .mePsBg{
        text-align: center;
        span{
          display: inline-block;
          width:125px;
          height:125px;
          background-color:rgba(183,191,209,0.8);
          border-radius: 50%;
          text-align: center;
          line-height:125px;
          i{
            margin-top:27px;
            display: inline-block;
            width:66px;
            height:70px;
            background:url(./../../assets/ico/me-p-ico.png) no-repeat center;
            background-size:100%;
          }
        }
        p{
          font-size:32px;
          color:#c3e1fe;
          margin-top:10px;
        }
      }
    }
    .userInfo{
      font-size:32px;
      justify-content: space-between;
      position:relative;
      background-color:white;
      height:120px;
      padding:0 20px;
      margin-bottom:20px;
      .userTx{
        position:absolute;
        width:120px;
        height:120px;
        border-radius: 50%;
        top:-90px;
      }
      .setUp{
        font-size:28px;
        background-color:#e8e8e8;
        padding:5px 10px;
        border-radius: 20px;
        i{
          color:#8a8a8a;
          margin-right:5px;
        }
      }
    }
    .tabMe{
      padding:20px;
      padding-top:0;
      margin-bottom:20px;
      border-bottom:1px solid #eee;
    }
    .meContent{
      background-color:white;
      padding:25px 0;
      h2{
        justify-content: space-between;
        padding:20px;
        font-size:32px;
        .left-ico{
          i{
            width:32px;
            height:32px;
            background:url(./../../assets/ico/d-s-ico.png) no-repeat center;
            background-size:100%;
            margin-right:10px;
          }
        }
        .right-text{
          color:#bbbbbb;
          font-size:24px;
        }
      }
    }
    .outLog{
      width:100%;
      height:90px;
      line-height:90px;
      text-align: center;
      font-size:32px;
      margin-top:20px;
      background-color:white;
      -moz-box-shadow:0 0 10px #eee;
      -webkit-box-shadow:0 0 10px #eee;
      box-shadow:0 0 10px #eee;
    }
  }
</style>
