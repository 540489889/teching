<template>
  <div class="setUp recommend-content">
    <ul>
      <li class="flex-box">
        <span>头像</span>
        <cube-upload
          ref="upload"
          v-model="files"
          :action="action"
          @files-added="addedHandler"
          @file-error="errHandler">
          <div class="clear-fix" >
            <cube-upload-file v-for="(file, i) in files" :file="file" :key="i"></cube-upload-file>
            <cube-upload-btn :multiple="false">
              <div class="addLabel" style="font-size:30px;">
                +
              </div>
            </cube-upload-btn>
          </div>
        </cube-upload>
      </li>
      <li class="flex-box">
        <span>用户名</span>
        <input class="name" @change="changeSearch" v-model="userName"/>
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
        list: {},
        coverImg: '',
        action: 'http://cqeic.swkj2014.com/home/Indexd/editUserInfo',
        files: [],
        max: 1,
        multiple:false,
        upFile: '',
        userName: ''
      }
    },
    created (){
      this.init()
    },
    methods: {
      toEdit(){
        this.$router.push({path:'/me/edit', query: { list: JSON.stringify(this.list)}})
      },
      init(){
        this.list =  JSON.parse(this.$route.query.list)
        console.log(this.list)
        this.userName = this.list.username
      },
      showToastTxtOnly(text) {
        this.toast = this.$createToast({
          txt: text,
          type: 'txt'
        })
        this.toast.show()
      },
      changeSearch(){
        let params = {}
        let _this = this
        params.username = this.userName
        params.upFile = this.files[0]
        this.http.post(this.ports.me.editUserInfo,params,res=>{
          this.showToastTxtOnly(res.message)
//          if(res.status===200){
//            setTimeout(function () {
//              _this.$router.push({ path: '/me/index' });
//            },2000)
//          }
        })
      },
      editClick(){
        let params = {}
        let _this = this
        params.username = this.name
        params.upFile = this.files[0]
        this.http.post(this.ports.me.editUserInfo,params,res=>{
          this.showToastTxtOnly(res.message)
          if(res.status===200){
            setTimeout(function () {
              _this.$router.push({ path: '/me/index' });
            },2000)
          }

        })
      },
      addedHandler() {
        this.showToastTxtOnly('头像修改成功')
        $('.addLabel').hide()
        $('.cube-upload-btn').hide()
        const file = this.files[0]
        file && this.$refs.upload.removeFile(file)
      },
      errHandler(file) {
        // const msg = file.response.message
        this.$createToast({
          type: 'warn',
          txt: 'Upload fail',
          time: 1000
        }).show()
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
        overflow: hidden;
        img{
          width:70px;
          height:70px;
          border-radius: 50%;
        }
        .name{
          color:#bbbbbb;
        }
        input{
          border:none;
          text-align: right;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          width:initial;
          display: inline-block;
        }
        input:active,input:hover,input:focus{
          border:none !important;
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
