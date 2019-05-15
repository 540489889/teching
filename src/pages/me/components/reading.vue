<template>
  <div class="reading">
    <div class="scroll-list-wrap">
      <cube-scroll
        ref="scroll"
        :data="items"
        direction="horizontal"
        :options="options">
        <ul class="list-wrapper">
          <li v-for="item in items" class="list-item">
            <div class="imgBox"><img src="./../../../assets/img/banner-me-1.png" alt=""></div>
            <h3 class="media_desc">同理心：做个让人舒服的做个让人舒服的做个让人舒服的</h3>
            <p class="media_title">霍华德·本内特霍华德·本内特</p>
          </li>
        </ul>
      </cube-scroll>
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
    methods: {

    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .reading{
    margin-bottom:100px;
  }
</style>
