<template>
  <div class="sportWrapper recommend-content">
    <loading-bar v-show="isLoading"></loading-bar>
    <search-bar></search-bar>
    <div class="infoList2">
      <!--<h2 class="titleBox flex-box">-->
      <!--<span class="left-ico flex-box"><i class="ds-ico"></i>教育装备</span>-->
      <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      <!--</h2>-->
      <ul>
        <router-link tag="li" :to="'./movieDetails?id='+item.id" v-for="item in list" :key="item.id">
          <div class="leftText flex-box">
            <img class="rightImg" :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
            <div class="box-1">
              <h4 class="flex-box">
                <p class="box-1 media_title">{{item.title}}</p>
                <!--<span class="style1">{{item.labels}}</span>-->
              </h4>
              <p class="media_desc">
                {{item.introduction}}
              </p>
              <!--<h6>2018.05.04 22:36</h6>-->
            </div>
          </div>
        </router-link>
        <li v-show="!list.length">
          <h2 class="noList">暂无数据...</h2>
        </li>
        <!--<li>-->
          <!--<div class="leftText flex-box">-->
            <!--<img class="rightImg" src="./../../assets/img/th-b-1.png" alt="">-->
            <!--<div class="box-1">-->
              <!--<h4 class="flex-box">-->
                <!--<p class="box-1 media_title">在2018-2019学年第二学期开学典礼上的讲话</p>-->
                <!--<span class="style2">教育装备</span>-->
              <!--</h4>-->
              <!--<p class="media_desc">-->
                <!--学生可以下载优质的教学资源学习，记录自己的-->
                <!--学生可以下载优质的教学资源学习，记录自己的-->
                <!--学习笔记。系统会自动记录学生学习轨迹，帮-->
              <!--</p>-->
              <!--&lt;!&ndash;<h6>2018.05.04 22:36</h6>&ndash;&gt;-->
            <!--</div>-->
          <!--</div>-->
        <!--</li>-->
      </ul>
    </div>
  </div>

</template>

<script>
  import loadingBar from './../components/loading'
  import searchBar from '../components/searchBar.vue'
  export default {
    name: 'InformatizationSports',
    data () {
      return {
        isLoading: true,
        searchVal: '',
//        showSearchBtn: true,
//        showSearchVal: '筛选',
        list: []
      }
    },
    components:{
      searchBar,
      loadingBar
    },
    methods: {
      //教育装备列表
      geTschoolMoviesData(){
        let type = this.$route.query.type
        this.http.get(this.ports.informatization.SchoolMovies+'?type='+type,res=>{
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          console.log(res)
          if(res.status==200){
            const data = res.data
            this.list = data
          }
        })
      },
    },
    mounted(){
      this.geTschoolMoviesData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .sportWrapper{
    background-color:#f5f5f5;
    font-size:24px;
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
              width:130px;
              height:130px;
              margin-right:20px;
              border-radius: 10px;
              img{
                border-radius: 5px;
              }
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
              font-size:26px;
            }
            h6{
              color:#909090;
              font-size:22px;
              margin-top:10px;
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
