<template>
  <div class="teIndex recommend-content">
    <search-bar  @changeSearch="changeInput"></search-bar>
    <div class="teNav">
      <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
    </div>
    <div class="videoList1 movesWrapper" v-show="current=='校园影视视频'">
      <ul>
        <li v-for="item in moves" :key="item.id">
          <div class="tpVideo flex-box">
            <div class="leftImg">
            </div>
            <div class="textInfo box-1">
              <h4 class="media_title">{{item.title}}</h4>
              <p>{{item.update}} <span>{{item.locknum}}观看</span></p>
            </div>
          </div>
          <div class="videoImg">
            <video :poster="$store.state.IMGPATH+item.cover_img">
              <source :src="$store.state.IMGPATH+item.video" type="video/mp4">
              您的浏览器不支持HTML5视频
            </video>
          </div>
        </li>
        <infinite-loading
          :on-infinite="onInfiniteTwo"
          spinner="spiral"
          ref="infiniteLoadings">
          <span slot="no-more" class="no-more">我也是有底线的</span>
        </infinite-loading>
      </ul>
    </div>
    <div class="teContent" v-show="current=='校园影视活动'">
      <div class="infoList2">

        <ul>
          <router-link tag="li" :to="'/specialActive/moviesDetails?id='+item.id+'&tables='+item.tables" v-for="(item,index) in list" :key="index">
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
  import InfiniteLoading from 'vue-infinite-loading';
  import './../../assets/style/zy.media.min.css'
  import './../../assets/js/zy.media.min.js'
  export default {
    name: 'teIndex',
    data (){
      return{
        current: '校园影视活动',
        isLoading: true,
        list: [],
        moves: [],
        type: 0,
        title: '',
        labels: [
          '校园影视活动',
          '校园影视视频',
        ],
        page: 0,
      }
    },
    created (){
    },
    components: {
      searchBar,
      InfiniteLoading
    },
    methods: {
      changeInput(val){
        this.page = 0
        this.title = val
        this.changeFilter()
      },
      changeHandler(cur) {
        this.current = cur
        this.page = 0
        switch (cur){
          case '校园影视活动':
            this.type = 0
                break
          case '校园影视视频':
            this.type = 1
            this.page = 0
            this.moves = []
            this.onInfiniteTwo()
            break
        }
        this.changeFilter()
      },
      onInfiniteTwo($state,type) {
        let _this = this;
        let pageSize = 8;
        this.page += 1;
        let data = [];
        this.http.get(this.ports.specialActive.movesList+'?page='+this.page+'&&title='+this.title ,res =>{
          if(res.status == 200){
            data = res.data.data
            console.log(data)
            if(data.length){
              for(var i = 0;i < data.length;i++){
                this.moves.push(data[i]);
              }
//              this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');//加载
              $state.loaded();
            }else{
              $state.loaded();
//              this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');//停止加载
              $state.complete();
            }
            this.moveInit()
          }
        })
      },
      onInfinite($state,type) {
        let _this = this;
        let pageSize = 8;
        this.page += 1;
        let data = [];
        this.http.get(this.ports.specialActive.schoolList+'?page='+this.page+'&&title='+this.title ,res =>{
          if(res.status == 200){
            data = res.data.data
            console.log(data)
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
      moveInit(){
        zymedia('video', {"preload": "auto"});
      },
      changeFilter() {
        this.list = [];
        this.moves = []
        this.$nextTick(() => {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
          this.$refs.infiniteLoadings.$emit('$InfiniteLoading:reset');
        });
      }
    },
    mounted (){

    },
    watch :{
      moves(){
        this.$nextTick(() => {
          this.moveInit()
        });
      }
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
    .videoList1{
      background-color:white;
      padding:10px 0;
      .titleBox{
        .left-ico i{
          width:32px;
          height:32px;
          background:url(../../assets/ico/video-ico-2.png) no-repeat center;
          background-size:100%;
        }
      }
      ul{
        padding:0 20px;
        .noList{
          padding:10px;
          color:#999;
          text-align: center;
        }
        li{
          padding-top:20px;
          padding-bottom:30px;
          border-bottom:1px solid #eee;
          .tpVideo{
            .leftImg{
              img{
                width:98px;
                height:98px;
                border-radius: 50%;
              }
            }
            .textInfo{
              text-align: left;
              h4{
                font-size:30px;
                line-height:1.6;
                margin-bottom:20px;
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
          .videoImg{
            width:710px;
            min-height:325px;
            position:relative;
            background-color:black;
            margin-top:20px;
            /*padding:20px 0;*/
            /*height:400px;*/
            /*overflow: hidden;*/
            .zy_title{
              font-size:30px;
            }
            img{
              width:100%;
            }
            /*video{*/
            /*width:100%;*/
            /*height:100%;*/
            /*}*/
          }
        }
        li:last-child{
          border:none;
        }
      }
    }
  }
</style>
