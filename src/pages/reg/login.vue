<template>
  <div class="signWrapper recommend-content">
    <loading-bar v-show="isLoading"></loading-bar>
    <div class="textTitle">
      <!--<h2>2019中小学教学资源</h2>-->
      <!--<h2>开发项目启动会</h2>-->
      <span class="logo-ico-1"></span>
    </div>
    <div class="fillSign">
      <div  class="nameInput flex-box" >
        <i class="name-ico"></i>
        <cube-input class="box-1" v-model="inputTell" placeholder="请输入手机号码" :clearable="clearable"></cube-input>
      </div>
      <div class="bummenSelect flex-box">
        <i class="password-ico"></i>
        <cube-input class="box-1" v-model="password" placeholder="请输入密码" :clearable="clearable"></cube-input>
        <!--<i class="bumen-ico"></i>-->
        <!--<cube-select-->
          <!--class="box-1"-->
          <!--v-model="value"-->
          <!--:title="title"-->
          <!--:options="options"-->
          <!--:placeholder="placeholder"-->
          <!--:auto-pop="autoPop"-->
          <!--:disabled="disabled"-->
          <!--@change="change">-->
        <!--</cube-select>-->
      </div>
      <div class="signBtn">
        <button type="button" @click="userLogin">登录</button>
        <h6 class="flex-box">
          <router-link tag="a" to="/reg/forgetPwd">忘记密码</router-link>
          <router-link tag="a" to="/reg/register">注册账户</router-link>
        </h6>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  import loadingBar from './../components/loading'
  export default {
    name:'Sign',
    data (){
      return{
        isLoading: false,
        inputTell: '',
        password: '',
        clearable: {
          visible: true,
          blurHidden: false
        },
        options: [1, 2, 3, 4, 5, 6],
        value: '',
        title: '请选择单位部门',
        placeholder: '单位部门',
        autoPop: false,
        disabled: false
      }
    },
    components: {
      loadingBar
    },
    methods: {
      ...mapMutations(['changeLogin']),
      showToastTxtOnly(text) {
        this.toast = this.$createToast({
          txt: text,
          type: 'txt'
        })
        this.toast.show()
      },
      change(value, index, text) {
        console.log('change', value, index, text)
      },
      userLogin(){
        let tellReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if(!tellReg.test(this.inputTell)){
          this.showToastTxtOnly('请填写正确的手机号!');
          return false
        }
        let pwdReg=/^[a-zA-Z0-9]{4,10}$/;
        if (!pwdReg.test(this.password)) {
          this.showToastTxtOnly('密码不能含有非法字符，长度在4-10之间');
          return false
        }
        let params = {}
        params.iphone = this.inputTell
        params.password = this.password
        this.http.post(this.ports.reg.UserLogin,params,res=>{
          console.log(res)
          if(res.status==500){
            this.showToastTxtOnly(res.message)
          }else{
            this.userToken = res.loginStatus;
            // 将用户token保存到vuex中
            this.changeLogin({ Authorization: this.userToken });
            //如果存在参数
            if(this.$route.query.redirect) {
              let redirect = this.$route.query.redirect;
              this.$router.replace(redirect);//则跳转至进入登录页前的路由
            }else{
              this.$router.replace({ path: '/me/index' });
            }
          }
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .signWrapper{
    width:750px;
    min-height:1206px;
    height:100vh;
    background:url(./../../assets/ico/loginBg.png) no-repeat center;
    background-size:cover;
    overflow: hidden;
    .textTitle{
      /*margin-top:170px;*/
      .logo-ico-1{
        display: block;
        margin:0 auto;
        width:465px;
        height:465px;
        background:url(./../../assets/ico/logo-ico-1.png) no-repeat center;
        background-size:100%;
      }
      h2{
        font-size:52px;
        font-weight: bold;
        color:white;
      }
      h2:first-child{
        margin-bottom:50px;
      }
    }
    .fillSign{
      /*margin-top:130px;*/
      text-align: center;
      .cube-input:after,.cube-select:after{
        border:none;
      }
      .nameInput{
        background-color:white;
        width:700px;
        height:140px;
        margin:0 auto;
        border-radius: 20px;
        font-size:32px;
        box-shadow:0 0 12px #aaa;
        border-bottom:1px solid #eee;
        .name-ico{
          width:45px;
          height:48px;
          background:url(./../../assets/ico/sign-ico-1.png) no-repeat center;
          background-size:100%;
          margin-left:25px;
        }
      }
      .bummenSelect{
        width:640px;
        height:135px;
        margin:0 auto;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background-color:white;
        text-align: left;
        .bumen-ico{
          width:47px;
          height:48px;
          background:url(./../../assets/ico/sign-ico-2.png) no-repeat center;
          background-size:100%;
          margin-left:25px;
        }
        .password-ico{
          width:38px;
          height:48px;
          background:url(./../../assets/ico/password-ico-1.png) no-repeat center;
          background-size:100%;
          margin-left:25px;
        }
      }
      .signBtn{
        button{
          -webkit-appearance: none;
          appearance:none;
          border:none;
          display: block;
          width:640px;
          height:100px;
          background: -webkit-linear-gradient(left, #29c0e5 , #076ced); /* Safari 5.1 - 6.0 */
          background: -o-linear-gradient(right, #29c0e5 , #076ced); /* Opera 11.1 - 12.0 */
          background: -moz-linear-gradient(right, #29c0e5 , #076ced); /* Firefox 3.6 - 15 */
          background: linear-gradient(to right, #29c0e5 , #076ced); /* 标准的语法 */
          border-radius: 50px;
          font-size:32px;
          color:white;
          text-align: center;
          margin:0 auto;
          margin-top:50px;
        }
        h6{
          justify-content: space-between;
          width:640px;
          margin:0 auto;
          padding:20px 0;
          a{
            color:white;
            font-size:28px;
          }
        }
      }
    }
  }
</style>
