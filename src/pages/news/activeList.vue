<template>
  <div class="fruitsWrapper recommend-content">
    <search-bar @changeSearch="changeInput"></search-bar>
    <div class="fruits-list-1">
      <ul>
        <router-link tag="li" :to="'/news/activeDetails?id='+item.id" v-for="item in list" :key="item.id">
          <div class="leftText flex-box">
            <img class="rightImg" :src="$store.state.IMGPATH+item.cover_img" alt="">
            <div class="box-1">
              <h4 class="flex-box">
                <p class="box-1 media_desc">{{item.title}}</p>
                <!--<span class="style1">教育装备</span>-->
              </h4>
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
  import InfiniteLoading from 'vue-infinite-loading'
  export default {
    name: 'listFruits',
    data (){
      return {
        items: [1],
        direction: "horizontal",
        options: {
//          scrollbar: {
//            fade: false
//          }
        },
        list: [],
        scrollX: true,
        scrollY: false,
        page: 0,
        title: ''
      }
    },
    components: {
      searchBar,
      InfiniteLoading
    },
    props: {
      noticeList: Array
    },
    methods: {
      changeInput(val){
        this.page = 0
        this.title = val
        this.changeFilter()
      },
      onInfinite($state,type) {
        console.log(type)
        this.isLoading = false
        let _this = this;
        let pageSize = 8;
        this.page += 1;
        let data = [];
        this.http.get(this.ports.newsX.dynamicsList+'?page='+this.page+'&&title='+this.title ,res =>{
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
    mounted(){
    }
  }
</script>
<style lang="less" scoped>
  .fruitsWrapper{
    font-size:24px;
    overflow: hidden;
    .fruits-list-1{
      background-color:white;
      border-top: 1px solid #eee;
      .titleBox{
        .left-ico i{
          width:40px;
          height:45px;
          background:url(../../assets/ico/suog-ico-1.png) no-repeat center;
          background-size:100%;
        }
      }
      ul{
        li{
          padding:20px;
          border-bottom:1px solid #eee;
          .leftText{
            text-align: left;
            .rightImg{
              width:190px;
              height:160px;
              margin-right:20px;
              border-radius: 5px;
            }
            h4{
              margin-bottom:10px;
              .media_desc{
                color:#010101;
                font-size:30px;
              }
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
          }
        }
        li:last-child{
          border:none;
        }
      }
    }
  }
</style>
