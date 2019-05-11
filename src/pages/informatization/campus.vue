<template>
  <div class="campusWrapper recommend-content">
    <loading-bar v-if="isLoading"></loading-bar>
    <search-bar></search-bar>
    <div class="infoList2">
      <!--<h2 class="titleBox flex-box">-->
      <!--<span class="left-ico flex-box"><i class="ds-ico"></i>教育装备</span>-->
      <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      <!--</h2>-->
      <ul>
        <router-link tag="li" :to="'./campusDetails?id='+item.id" v-for="item in list" :key="item.id">
          <div class="leftText flex-box">
            <!--<img class="rightImg" src="./../../assets/img/th-b-1.png" alt="">-->
            <div class="box-1">
              <h4 class="flex-box">
                <p class="box-1 media_title">{{item.title}}</p>
                <!--<span class="style1">教育装备</span>-->
              </h4>
              <p class="media_desc">
                {{item.introduction}}
              </p>
              <h6>{{item.update}}</h6>
            </div>
          </div>
        </router-link>
        <li v-show="!list.length">
          <h2 class="noList">暂无数据...</h2>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import loadingBar from './../components/loading'
  import searchBar from '../components/searchBar.vue'
  export default {
    name: 'InformatizationCampus',
    data () {
      return {
        isLoading: true,
        searchVal: '',
        list: []
      }
    },
    components:{
      searchBar,
      loadingBar
    },
    methods: {
      geTwisdomSchoolData(){
        let type = this.$route.query.type
        this.http.get(this.ports.informatization.wisdomSchool+'?type='+type,res=>{
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
      this.geTwisdomSchoolData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .campusWrapper{
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
              width:150px;
              height:150px;
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
