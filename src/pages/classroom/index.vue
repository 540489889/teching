<template>
  <div class="roomIndex recommend-content">
    <div class="title">
        <div class="searchBox">
          <search-bar></search-bar>
        </div>
    </div>
    <div class="roomContent">
      <div class="roomNav">
        <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
      </div>
      <div class="infoList2">
        <!--<h2 class="titleBox flex-box">-->
        <!--<span class="left-ico flex-box"><i class="ds-ico"></i>教育装备</span>-->
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
        <!--</h2>-->
        <ul>
          <li>
            <div class="leftText flex-box">
              <img class="rightImg" src="./../../assets/img/th-b-2.png" alt="">
              <div class="box-1">
                <h4 class="flex-box">
                  <p class="box-1 media_desc">人人课堂初高中生学业生涯规划指导
                    人人课堂初高中生学业生涯规划指导公开课</p>
                  <!--<span class="style1">教育装备</span>-->
                </h4>
                <!--<p class="media_desc">-->
                  <!--人人课堂初高中生学业生涯规划指导-->
                  <!--人人课堂初高中生学业生涯规划指导-->
                <!--</p>-->
                <h6 class="flex-box">
                  <i class="bf-ico-1"></i>
                  04.23 10：00
                </h6>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import './../../assets/style/cubeNews.css'
  import searchBar from '../components/searchBar.vue'
  export default {
    name: 'sayValue',
    data (){
      return{
        current: '职业规划',
        labels: [
          '职业规划',
          '学习方法',
          '安全教育',
          '国防教育',
          '创客教育',
        ]
      }
    },
    components: {
      searchBar
    },
    methods: {
      changeHandler(cur) {
        this.current = cur
      }
    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .roomIndex{
    background-color:white;
    font-size:24px;
    .title{
      width:750px;
      height:330px;
      background:url(./../../assets/ico/rm-banner.png) no-repeat center;
      background-size:100%;
      .searchBox{
        .searchWrapper{
          background-color:transparent;
          input{
            background: rgba(242, 242, 245, 0.6);
          }
        }
      }
    }
    .roomNav{
      border-bottom:1px solid #eee;
    }
    .infoList2{
      /*background-color:white;*/
      /*margin-top:20px;*/
      padding:10px 0;
      padding-top:0;
      .titleBox{
        .left-ico i{
          width:32px;
          height:32px;
          background:url(./../../assets/ico/info-t-2.png) no-repeat center;
          background-size:100%;
        }
      }
      ul{
        .noList{
          padding:10px;
          color:#999;
        }
        li{
          background-color:white;
          margin-top:20px;
          padding:20px;
          /*border-bottom:1px solid #eee;*/
          align-items: flex-start;
          .leftText{
            align-items: flex-start;
            text-align: left;
            .rightImg{
              width:190px;
              height:130px;
              margin-right:20px;
              border-radius: 10px;
            }
            h4{
              margin-bottom:10px;
              span{
                padding:10px;
                border-radius: 5px;
                font-size:20px;
                margin-left:20px;
              }
              .style1{
                border:1px solid #009946;
                color:#009946;
              }
              .style2{
                border:1px solid #f69704;
                color:#f69704;
              }
            }
            .media_title{
              font-size:30px;
            }
            .media_desc{
              /*color:#909090;*/
              font-size:28px;
            }
            h6{
              color:#909090;
              font-size:22px;
              margin-top:10px;
              .bf-ico-1{
                display: inline-block;
                width:27px;
                height:20px;
                background:url(./../../assets/ico/bf-ico-1.png) no-repeat center;
                background-size:100%;
              }
            }
          }
        }
        li:last-child{
          border:none;
        }
      }
    }
  }
</style>
