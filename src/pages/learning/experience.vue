<template>
  <div class="experienceWrapper recommend-content">
    <div class="superBox">
      <ul>
        <router-link
          tag="li"
          v-for="item in list"
          :key="item.id"
          :to="'./experienceAll?qid='+item.id+'&eid='+item.bookid"
        >
          <div class="oneBox">
            <div class="tpVideo">
              <div class="leftImg flex-box">
                <img :src="$store.state.IMGPATH+item.cover_img" alt="">
                <h4 class="media_title">{{item.nickname}}</h4>
              </div>
              <div class="textInfo box-1">
                <p>{{item.content}}
                </p>
              </div>
              <div class="bookInfo flex-box">
                <div class="left">
                  <img :src="$store.state.IMGPATH+item.cover_img"  alt="">
                </div>
                <div class="right">
                  <h4 class="media_title">{{item.bookname}}</h4>
                  <p class="media_desc">{{item.author}}</p>
                </div>
              </div>
              <div class="inside" v-if="item.comment">
                <p>
                  <span>{{item.comment.nickname}}：</span>
                  {{item.comment.content}}
                </p>
              </div>
              <div class="speak flex-box">
                <i class="speak-ico"></i>{{item.rednum}}
              </div>
            </div>
            <div class="infor">
              <!--{{item.content}}-->
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'sayValue',
    data (){
      return{
        star: 4.5,
        maxStar: 5,
        disabled: true,
        justify: false,
        list: []
      }
    },
    methods: {
      oneComment (){
        this.http.get(this.ports.learning.commentList, res =>{
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.list = data.data
          }
        })
      },
    },
    mounted (){
      this.oneComment()
    }
  }
</script>
<style lang="less" scoped>
  .experienceWrapper{
    font-size:28px;
    .superBox{
      padding-bottom:30px;
      ul{
        li{
          background-color:white;
          padding:20px 30px;
          border-bottom:1px solid #eee;
          margin-bottom:20px;
          ul{
            li{
              margin-top:0;
              padding:0;
            }
          }
          .bookInfo{
            margin-left:80px;
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
          .inside{
            padding:20px;
            margin-left:80px;
            background-color:#fafafa;
            margin-top:20px;
            span{
              color:#029b46;
            }
            p{
              color:#929aa1;
              line-height:1.6;
              text-align: left;
              font-size:22px;
            }
          }
          .speak{
            padding:20px 0;
            padding-bottom:0;
            margin-left:80px;
            justify-content: flex-end;
            .speak-ico{
              width:32px;
              height:26px;
              background:url(./../../assets/ico/speak-ico.png) no-repeat center;
              background-size:100%;
              margin-right:10px;
            }
            color:#929aa1;
          }
          .oneBox{
            /*padding-bottom:20px;*/
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
                margin-left:80px;
                line-height:1.6;
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
        }
        li:last-child{
          border:none;
        }
      }
    }
  }
</style>
