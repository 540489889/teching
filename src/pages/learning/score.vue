<template>
  <div class="scoreWrapper recommend-content">
    <div class="scoreBox">
      <div class="title flex-box">
        <div class="left"><img src="./../../assets/ico/rm-banner.png" alt=""></div>
        <div class="right1 box-1">
          <h4 class="media_title">寄小读者[插图本]</h4>
          <p class="media_title">冰心 2480人在读</p>
        </div>
        <div class="right2 flex-box">
          <cube-rate v-model="star" :disabled="disabled" :max="maxStar" :justify="justify"></cube-rate>
          <span class="scoreNum">9.0</span>
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
      <button>确定</button>
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
        maxlength: 100,
        autofocus: true,
        value: 0,
        textVal: '',
        star: 4.5,
        maxStar: 5,
        disabled: true,
        justify: false,
        content: {}
      }
    },
    methods: {

    },
    mounted (){

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
            width:80px;
            height:100px;
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
          padding:20px 0;
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
        font-size:36px;
        width:630px;
        height:100px;
        line-height:100px;
        border-radius: 50px;
      }
    }
  }
</style>
