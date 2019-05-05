<template>
  <ul>
    <li v-for="(item,index) in list" :key="item.id">
      <div class="oneBox" :class="{'fristBox' : frist }">
        <div class="tpVideo flex-box">
          <div class="leftImg">
            <img src="../../../assets/ico/video-ico-3.png" alt="">
          </div>
          <div class="textInfo box-1">
            <h4 class="media_title">{{item.nickname}}</h4>
            <p>{{item.comtime}}</p>
          </div>
        </div>
        <div class="infor">
          {{item.content}}
        </div>
      </div>
      <list-item v-if="item.children.length" :frist="false" :list="item.children"></list-item>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'listItem',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        toastTxt: 'cube toast content'
      }
    },
    props: {
      list: Array,
      frist: Boolean
    },
    methods: {

    },
    mounted(){
      console.log(this.list)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  li{
    background-color:white;
    padding:30px;
    padding-bottom:20px;
    margin-top:20px;
    ul{
      li{
        margin-top:0;
        padding:0;
      }
    }
    .fristBox + ul{
      margin-bottom:10px;
      padding:20px;
      padding-left:50px;
      background-color:#f5f5f5;
      li,ul{
        background-color:#f5f5f5;
      }
      .tpVideo {
        .leftImg {
          img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
          }
        }
        .textInfo {
          text-align: left;
          margin-left: 20px;
          h4 {
            font-size: 30px;
            line-height: 1.6;
            margin-bottom: 10px;
          }
          p {
            color: #bbbbbb;
            font-size: 24px;
            span {
              margin-left: 20px;
            }
          }
        }
      }
    }
    .oneBox,.twoBox{
      padding-bottom:20px;
      .tpVideo{
        .leftImg{
          img{
            width:98px;
            height:98px;
            border-radius: 50%;
          }
        }
        .textInfo{
          text-align: left;
          margin-left:20px;
          h4{
            font-size:30px;
            line-height:1.6;
            margin-bottom:10px;
          }
          p{
            color:#bbbbbb;
            font-size:24px;
            span{
              margin-left:20px;
            }
          }
        }
      }
      .infor{
        text-align: left;
        line-height:1.4;
        margin-top:20px;
      }
      .twoInfo{
        margin-top:10px;
        margin-left:60px;
        .twoP{
          margin-bottom:20px;
          border:none;
        }
      }
    }
    .twoBox{
      border-top:1px solid #eee;
      padding-top:20px;
      .tpVideo{
        .leftImg{
          img{
            width:50px;
            height:50px;
            border-radius: 50%;
          }
        }
        .textInfo{
          text-align: left;
          margin-left:10px;
          h4{
            font-size:26px;
            line-height:1.4;
            margin-bottom:10px;
          }
          p{
            color:#bbbbbb;
            font-size:24px;
            span{
              margin-left:20px;
            }
          }
        }
      }
    }
    .threeBox{
      border:none;
      background-color:#f5f5f5;
      padding:15px;
      border-radius: 5px;
    }
  }
</style>
