<template>
  <div class="superBox">
    <ul>
      <li>
        <div class="oneBox">
          <div class="tpVideo">
            <div class="textInfo box-1">
              <p>故事是以小王子和心爱的玫瑰花吵架而离开自己的星球之后的旅途为主线的，小王子在各个星球间旅行，遇见了许多形形色色的人，最后小王子来到了地球，遇见了一个童心未泯的飞行员和聪明善良的小狐...
              </p>
            </div>
            <div class="bookInfo flex-box">
              <div class="left">
                <img src="./../../../assets/img/banner-me-2.png" alt="">
              </div>
              <div class="right">
                <h4 class="media_title">小王子</h4>
                <p class="media_desc">圣埃克苏佩里</p>
              </div>
            </div>
          </div>
          <div class="dState"><span>审核中...</span></div>
          <div class="infor">
            <!--{{item.content}}-->
          </div>
        </div>
      </li>
      <li>
        <div class="oneBox">
          <div class="tpVideo">
            <div class="textInfo box-1">
              <p>故事是以小王子和心爱的玫瑰花吵架而离开自己的星球之后的旅途为主线的，小王子在各个星球间旅行，遇见了许多形形色色的人，最后小王子来到了地球，遇见了一个童心未泯的飞行员和聪明善良的小狐...
              </p>
            </div>
            <div class="bookInfo flex-box">
              <div class="left">
                <img src="./../../../assets/img/banner-me-2.png" alt="">
              </div>
              <div class="right">
                <h4 class="media_title">小王子</h4>
                <p class="media_desc">圣埃克苏佩里</p>
              </div>
            </div>
          </div>
          <div class="infor">
            <!--{{item.content}}-->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'sayValue',
    data (){
      return{

      }
    },
    methods: {

    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .superBox{
    background-color:white;
    margin-bottom:100px;
    /*margin-top:20px;*/
    /*padding-top:20px;*/
    /*padding-bottom:30px;*/
    ul{
      li:first-child{
        padding-top:0;
      }
      li{
        background-color:white;
        padding:20px 30px;
        border-bottom:1px solid #eee;
        ul{
          li{
            margin-top:0;
            padding:0;
          }
        }
        .bookInfo{
          /*margin-left:80px;*/
          padding:20px;
          border:1px solid #eee;
          margin-top:20px;
          .left{
            img{
              width:80px;
              height:100px;
            }
          }
          .right{
            text-align: left;
            margin-left:20px;
            h4{
            }
            p{
              color:#bbbbbb;
              font-size:26px;
              margin-top:10px;
            }
          }
        }
        .oneBox{
          /*padding-bottom:20px;*/
          .dState{
            text-align: left;
            span{
              display: inline-block;
              color:white;
              background-color:#f74742;
              padding:10px 20px;
              border-radius: 10px;
              margin-top:20px;
            }
          }
          .tpVideo{
            .leftImg{
              img{
                width:60px;
                height:60px;
                border-radius: 50%;
              }
              h4{
                margin-left:20px;
              }
            }
            .textInfo{
              text-align: left;
              /*margin-left:80px;*/
              line-height:1.6;
              h4{
                font-size:30px;
                line-height:1.6;
                margin-bottom:10px;
              }
              p{
                /*color:#bbbbbb;*/
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
            /*margin-left:60px;*/
            .twoP{
              margin-bottom:20px;
              border:none;
            }
          }
        }
      }
      li:last-child{
        border:none;
      }
    }
  }
</style>
