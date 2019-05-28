<template>
  <div class="experienceWrapper recommend-content">
    <div class="superBox">
      <ul>
        <li>
          <div class="oneBox">
            <div class="tpVideo">
              <div class="leftImg flex-box">
                <img v-if="ebook.cover_img" class="userTx"  :src="$store.state.IMGPATH+ebook.cover_img" alt="">
                <img v-else class=""  src="./../../assets/ico/mrtx.jpg" alt="">
                <h4 v-if="quescoment.nickname" class="media_title flex-box box-1"><p class="box-1">{{quescoment.nickname}} </p><span>{{ebook.update}}</span></h4>
                <h4 v-else class="media_title flex-box box-1"><p class="box-1">{{quescoment.account}} </p><span>{{ebook.update}}</span></h4>
              </div>
              <div class="textInfo box-1">
                <p>{{quescoment.content}}
                </p>
              </div>
              <div class="bookInfo flex-box">
                <div class="left">
                  <img :src="$store.state.IMGPATH+ebook.cover_img" alt="">
                </div>
                <div class="right">
                  <h4 class="media_title">{{ebook.bookname}}</h4>
                  <p class="media_desc">{{ebook.author}}</p>
                </div>
              </div>
              <!--<div class="inside">-->
                <!--<p>-->
                  <!--<span>文库新人：</span>-->
                  <!--每个星球上的的人也正是我们这些成年人所有的一-->
                  <!--些阴暗品质，作者通过完美的隐喻来展现出来，形成一本...-->
                <!--</p>-->
              <!--</div>-->
              <div class="speak flex-box">
                <router-link tag="i" :to="'./sayValue?eid='+ebook.id+'&&qid='+quescoment.id+'&&score='+0"  class="speak-ico"></router-link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="superBox allSuper">
      <h2 class="titleBox flex-box">
        <span class="left-ico flex-box">
          <!--<i class="ds-ico"></i>-->
          全部评论
        </span>
      </h2>
      <ul>
        <li v-for="item in comment" :key="item.id">
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
              <!--<div class="bookInfo flex-box">-->
                <!--<div class="left">-->
                  <!--<img src="./../../assets/img/banner-me-2.png" alt="">-->
                <!--</div>-->
                <!--<div class="right">-->
                  <!--<h4 class="media_title">小王子</h4>-->
                  <!--<p class="media_desc">圣埃克苏佩里</p>-->
                <!--</div>-->
              <!--</div>-->
              <div v-if="item.children" v-for="it in item.children">
                <list-item :list="item.children"></list-item>
              </div>

              <div class="speak flex-box">
                <router-link tag="i" :to="'./sayValue?eid='+item.bookid+'&&qid='+item.id+'&&score='+0"  class="speak-ico"></router-link>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="nocom" v-if="!comment.length">暂时还没有评论哟...</div>
    </div>
    <router-link tag="div" :to="'./sayValue?eid='+ebook.id+'&&qid='+quescoment.id+'&&score='+0" class="sayInput">
      说点什么吧...
    </router-link>
  </div>
</template>
<script>
  import listItem from './components/listItem.vue'
  export default {
    name: 'sayValue',
    data (){
      return{
        star: 4.5,
        maxStar: 5,
        disabled: true,
        justify: false,
        comment:[],
        ebook: {},
        quescoment:{},
      }
    },
    components: {
      listItem
    },
    methods: {
      oneComment (){
        let qid = this.$route.query.qid
        let eid = this.$route.query.eid
        this.http.get(this.ports.learning.commentDetails+'?qid='+qid+'&eid='+eid, res =>{
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.quescoment = data.ebook.quescoment
            this.ebook = data.ebook
            this.comment = data.comment
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
    margin-bottom:100px;
    .sayInput{
      position:fixed;
      bottom:0;
      left:0;
      width:100%;
      height:100px;
      line-height:50px;
      background-color:white;
      color:#bbb;
      box-sizing: border-box;
      padding:20px;
      border-top:1px solid #eee;
      text-align: left;
    }
    .superBox{
      /*padding-bottom:30px;*/
      h2{
        background-color:white;
        padding-bottom:20px;
        padding-top:30px;
      }
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
                  justify-content: space-between;
                  text-align: left;
                  span{
                    color:#ccc;
                  }
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
    .allSuper{
      ul{

      }
      .nocom{
        padding:20px 10px;
        color:#ccc;
        background-color:white;
        /*height:100px;*/
      }
    }
  }
</style>
