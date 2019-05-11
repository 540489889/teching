<template>
  <div class="videoList">
    <new-video :list="list" ></new-video>

    <div  v-for="item in list" :key="item.id">
      <div class="vdInfo">
        <div class="tpVideo flex-box">
          <div class="leftImg">
            <img :src="'http://cqeic.swkj2014.com/'+item.cover_img" alt="">
          </div>
          <div class="textInfo box-1">
            <h4 class="media_title">{{item.title}}</h4>
            <p>{{item.update}} <span>{{item.seenum}}观看</span></p>
          </div>
        </div>
      </div>
      <div class="vDetailBox">
        <h2 class="titleBox flex-box">
          <span class="left-ico flex-box"><i class="ds-ico"></i>简介</span>
          <!--<span class="flex-box right-text">更多 <i class="cubeic-arrow"></i></span>-->
        </h2>
        <div class="xxInfo" v-html="item.content">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import loadingBar from '../components/loading.vue'
  import newVideo from './components/video.vue'
  export default {
    name: 'ResourceVideoList',
    data(){
      return {
        isLoading: false,
        videoD: 1,
        list: []
      }
    },
    components: {
      loadingBar,
      newVideo
    },
    methods: {
      getMovieContent (){
        let id = this.$route.query.id
        this.http.get(this.ports.resource.movieContent+'?id='+id, res =>{
          setTimeout(() => {
            this.isLoading = false
          }, 0)
          if(res.status==200){
            const data = res.data
            this.list.push(data)
            console.log(this.list)
          }
        })
      },
    },
    mounted(){
      this.getMovieContent()
    }
  }
</script>
<style lang="less" scoped>
  .videoList{
    top:0;
    left:0;
    position:absolute;
    width:100%;
    min-height:100%;
    .vdInfo{
      background-color:white;
      padding:20px;
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
          margin-left:20px;
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
    }
    .vDetailBox{
      margin-top:20px;
      background-color:white;
      h2{
        justify-content: space-between;
        padding:20px;
        font-size:32px;
        .left-ico{
          i{
            width:28px;
            height:32px;
            background:url(../../assets/ico/video-ico-4.png) no-repeat center;
            background-size:100%;
            margin-right:10px;
          }
        }
        .right-text{
          color:#bbbbbb;
          font-size:24px;
        }
      }
      .xxInfo{
        padding:20px;
        text-align: left;
        font-size:28px;
        line-height:1.6;
      }
    }
  }
</style>
