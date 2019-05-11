<template>
  <div class="registerWrapper recommend-content">
    <loading-bar v-if="isLoading"></loading-bar>
    <div class="textTitle">
      <!--<h2>2019中小学教学资源</h2>-->
      <!--<h2>开发项目启动会</h2>-->
      <!--<span class="logo-ico-1"></span>-->
    </div>
    <div class="fillSign">
      <h4 class="title">忘记密码</h4>
      <ul class="registerUl">
        <li>
          <cube-input v-model="inputTell" placeholder="请输入注册手机号" :clearable="clearable"></cube-input>
        </li>
        <li class="flex-box">
          <cube-input class="input-ui"
                      placeholder="短信验证码"
                      v-model="inputCode">
          </cube-input>
          <cube-button
            :disabled="captchaDisable"
            @click="codeBtnAction"
          >{{captchaLabel}}</cube-button>
        </li>
        <li>
          <cube-input v-model="inputPwd"   :type="type" :eye="eye" placeholder="设置密码"></cube-input>
        </li>
        <li>
          <cube-input v-model="inputPwds"  :type="type" :eye="eye" placeholder="确认密码"></cube-input>
        </li>

        <!--<li>-->
        <!--<el-button type="primary" class="r-btn-bg" round @click="handleRegister">完成注册</el-button>-->
        <!--</li>-->
      </ul>
      <div class="signBtn">
        <button type="button" @click="handleRegister">修改</button>
        <h6 class="flex-box">
          <router-link tag="a" to="/reg/register">账号注册</router-link>
          <router-link tag="a" to="/reg/login">已有账号</router-link>
        </h6>
      </div>
    </div>
  </div>
</template>
<script>
  import loadingBar from './../components/loading'
  export default {
    name:'regRegister',
    data (){
      return{
        type: 'password',
        readonly: true,
        autofocus: true,
        autocomplete: true,
        eye: {
          open: true,
          reverse: false
        },
        inputName: '',
        inputPwd: '',
        inputPwds: '',
        inputTell: '',
        inputCode: '',
        captchaLabel:"获取验证码",
        seconds:60,
        captchaDisable:false,
        timer:null,
        isLoading: false,
        name: '',
        password: '',
        clearable: {
          visible: true,
          blurHidden: false
        },
        options: [1, 2, 3, 4, 5, 6],
        value: '',
        title: '请选择单位部门',
        placeholder: '设置密码',
        autoPop: false,
        disabled: false
      }
    },
    components: {
      loadingBar
    },
    methods: {
      showToastTxtOnly(text) {
        this.toast = this.$createToast({
          txt: text,
          type: 'txt'
        })
        this.toast.show()
      },
      //定义倒计时数据
      countdown () {
        if (this.seconds < 1) {
          this.captchaLabel = '获取验证码';
        } else {
          this.captchaDisable = true;
          this.seconds --;
          this.captchaLabel = this.seconds + '秒后重新获取'
        }
      },
      //获取验证码
      codeBtnAction () {
        console.log(999)
        let tellReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if(!tellReg.test(this.inputTell)){
          this.showToastTxtOnly('请填写正确的手机号!');
          return false
        }
        //发送请求
        this.getCode();
        //启动1s步长倒计时
        this.timer = setInterval(()=>{
          this.countdown()
          if(this.seconds === 0){
            this.captchaLabel = '重新获取';
            this.seconds = 60;
            this.captchaDisable = false;
            //停止倒计时
            clearTimeout(this.timer)
          }
        },1000);

      },
      //注册
      handleRegister(){
//        let nameReg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
//        if (!this.inputName) {
//          this.$message.error('用户名不能为空');
//          return false
//        }
        let tellReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if(!tellReg.test(this.inputTell)){
          this.showToastTxtOnly('请填写正确的手机号!');
          return false
        }
        let pwdReg=/^[a-zA-Z0-9]{4,10}$/;
        if (!pwdReg.test(this.inputPwd)) {
          this.showToastTxtOnly('密码不能含有非法字符，长度在4-10之间');
          return false
        }
        if (this.inputPwds != this.inputPwd) {
          this.showToastTxtOnly('两次输入的密码不一致');
          return false
        }
        if (this.inputCode == '') {
          this.showToastTxtOnly('请输入验证码');
          return false
        }
        this.subRegister()
      },
      subRegister () {
        let _this =this
        let params = {};
        params.iphone = this.inputTell
        params.password = this.inputPwd
        params.repassword = this.inputPwds
        params.code = this.inputCode
        this.http.post(this.ports.reg.register,params,res=>{
          console.log(res)
          if(res.status==500){
            this.showToastTxtOnly(res.message)
          }else{
            this.showToastTxtOnly(res.message)
            setTimeout(function () {
              _this.$router.replace({ path: '/reg/login' });
            },1000)
          }
        })
      },
      getCode () {
        let _this =this
//        let params = new URLSearchParams();
//        params.append('iphone', this.inputTell);

        this.http.post(this.ports.reg.telCode,{iphone: this.inputTell},res=>{
          console.log(res)
          if(!res.status==500){
            this.showToastTxtOnly(res.data.message)
          }
        })
      },
    }
  }
</script>
<style lang="less" scoped>
  .registerWrapper{
    width:750px;
    min-height:1206px;
    height:100vh;
    background:url(./../../assets/ico/signBg.png) no-repeat center;
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
      margin-top:50px;
      text-align: center;
      .cube-input:after,.cube-select:after{
        border:none;
      }
      padding:30px 50px;
      .title{
        font-size:40px;
        font-weight: bold;
        color:white;
        text-align: left;
      }
      .registerUl{
        li {
          text-align: left;
          color: white;
          margin-top:50px;
          padding:10px;
          background:white;
          border-radius: 90px;
          position:relative;
          .cube-input{
            background:transparent;
            border-radius: 90px;
          }
          .cube-btn{
            width:130px;
            font-size:14px;
            text-align: center;
            padding:10px;
            margin-left:20px;
            background-color:#076ced;
            border-radius: 90px;
            position:absolute;
            right:0;
            height:100%;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border:none;
          }
          .cube-btn_disabled:after{
            border:none;
          }
        }
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
