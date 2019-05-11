<template>
  <div class="data-center">
    <loading-bar v-show="isLoading"></loading-bar>
    <search-bar :placeholder="placeholder" @changeValue="changeValue"></search-bar>
    <div class="line"></div>
    <div class="data-head flex-box">
      <img src="../../assets/img/data-head.png" alt>
      <span>教育数据</span>
      <span>可视化界面、教学数据、装备数据</span>
    </div>
    <div class="main">
      <div class="title">调查调研</div>
      <div class="item">
        <div class="item-title">
          <p>中学生消费情况调查报告</p>
          <div class="status" :class="isrunning ? 'active' : ''">
            <i></i>
            进行中
          </div>
        </div>
        <div class="msg">
          <span class="time">2019.04.10 22:36</span>
          <span class="play-count">
            <i class="cubeic-person"></i>
            23456
          </span>
        </div>
        <div class="link" @click="gotoQuestion">
          <img src="../../assets/img/data-link.png" alt>
        </div>
        <div class="item-line"></div>
      </div>
    </div>
  </div>
</template>


<script>
import searchBar from "../components/searchBar.vue";
import loadingBar from "../components/loading.vue";
export default {
  name: "dataCenter",
  data() {
    return {
      isLoading: false,
      placeholder: "调查调研",
      searchValue: "",
      isrunning: true
    };
  },
  components: {
    searchBar,
    loadingBar
  },
  methods: {
    changeValue(val) {
      this.searchValue = val;
    },
    handleIsLogin() {},
    // 跳转问卷详情页面
    gotoQuestion() {
      this.$router.push({
        path: "/dataCenter/questionnaire",
        query: { id: "1" }
      });
    }
  }
};
</script>

<style scoped lang="less">
.flex-box {
  display: flex;
}
.data-center {
  background: #fff;
  .line {
    width: 749px;
    height: 1px;
    background-color: #e5e5e5;
    margin-top: 10px;
  }
  .data-head {
    margin: 30px 20px 40px;
    height: 98px;
    line-height: 98px;
    box-shadow: 0px 2px 18px 0px rgba(213, 213, 213, 0.71);
    border-radius: 5px;
    img {
      width: 85px;
      margin: 0 26px;
    }
    span:nth-child(2) {
      font-size: 34px;
      color: #333;
      margin-right: 8px;
    }
    span:nth-child(3) {
      font-size: 24px;
      color: #bbb;
    }
  }
  .main {
    text-align: left;
    color: #333;
    margin: 0 20px;
    .title {
      font-size: 38px;
      margin-bottom: 33px;
    }
    .item {
      .item-title {
        p {
          font-size: 30px;
          display: inline-block;
        }
        .status {
          width: 98px;
          height: 38px;
          line-height: 38px;
          background-color: #bbbbbb;
          border-radius: 5px;
          color: #fff;
          text-align: center;
          display: inline-block;
          vertical-align: middle;
          font-size: 20px;
        }
        .active {
          background: #e60012;
        }
        i {
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 50%;
          color: transparent;
          display: inline-block;
          margin-right: 5px;
        }
      }
      .msg {
        line-height: 57px;
        color: #afafaf;
        font-size: 22px;
      }
      .link {
        margin: 20px 0 30px;
        img {
          width: 100%;
        }
      }
      .item-line {
        width: 100%;
        height: 1px;
        background-color: #e5e5e5;
      }
    }
  }
}
</style>