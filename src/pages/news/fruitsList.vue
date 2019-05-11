<template>
  <div class="sportWrapper recommend-content">

    <search-bar></search-bar>
    <div class="infoList2">
      <!--<h2 class="titleBox flex-box">-->
        <!--<span class="left-ico flex-box"><i class="ds-ico"></i>教育装备</span>-->
        <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
      <!--</h2>-->
      <ul>
        <router-link tag="li" :to="'./fruitsDetails?id='+item.id" v-for="item in list" :key="item.id">
          <div class="leftText flex-box">
            <img class="rightImg" :src="$store.state.IMGPATH+item.cover_img" alt="">
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
        <infinite-loading
          :on-infinite="onInfinite"
          spinner="spiral"
          ref="infiniteLoading">
          <span slot="no-more" class="no-more">我也是有底线的</span>
        </infinite-loading>
      </ul>
    </div>
  </div>

</template>

<script>
  import searchBar from '../components/searchBar.vue'
  import loadingBar from './../components/loading'
  import InfiniteLoading from 'vue-infinite-loading';
  export default {
    name: 'InformatizationSports',
    data () {
      return {
        searchVal: '',
        list: [],
        isLoading: true,
        page: 0,
        title: ''
      }
    },
    components:{
      searchBar,
      loadingBar,
      InfiniteLoading
    },
    methods: {
      onInfinite($state,type) {
        console.log(type)
        this.isLoading = false
        let _this = this;
        let pageSize = 8;
        this.page += 1;
        let data = [];
        this.http.get(this.ports.newsX.achievementsList+'?page='+this.page+'&&title='+this.title ,res =>{
          console.log(data)
          if(res.status == 200){
            data = res.data.data
            if(data.length){
              for(var i = 0;i < data.length;i++){
                this.list.push(data[i]);
              }
//              this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');//加载
              $state.loaded();
            }else{
//              this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');//停止加载
              $state.complete();
            }
          }
        })
      },
    },
    mounted(){
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
