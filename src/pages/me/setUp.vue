<template>
  <div class="setUp recommend-content">
    <ul>
      <li class="flex-box">
        <span>头像</span>
        <img src="./../../assets/img/party-c-1.png" alt="">
      </li>
      <li class="flex-box">
        <span>用户名</span>
        <span class="name">栀璃鸢年</span>
      </li>
    </ul>
    <div class="outLog" @click="outLogin">
      退出登录
    </div>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'sayValue',
    data (){
      return{

      }
    },
    methods: {
      showToastTxtOnly(text) {
        this.toast = this.$createToast({
          txt: text,
          type: 'txt'
        })
        this.toast.show()
      },
      ...mapMutations(['changeLogin']),
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

    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .setUp{
    font-size:28px;
    ul{
      padding:0 20px;
      background-color:white;
      margin-bottom:20px;
      li{
        height:80px;
        justify-content: space-between;
        padding:20px 0;
        border-bottom:1px solid #eee;
        img{
          width:70px;
          height:70px;
          border-radius: 50%;
        }
        .name{
          color:#bbbbbb;
        }
      }
      li:last-child{
        border:none;
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
