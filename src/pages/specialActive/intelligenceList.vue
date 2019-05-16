<template>
  <div class="teIndex recommend-content">
    <loading v-if="isLoading"></loading>
    <search-bar  @changeSearch="changeInput"></search-bar>
    <!--<div class="teNav">-->
    <!--<cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler"/>-->
    <!--</div>-->
    <div class="teContent">
      <div class="infoList2">
        <ul>
          <router-link tag="li" :to="'/specialActive/intelligenceDetails?id='+item.id+'&tables='+item.tables" v-for="(item,index) in list" :key="index">
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
                  <span v-else><i class="cubeic-person"></i>0</span>
                </h6>
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
  </div>
</template>
<script>
  import "./../../assets/style/cubeNews.css"
  import searchBar from '../components/searchBar.vue'
  import loading from '../components/loading.vue'
  import InfiniteLoading from 'vue-infinite-loading';
  import  axios from 'axios'
  export default {
    name: 'teIndex',
    data (){
      return{
        isLoading: true,
        list: [],
        type: 0,
        page: 0,
        title: '',
      }
    },
    created (){
    },
    components: {
      searchBar,
      loading,
      InfiniteLoading
    },
    methods: {
      changeInput(val){
        this.page = 0
        this.title = val
        this.changeFilter()
      },
      onInfinite($state,type) {
        this.isLoading = false
        let _this = this;
        let pageSize = 8;
        this.page += 1;
        let data = [];
        this.http.get(this.ports.specialActive.prograList+'?page='+this.page+'&&title='+this.title ,res =>{
          if(res.status == 200){
            data = res.data.data
            if(data.length){
              for(var i = 0;i < data.length;i++){
                this.list.push(data[i]);
              }
//              this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');//加载
              $state.loaded();
            }else{
              $state.loaded();
//              this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');//停止加载
              $state.complete();
            }
          }
        })
      },
      changeFilter() {
        this.list = [];
        this.$nextTick(() => {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        });
      }
    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .teIndex{
    background-color:#f5f5f5;
    font-size:24px;
    margin-bottom:100px;
    min-height:100%;
    .teNav{
      background-color:white;
      padding-bottom:20px;
      border-bottom:1px solid #eee;
    }
    .teContent{
      border-top:1px solid #eee;
      .infoList2{
        background-color:white;
        padding:10px 0;
        padding-bottom:0;
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
          li:last-child{
            border:none;
          }
          li{
            background-color:white;
            /*margin-top:20px;*/
            padding:20px;
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
    }
  }
</style>
