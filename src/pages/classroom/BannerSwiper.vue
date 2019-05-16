<template>
  <div class="banner-swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide  v-for="(item,index) in list" :key="item.id" v-if="showSwiper" >
        <a :href="item.href">
          <img class="swiper-img"  @click="handleClickHref(item.herf)" :src="'http://cqeic.swkj2014.com/'+item.img_url" alt="">
        </a>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  export default {
    name: 'bannerSwiper',
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

    }
  }
</script>
<style lang="less" scoped>
  .banner-swiper{
  img{
    width:100%;
  }
  }

</style>
