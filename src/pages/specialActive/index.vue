<template>
  <div class="infoWrapper recommend-content">
    <loading v-if="isLoading"></loading>
    <!--<search-bar></search-bar>-->
    <div class="infoList1 meWrapper">
      <h2 class="titleBox flex-box">
        <span class="left-ico flex-box">
          <!--<i class="ds-ico"></i>-->
          人工智能</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      </h2>
      <div class="scroll-list-wrap">
        <ul class="list-wrapper">
          <li class="list-item" style="height:initial;">
            <router-link tag="div" to="./intelligenceList" class="imgBox">
              <img src="./../../assets/ico/sa-tt-1.png" alt="">
            </router-link>
          </li>
          <li class="list-item" style="height:initial;">
            <router-link tag="div" to="./intelligencesList" class="imgBox">
              <img src="./../../assets/ico/sa-tt-2.png" alt="">
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="teContent">
      <div class="infoList2">
        <router-link tag="h2" to="/specialActive/moviesList" class="titleBox flex-box">
          <span class="left-ico flex-box">
            <!--<i class="ds-ico"></i>-->
            校园影视</span>
          <span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>
        </router-link>
        <div v-if="item!=null" class="videoImg" v-for="item in movies" :key="item.id">
          <video :poster="$store.state.IMGPATH+item.cover_img">
            <source :src="$store.state.IMGPATH+item.video" type="video/mp4">
            您的浏览器不支持HTML5视频
          </video>
        </div>
        <ul>
          <router-link tag="li" :to="'/specialActive/MoviesDetails?id='+item.id+'&tables='+item.tables" v-for="(item,index) in list" :key="index">
            <div class="leftText flex-box">
              <img class="rightImg" :src="$store.state.IMGPATH+item.cover_img" alt="">
              <div class="box-1">
                <h4 class="flex-box">
                  <p class="box-1 media_title">
                    {{item.title}}</p>
                </h4>
                <p class="media_desc">{{item.introduction}}</p>
                <h6 class="flex-box">
                  <span>{{item.update}}</span>
                  <span v-if="item.clicknum"><i class="cubeic-person"></i> {{item.clicknum}}</span>
                  <span v-else><i class="cubeic-person"></i>{{item.looknum}}</span>
                </h6>
              </div>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
    <!--智慧校园-->
    <div class="infoList4">
      <h2 class="titleBox flex-box">
        <span class="left-ico flex-box">
          <!--<i class="ds-ico"></i>-->
          创新实验</span>
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      </h2>
      <ul>
        <router-link tag="li" to="./classRoomList">
          <img src="./../../assets/ico/sa-a-1.png" alt="">
          <h4 class="media_title">创新课堂应用专题</h4>
          <!--<p>{{item.seenum}}人观看</p>-->
        </router-link>
        <router-link tag="li" to="./educationList">
          <img src="./../../assets/ico/sa-a-2.png" alt="">
          <h4 class="media_title">创新教育应用专题</h4>
          <!--<p>{{item.seenum}}人观看</p>-->
        </router-link>
        <router-link tag="li" to="./experimentList">
          <img src="./../../assets/ico/sa-a-3.png" alt="">
          <h4 class="media_title">创新实验联盟专题</h4>
          <!--<p>{{item.seenum}}人观看</p>-->
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import './../../assets/style/cubeNews.css'
  import loading from './../components/loading'
  import searchBar from '../components/searchBar.vue'
  import indexSwiper from '../components/indexSwiper.vue'
  import '../../assets/style/zy.media.min.css'
  import '../../assets/js/zy.media.min.js'
  export default {
    name: 'InformatizationIndex',
    data () {
      return {
        isLoading: true,
        sports: [],//竞技与竞赛
        school: [],//教育平台
        movies: [],//直播
        moves: {},//视频
        list: [],//列表数据
        study: [], //教育装备
        searchVal: '',
//        items: [1, 2],
        direction: "horizontal",
        options: {
//          scrollbar: {
//            fade: false
//          }
        },
        scrollX: true,
        scrollY: false,
        equipmentList: [],
        inForAtionList: [],
        toast: null,
      }
    },
    components:{
      searchBar,
      indexSwiper,
      loading
    },
    created(){
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    },
    methods: {
      moveInit(){
        zymedia('video', {"preload": "auto"});
      },
      getSchoolMoves(){
        this.http.get(this.ports.specialActive.schoolMoves,res=>{
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.moves = data.moves
            this.movies.push(this.moves)
            console.log(this.movies,3333)
            this.list = data.data
//            this.moveInit()
          }
        })
      },
    },
    mounted(){
      this.getSchoolMoves()
    },
    watch :{
      movies(){
        this.$nextTick(() => {
          this.moveInit()
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .infoWrapper{
    overflow: hidden;
    height:100%;
    background-color:#f5f5f5;
    font-size:24px;
    .infoList1{
      background-color:white;
      padding:10px 0;
      .titleBox{
        .left-ico i{
          width:31px;
          height:32px;
          background:url(./../../assets/ico/info-t-1.png) no-repeat center;
          background-size:100%;
        }
      }
      .scroll-list-wrap{
        .list-wrapper{
          li{
            width:350px;
            height:195px;
            margin-left:20px;
          }
          li:first-child{
            margin-left:15px;
          }
          li:last-child{
            margin-left:10px;
          }
        }
      }
    }
    .teContent{
      margin-top:20px;
      .infoList2{
        background-color:white;
        padding:10px 0;
        padding-bottom:0;
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
          li:last-child{
            border:none;
          }
          li{
            background-color:white;
            /*margin-top:20px;*/
            padding:30px 20px;
            border-bottom:1px solid #eee;
            align-items: flex-start;
            .leftText{
              align-items: flex-start;
              text-align: left;
              .rightImg{
                width:190px;
                height:160px;
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
                color:#909090;
                font-size:28px;
              }
              h6{
                color:#909090;
                font-size:22px;
                margin-top:15px;
                justify-content: space-between;
                .bf-ico-1{
                  display: inline-block;
                  width:27px;
                  height:20px;
                  background:url(./../../assets/ico/bf-ico-1.png) no-repeat center;
                  background-size:100%;
                }
                .cubeic-person{
                  margin-right:3px;
                }
              }
            }
          }
          li:last-child{
            border:none;
          }
        }
      }
      .videoImg{
        width:710px;
        min-height:325px;
        position:relative;
        background-color:black;
        margin:0 auto;
        img{
          width:100%;
        }
        /*video{*/
        /*width:100%;*/
        /*height:100%;*/
        /*}*/
      }
    }
    .infoList3{
      background-color:white;
      margin-top:20px;
      padding:10px 0;
      .titleBox{
        .left-ico i{
          width:27px;
          height:32px;
          background:url(./../../assets/ico/info-t-3.png) no-repeat center;
          background-size:100%;
        }
      }
      .textBox{
        justify-content: space-between;
        padding:20px;
        padding-top:10px;
        .leftImg{

        }
        img{
          width:345px;
          height:102px;
        }
      }
    }
    .infoList4,.infoList5{
      background-color:white;
      margin-top:20px;
      padding:10px 0;
      .titleBox{
        .left-ico i{
          width:32px;
          height:32px;
          background:url(./../../assets/ico/info-t-5.png) no-repeat center;
          background-size:100%;
        }
      }
      ul{
        overflow: hidden;
        padding:0 10px;
        li{
          box-sizing: border-box;
          float:left;
          width:50%;
          text-align: center;
          margin-bottom:20px;
          img{
            width:362px;
            height:215px;
          }
          h4{
            font-size:28px;
            margin:10px 0;
            text-align: left;
            padding:0 10px;
          }
          p{
            color:#909090;
            font-size:22px;
          }
        }
        li:nth-child(odd){
          padding-right:0;
        }
        li:nth-child(even){
          padding-left:5px;
        }
      }
    }
    .infoList5{
      .titleBox{
        .left-ico i{
          width:32px;
          height:32px;
          background:url(./../../assets/ico/info-t-4.png) no-repeat center;
          background-size:100%;
        }
      }
    }
  }
</style>
