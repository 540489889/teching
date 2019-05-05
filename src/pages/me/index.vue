<template>
  <div class="meWrapper recommend-content">
    <div class="">
      <div class="meTitle flex-box">
        <router-link tag="h6" to="/reg/login" class="mePsBg">
          <span><i></i></span>
          <p>登录</p>
        </router-link>
      </div>
      <div class="meContent">
        <h2 class="flex-box">
          <span class="left-ico flex-box"><i class="ds-ico"></i>最近阅读</span>
          <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
        </h2>
        <div class="scroll-list-wrap">
          <cube-scroll
            ref="scroll"
            :data="items"
            direction="horizontal"
            :options="options">
            <ul class="list-wrapper">
              <li v-for="item in items" class="list-item">
                <div class="imgBox"><img src="../../assets/img/banner-me-1.png" alt=""></div>
                <h3 class="media_desc">同理心：做个让人舒服的做个让人舒服的做个让人舒服的</h3>
                <p class="media_title">霍华德·本内特霍华德·本内特</p>
              </li>
            </ul>
          </cube-scroll>
        </div>
      </div>
      <div class="outLog" @click="outLogin">
        退出登录
      </div>
    </div>
    <!--<nav-bar :selectedNavTitle="selectedNavTitle"></nav-bar>-->
  </div>
</template>

<script>
  import navBar from './../components/navBar.vue'
  import './../../assets/style/cubeRest.css'
  import { mapMutations } from 'vuex'
  export default {
    name: 'Home',
    data () {
      return {
        selectedNavTitle: '我的',
        searchVal: '',
        items: [1, 2, 3, 4, 5, 6],
        direction: "horizontal",
        options: {
//          scrollbar: {
//            fade: false
//          }
        },
        scrollX: true,
        scrollY: false
      }
    },
    components: {
      navBar
    },
    created (){

    },
    mounted (){
      console.log(this.$route.path)
    },
    methods:{
      ...mapMutations(['changeLogin']),
      showToastTxtOnly(text) {
        this.toast = this.$createToast({
          txt: text,
          type: 'txt'
        })
        this.toast.show()
      },
      outLogin (){
        this.http.get(this.ports.reg.outLogin, res =>{
          this.showToastTxtOnly(res.message)
          console.log(res)
          if(res.status==200){
            this.userToken = res.loginStatus;
            // 将用户token保存到vuex中
            this.changeLogin({ Authorization: this.userToken });
            //如果存在参数
            if(this.$route.query.redirect) {
              let redirect = this.$route.query.redirect;
              this.$router.replace(redirect);//则跳转至进入登录页前的路由
            }else{
              this.$router.replace({ path: '/reg/login' });
            }
          }
        })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .meWrapper{
    background-color:#f5f5f5;
    font-size:24px;
    .meTitle{
      width:750px;
      height:370px;
      background:url(./../../assets/ico/mg-t-bg.png) no-repeat center white;
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
