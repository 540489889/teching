<template>
  <div class="indexSwiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide  v-for="(item,index) in list" :key="item.id" v-if="showSwiper" >
        <a :href="item.href">
          <img class="swiper-img"  @click="handleClickHref(item.herf)" :src="$store.state.IMGPATH+item.img_url" alt="">
        </a>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
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
//          autoHeight: true,
//          effect : 'slide',
//          slidesPerView: 1,
          centeredSlides: true,
          preventClicks : false,
//          coverflowEffect: {
//            rotate: 25,
//            stretch: 10,
//            depth: 60,
//            modifier: 2,
//            slideShadows : false
//          },
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

    },
  }
</script>
<style lang="less" scoped>
  .indexSwiper{
    background-color:white;
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
      width:100%;
      height:345px;
      /*border-radius: 10px;*/
    }
  }

</style>
