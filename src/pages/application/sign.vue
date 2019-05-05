<template>
  <div class="signWrapper recommend-content">
    <div class="textTitle">
      <h2>2019中小学教学资源</h2>
      <h2>开发项目启动会</h2>
    </div>
    <div class="fillSign">
      <div  class="nameInput flex-box" >
        <i class="name-ico"></i>
        <cube-input class="box-1" v-model="name" placeholder="请输入姓名" :clearable="clearable"></cube-input>
      </div>
      <div class="bummenSelect flex-box">
        <i class="bumen-ico"></i>
        <cube-select
          class="box-1"
          v-model="value"
          :title="title"
          :options="options"
          :placeholder="placeholder"
          :auto-pop="autoPop"
          :disabled="disabled"
          @change="change">
        </cube-select>
      </div>
      <div class="signBtn">
        <button type="button">签到</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'Sign',
    data (){
      return{
        name: '',
        clearable: {
          visible: true,
          blurHidden: false
        },
        options: [1, 2, 3, 4, 5, 6],
        value: '',
        title: '请选择单位部门',
        placeholder: '单位部门',
        autoPop: false,
        disabled: false
      }
    },
    methods: {
      change(value, index, text) {
        console.log('change', value, index, text)
      }
    }
  }
</script>
<style lang="less" scoped>
  .signWrapper{
    width:750px;
    min-height:1206px;
    height:100vh;
    background:url(./../../assets/ico/signBg.png) no-repeat center;
    background-size:cover;
    overflow: hidden;
    .textTitle{
      margin-top:170px;
      h2{
        font-size:52px;
        font-weight: bold;
        color:white;
      }
      h2:first-child{
        margin-bottom:50px;
      }
    }
    .fillSign{
      margin-top:130px;
      text-align: center;
      .cube-input:after,.cube-select:after{
        border:none;
      }
      .nameInput{
        background-color:white;
        width:700px;
        height:140px;
        margin:0 auto;
        border-radius: 20px;
        font-size:32px;
        box-shadow:0 0 12px #aaa;
        border-bottom:1px solid #eee;
        .name-ico{
          width:45px;
          height:48px;
          background:url(./../../assets/ico/sign-ico-1.png) no-repeat center;
          background-size:100%;
          margin-left:25px;
        }
      }
      .bummenSelect{
        width:640px;
        height:135px;
        margin:0 auto;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background-color:white;
        text-align: left;
        .bumen-ico{
          width:47px;
          height:48px;
          background:url(./../../assets/ico/sign-ico-2.png) no-repeat center;
          background-size:100%;
          margin-left:25px;
        }
      }
      .signBtn{
        button{
          -webkit-appearance: none;
          appearance:none;
          border:none;
          display: block;
          width:640px;
          height:100px;
          background: -webkit-linear-gradient(left, #29c0e5 , #076ced); /* Safari 5.1 - 6.0 */
          background: -o-linear-gradient(right, #29c0e5 , #076ced); /* Opera 11.1 - 12.0 */
          background: -moz-linear-gradient(right, #29c0e5 , #076ced); /* Firefox 3.6 - 15 */
          background: linear-gradient(to right, #29c0e5 , #076ced); /* 标准的语法 */
          border-radius: 50px;
          font-size:32px;
          color:white;
          text-align: center;
          margin:0 auto;
          margin-top:100px;
        }
      }
    }
  }
</style>
