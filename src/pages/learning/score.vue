<template>
  <div class="scoreWrapper recommend-content">
    <div class="scoreBox">
      <div class="title flex-box">
        <div class="left"><img src="./../../assets/ico/rm-banner.png" alt=""></div>
        <div class="right1 box-1">
          <h4 class="media_title">{{list.bookname}}</h4>
          <p class="media_title">{{list.author}} {{list.rednum}}人在读</p>
        </div>
        <div class="right2 flex-box">
          <cube-rate v-model="list.scores" :disabled="disabled" :max="maxStar" :justify="justify"></cube-rate>
          <span class="scoreNum">{{parseFloat(list.scores*2)}}</span>
        </div>
      </div>
      <div class="scoreContent">
        <div class="scoreTx flex-box">
          <span>评分：</span>
          <cube-rate v-model="value"></cube-rate>
        </div>
        <div class="textVal">
          <cube-textarea
            :placeholder="placeholder"
            :maxlength="maxlength"
            :autofocus="autofocus"
            v-model="textVal"
          ></cube-textarea>
        </div>
      </div>
    </div>
    <div class="define">
      <button @click="scoreClick">确定</button>
    </div>
  </div>
</template>
<script>
  import './../../assets/style/cubeNews.css'
  export default {
    name: 'sayValue',
    data (){
      return{
        placeholder: '请输入内容',
        maxlength: 300,
        autofocus: true,
        value: 0,
        textVal: '',
        star: 0,
        maxStar: 5,
        disabled: true,
        justify: false,
        list: {}
      }
    },
    methods: {
      showToastTxt(text) {
        this.toast = this.$createToast({
          txt: text,
          type: 'txt',
          $events: {
            timeout: () => {
            }
          }
        })
        this.toast.show()
      },
      showToastTxtOnly(text) {
        this.toast = this.$createToast({
          txt: text,
          type: 'txt',
          $events: {
            timeout: () => {
              this.$router.go(-1);
            }
          }
        })
        this.toast.show()
      },
      getData () {
        let list = JSON.parse(this.$route.query.list)
        this.list = list
        console.log(list)
      },
      //评分
      scoreClick(){
        let params = {};
        params.eid = this.list.id //电子书id
        params.score = this.value //评分
        params.content = this.textVal //内容
        if (this.value == 0) {
          this.showToastTxt('您还没有为打分哟！');
          return false
        }
        if (this.textVal == '') {
          this.showToastTxt('请输入您的评价！');
          return false
        }
        this.http.post(this.ports.learning.addComment,params,res=>{
          console.log(res)
          let _this = this
          this.showToastTxtOnly(res.message);
        })
      }
    },
    mounted (){
      this.getData()
    }
  }
</script>
<style lang="less" scoped>
  .scoreWrapper{
    background-color:white;
    font-size:28px;
    .scoreBox{
      padding:20px;
      box-sizing: border-box;
      .title{
        padding:10px 20px;
        border:1px solid #eee;
        border-radius: 5px;
        .left{
          img{
            width:100px;
            height:120px;
          }
        }
        .right1{
          text-align: left;
          margin:0 20px;
          h4{
            line-height:1.6;
          }
          p{
            color:#bbbbbb;
            font-size:24px;
          }
        }
        .right2{
          position:relative;
          bottom:-10px;
          .cube-rate-item{
            width:16px;
          }
          .scoreNum{
            margin-left:10px;
          }
        }
      }
      .scoreContent{
        .scoreTx{
          padding:30px 0;
          font-size:32px;
          margin-bottom:10px;
        }
        .cube-textarea-wrapper{
          min-height:200px;
          margin-bottom:140px;
        }
      }
    }
    .define{
      position:fixed;
      bottom:0;
      left:0;
      width:100%;
      background-color:white;
      padding:40px 0;
      button{
        border:none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color:#1ba255;
        color:white;
        text-align: center;
        font-size:32px;
        width:630px;
        height:100px;
        line-height:100px;
        border-radius: 50px;
      }
    }
  }
</style>
