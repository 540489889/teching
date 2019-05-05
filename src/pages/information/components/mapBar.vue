<template>
  <baidu-map
    class="bm-view"
    :ak="ak"
    :center="center"
    :zoom="zoom"
    @ready="handler">
    <bm-marker v-for="marker in maps" :key="marker.id" :position="{lng:marker.longitude,lat:marker.latitude}"  @click="">
    </bm-marker>
      <!--<bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">-->
      <!--</bm-marker>-->
  </baidu-map>
</template>

<script>
  import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
  import bmMarker from 'vue-baidu-map/components/overlays/Marker.vue'
  export default {
    data (){
      return{
        ak: 'fn9zmg817PvROb4DGzObu7KG',
        center: {lng: 0, lat: 0},
        zoom: 3,
      }
    },
    props:{
      maps: Array
    },
    components: {
      BaiduMap,
      bmMarker
    },
    methods: {
      handler () {
//        console.log(BMap, map)
        if(this.maps.length){
          console.log(9527)
          this.center.lng = this.maps[0].longitude
          this.center.lat = this.maps[0].latitude
          this.zoom = 5
        }
      }
    },
    mounted(){
      let that = this;
//      setInterval(function () {
//        that.handler()
//      },1000)
    },
    watch: {
      // 监听数据的变化
      maps() {
        this.$nextTick(() => {
          this.handler()
        })
      }
    }
  }
</script>

<style>
  .bm-view {
    width: 100%;
    height: 400px;
  }
</style>
