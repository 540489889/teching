<template>
  <div class="cube-page" :class="type">
    <header class="header">
      <h1>{{title}}</h1>
      <i @click="back" class="cubeic-back"></i>
    </header>
    <div class="wrapper">
      <section v-show="desc" class="desc"><slot name="desc">{{desc}}</slot></section>
      <main class="content">
        <slot name="content">{{content}}</slot>
      </main>
    </div>
  </div>
</template>
<style lang="stylus">
  .tab-composite-view .tab-slide-container
    position:static
  .cube-page
    position: absolute
    z-index: 10
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #efeff4
    .header
      position: relative
      height: 44px
      line-height: 44px
      text-align: center
      background-color: #edf0f4
      box-shadow: 0 1px 6px #ccc
      -webkit-backface-visibility: hidden
      backface-visibility: hidden
      z-index: 5
      display :none
    h1
      font-size: 16px
      font-weight: 700
    .cubeic-back
      position: absolute
      top: 0
      left: 0
      padding: 0 15px
      color: #fc9153
  >.wrapper
    height: calc(100% - 44px)
    overflow-x: hidden
    overflow-y: auto
  // -webkit-overflow-scrolling: touch
    .desc
      padding: 10px
      margin: 10px 0
      line-height: 20px
      font-size: 14px
    .content
      margin: 10px
</style>
<script type="text/ecmascript-6">
//  import './../../assets/stylus/cubePage.styl'
  export default {
    props: {
      title: {
        type: String,
        default: '',
        required: true
      },
      type: {
        type: String,
        default: ''
      },
      desc: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      }
    },
    methods: {
      back() {
        this.$router.back()
      }
    }
  }
</script>
