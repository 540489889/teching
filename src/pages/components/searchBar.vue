<template>
  <div class="searchWrapper flex-box">
    <div class="leftInput box-1 flex-box">
      <i class="cubeic-search"></i>
      <input type="text" v-model="searchVal" @input="changeSearch" placeholder="教育技术装备">
    </div>
    <router-link tag="div" to="/release/index" class="rightBtn flex-box" v-if="showSearchBtn">
      <div v-if="showSearchVal==='发布'">
        <i class="t-x-ico"></i>
        <span>{{showSearchVal}}</span>
      </div>
      <div v-else>
        <span>{{showSearchVal}}</span>
      </div>
    </router-link>
  </div>
</template>
<style scoped lang="less">
input::-webkit-input-placeholder {
  color: #999;
  font-size: 28px;
}
.searchWrapper {
  background-color: white;
  padding: 20px;
  position: relative;
  .cubeic-search {
    color: #999999;
    font-size: 18px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 25px;
  }
  input {
    display: block;
    width: 100%;
    text-align: left;
    height: 62px;
    line-height: 62px;
    background-color: #f2f2f5;
    border-radius: 31px;
    padding-left: 75px;
    padding-right: 15px;
    font-size: 28px;
    border: none;
    outline: none;
  }
  　 .rightBtn {
    width: 110px;
    height: 50px;
    color: white;
    text-align: center;
    background-color: #009946;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    .t-x-ico {
      width: 27px;
      height: 27px;
      background: url(./../../assets/ico/t-x-icon.png) no-repeat center;
      background-size: 100%;
      margin-right: 5px;
    }
    span {
      font-size: 26px;
      position: relative;
      top: 2px;
    }
  }
}
</style>
<script>
export default {
  name: "searchBar",
  data() {
    return {
      searchVal: ""
    };
  },
  methods: {
    changeSearch(){
//      console.log(this.searchVal,1111)
      this.$emit('changeSearch',this.searchVal)
    }
  },
  props: {
    showSearchBtn: {
      type: Boolean,
      default: false
    },
    showSearchVal: {
      type: String,
      default: ""
    }
  }
};
</script>
