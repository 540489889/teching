<template>
  <div class="activeWrapper">
    <div  class="hotGroom">
      <div class="hotContent">
        <ul>
          <router-link tag="li" :to="'./newsDetails?id='+item.id" v-for="(item,index) in list" :key="item.id">
            <h4 class="media_title flex-box"><span class="newsTs" v-if="index===0">置顶</span>{{item.title}}</h4>
            <div class="leftText flex-box">
              <div class="box-1">
                <p class="media_desc">
                  {{item.introduction}}
                </p>
                <h6>{{item.update}}<span>{{item.seenum}} 阅读</span></h6>
              </div>
              <img class="rightImg" :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
            </div>
          </router-link>
          <li v-if="!list.length">
            <h6 class="noList">暂无数据...</h6>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data (){
      return {

      }
    },
    props: {
      list: Array
    }
  }
</script>
<style lang="less" scoped>
  .activeWrapper{
    margin-top:20px;
    .hotGroom{
      background-color:white;
      h2{
        justify-content: space-between;
        padding:20px;
        font-size:32px;
        .left-ico{
          i{
            width:23px;
            height:32px;
            background:url(../../../assets/ico/title-ico-l-2.png) no-repeat center;
            background-size:100%;
            margin-right:10px;
          }
        }
        .right-text{
          color:#bbbbbb;
          font-size:24px;
        }
      }
      .hotContent{
        ul{
          .noList{
            padding:10px;
            color:#999;
            text-align: center;
          }
          li{
            padding:20px;
            text-align: left;
            border-bottom:1px solid #eee;
            margin-bottom:20px;
            /*align-items: flex-end;*/
            .media_title{
              font-size:30px;
              color:black;
              margin-bottom:20px;
              .newsTs{
                background-color:#e60012;
                color:white;
                font-size:20px;
                padding:5px 10px;
                margin-right:15px;
                border-radius: 5px;
              }
            }
            .leftText{
              p{
                color:#909090;
                font-size:26px;
              }
              h6{
                color:#bbbbbb;
                font-size:24px;
                margin-top:10px;
                span{
                  margin-left:20px;
                }
              }
            }
            .rightImg{
              margin-left:20px;
              width:125px;
              height:125px;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
</style>
