<template>
  <div class="indexSwiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide  v-for="(item,index) in list" :key="item.id" v-if="showSwiper" >
        <a :href="item.href">
          <img class="swiper-img"  @click="handleClickHref(item.herf)" :src="$store.state.IMGPATH+item.img_url" alt="">
        </a>
      </swiper-slide>
      <!--<swiper-slide  >-->
        <!--<img class="swiper-img" src="./../../assets/img/index-b-1.png" alt="">-->
      <!--</swiper-slide>-->
      <!--<swiper-slide  >-->
        <!--<img class="swiper-img" src="./../../assets/img/index-b-1.png" alt="">-->
      <!--</swiper-slide>-->
      <div class="swiper-pagination swiper-pagination-white"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  export default {
    name: 'indexSwiper',
    data() {
      return {
        swiperOption: {
//          loop: true,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true,//修改swiper的父元素时，自动初始化swiper
//          paginationClickable: true,
          autoHeight: true,
          effect : 'coverflow',
          slidesPerView: 1,
          centeredSlides: true,
          preventClicks : false,
          coverflowEffect: {
            rotate: 25,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : false
          },
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            autoplay : {
              disableOnInteraction: false,
              delay:3000
            },
          },
        },
      }
    },
    props:{
      list: Array
    },
    methods:{
      handleClickHref(href){
        location.href = href
      },
    },
    computed: {
      showSwiper () {
        return this.list.length
      },
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      console.log(this.list)
  }
  }
</script>
<style lang="less" scoped>
  .indexSwiper{
    background-color:white;
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
      bottom:50px;
    }
    .swiper-pagination-bullet{
      width:12px;
      height:6px;
      border-radius: 0;
    }
    .swiper-pagination-bullet-active{
      background-color:white;
    }
    .swiper-slide{
      width:100%;
      a{
        display: block;
      }
    }
    .swiper-slide img{
      width:655px;
      height:422px;
      border-radius: 10px;
    }
  }

</style>
