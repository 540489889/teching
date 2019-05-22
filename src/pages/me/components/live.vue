<template>
  <div class="roomContent">
    <div class="infoList2">
      <ul>
        <li v-for="item in live" :key="item.id">
          <a>
            <div class="leftText flex-box">
              <div class="img">
                <img class="rightImg" src="./../../../assets/img/banner-me-2.png" alt>
              </div>
              <div class="box-1">
                <h4 class="flex-box">
                  <p class="box-1 media_desc">故事是以小王子和心爱的玫瑰花吵架而离开自己的星球...
                  </p>
                </h4>
                <h6 class="flex-box">
                    <span>
                      <i class="bf-ico-1"></i>
                    </span>
                  <span>
                      <i class="cubeic-person"></i>
                      99
                    </span>
                </h6>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="noReading" v-if="!live.length">
        <img src="./../../../assets/ico/null-rd-ico.png" alt="">
        <h6>这里还空空如也～</h6>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'sayValue',
    data (){
      return{

      }
    },
    props: {
      live: Array
    },
    methods: {

    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .noReading{
    padding:50px;
    background-color:white;
    text-align: center;
    img{
      width:272px;
      height:272px;
    }
    h6{
      margin:20px 0;
    }
    .goReading{
      width:200px;
      height:80px;
      line-height:80px;
      color:white;
      border-radius: 40px;
      background-color:#029b46;
      margin:0 auto;
    }
  }
  .nullLive{
    text-align: center;
    padding:50px 0;
  }
  .roomContent{
    margin-bottom:100px;
    .infoList2 {
      background-color: white;
      padding: 10px 0;
      padding-bottom: 0;
      .titleBox {
        .left-ico i {
          width: 32px;
          height: 32px;
          background: url(./../../../assets/ico/info-t-2.png) no-repeat center;
          background-size: 100%;
        }
      }
      ul {
        .noList {
          padding: 10px;
          color: #999;
        }
        li:last-child {
          border: none;
        }
        li:first-child{
          padding-top:0;
        }
        li {
          background-color: white;
          /*margin-top:20px;*/
          padding: 20px;
          border-bottom: 1px solid #eee;
          // align-items: flex-start;
          .leftText {
            align-items: flex-start;
            text-align: left;
            .img {
              width: 190px;
              height: 130px;
              margin-right: 20px;
              border-radius: 10px;
              overflow: hidden;
              img {
                width: 100%;
              }
            }
            h4 {
              margin-bottom: 10px;
              span {
                padding: 10px;
                border-radius: 5px;
                font-size: 20px;
                margin-left: 20px;
              }
              .style1 {
                border: 1px solid #009946;
                color: #009946;
              }
              .style2 {
                border: 1px solid #f69704;
                color: #f69704;
              }
            }
            .media_title {
              font-size: 30px;
            }
            .media_desc {
              /*color:#909090;*/
              font-size: 28px;
            }
            h6 {
              color: #909090;
              font-size: 22px;
              margin-top: 15px;
              justify-content: space-between;
              .bf-ico-1 {
                display: inline-block;
                width: 27px;
                height: 20px;
                background: url(./../../../assets/ico/bf-ico-1.png) no-repeat center;
                background-size: 100%;
              }
            }
          }
        }
        li:last-child {
          border: none;
        }
      }
    }
  }
</style>
