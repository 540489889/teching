<template>
  <div class="sayValue recommend-content">
    <div>
      <cube-textarea
        v-model="value"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled="disabled"
        :autofocus="autofocus"
        @input="changeVal"
      ></cube-textarea>
      <div class="sendDiv">
        <button class="sendOut">发送</button>
      </div>
    </div>

  </div>
</template>
<script>
  import './../../assets/style/cubeNews.css'
  export default {
    name: 'sayValue',
    data (){
      return{
        value: '',
        placeholder: '请输入内容',
        readonly: true,
        maxlength: 200,
        disabled: false,
        autofocus: true
      }
    },
    methods: {
      changeVal(){
        if(this.value!==''){
          $('.sendOut').css({
            'background-color':'#1ba255'
          })
        }else{
          $('.sendOut').css({
            'background-color':'#ccc'
          })
        }
      }
    },
    mounted (){

    }
  }
</script>
<style lang="less" scoped>
  .sayValue{
    padding:30px;
    box-sizing: border-box;
    background-color:white;
    .cube-textarea-wrapper{
      height:250px;
      background-color:#f5f5f5;
    }
    .cube-textarea{
      background-color:#f5f5f5;
    }
    .sendDiv{
      text-align: right;
      margin-top:20px;
      .sendOut{
        display: inline-block;
        height:60px;
        width:120px;
        border-radius: 30px;
        padding:0 15px;
        background-color:#ccc;
        border:none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color:white;
      }
    }
  }
</style>
