<template>
  <div class="edit recommend-content">
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
              <div style="font-size:30px;">
                +
              </div>
            </cube-upload-btn>
          </div>
        </cube-upload>
      </li>
      <li class="flex-box">
        <span>用户名</span>
        <input type="text" v-model="name" />
      </li>
    </ul>
    <div class="btnEdit">
      <cube-button @click="editClick">确认</cube-button>
    </div>

  </div>
</template>
<script>
  import '../../assets/style/cubeNews.css'
  export default {
    name: 'edit',
    data (){
      return {
        name: '',
        coverImg: '',
        action: 'http://cqeic.swkj2014.com/home/Indexd/editUserInfo',
        files: [],
        max: 1,
        multiple:false,
        upFile: '',
        list: {}
      }
    },
    created (){
      this.init()
    },
    methods: {
      init(){
        const list =  JSON.parse(this.$route.query.list)
        this.name = list.username
        this.coverImg = list.coverImg
      },
      showToastTxtOnly(text) {
        this.toast = this.$createToast({
          txt: text,
          type: 'txt'
        })
        this.toast.show()
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
      }
    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>

  .edit{
    .btnEdit{
      padding:20px;
      margin-top:100px;
    }
    ul{
      padding:0 20px;
      background-color:white;
      margin-bottom:20px;
      li{
        overflow: hidden;
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
        input{
          border:none;
          text-align: right;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        input:active,input:hover,input:focus{
          border:none !important;
        }
      }
      li:last-child{
        border:none;
      }
    }
  }
</style>
