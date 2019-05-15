<template>
  <div class="inside">
    <p v-for="it in list">
      <span>{{it.nickname}}：</span>
      {{it.content}}
      <list-item v-if="it.children.length" :list="it.children"></list-item>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'listItem',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        toastTxt: 'cube toast content'
      }
    },
    props: {
      list: Array,
      frist: Boolean
    },
    methods: {

    },
    mounted(){
      console.log(this.list)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .inside{
    padding:20px;
    margin-left:80px;
    background-color:#fafafa;
    margin-top:20px;
    .inside{
      margin-left:0;
      margin-top:10px;
      padding:0;
    }
    span{
      color:#029b46;
    }
    p{
      color:#929aa1;
      line-height:1.6;
      text-align: left;
      font-size:22px;
    }
  }
</style>
