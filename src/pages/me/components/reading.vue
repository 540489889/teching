<template>
  <div class="reading">
    <div class="scroll-list-wrap">
      <cube-scroll
        ref="scroll"
        :data="ebook"
        direction="horizontal"
        :options="options">
        <ul class="list-wrapper">
          <li v-for="item in ebook" class="list-item">
            <div class="imgBox"><img :src="$store.state.IMGPATH+item.cover_img" alt=""></div>
            <h3 class="media_desc">{{item.title}}</h3>
            <p class="media_title">{{item.author}}</p>
          </li>
        </ul>
      </cube-scroll>
    </div>
    <div class="noReading" v-if="!ebook.length">
      <img src="./../../../assets/ico/null-rd-ico.png" alt="">
      <h6>这里还空空如也～</h6>
      <div class="goReading">去阅读</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'sayValue',
    data (){
      return{
        items: [1, 2, 3, 4, 5, 6],
        direction: "horizontal",
        options: {
//          scrollbar: {
//            fade: false
//          }
        },
        scrollX: true,
        scrollY: false
      }
    },
    props: {
      ebook: Array
    },
    methods: {

    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .noReading{
    padding:50px;
    background-color:white;
    text-align: center;
    img{
      width:272px;
      height:272px;
    }
    h6{
      margin:20px 0;
    }
    .goReading{
      width:200px;
      height:80px;
      line-height:80px;
      color:white;
      border-radius: 40px;
      background-color:#029b46;
      margin:0 auto;
    }
  }
  .meWrapper .scroll-list-wrap .list-wrapper li .imgBox img{
    height:300px;
  }
  .reading{
    margin-bottom:100px;
  }
</style>
