<template>
  <div class="data-center recommend-content">
    <loading v-if="isLoading"></loading>
    <search-bar :placeholder="placeholder" @changeValue="changeValue"></search-bar>
    <div class="line"></div>
    <div class="data-head flex-box" @click="changeClick">
      <img src="./../../assets/img/data-head.png" alt>
      <span>教育数据</span>
      <span>可视化界面、教学数据、装备数据</span>
    </div>
    <div class="main">
      <div class="title">调查调研</div>
      <div class="item" v-for="val in item" :key="val.id">
        <div class="item-title">
          <p>{{val.title}}</p>
          <div class="status" :class="val.isrunning ? 'active' : ''">
            <i></i>
            {{val.isrunning?'进行中':'已结束'}}
          </div>
        </div>
        <div class="msg">
          <span class="time">{{val.update}}</span>
          <span class="play-count">
            <i class="cubeic-person"></i>
            {{val.annum}}
          </span>
        </div>
        <div class="link" @click="gotoQuestion(val.id,val.isrunning)">
          <img :src="val.cover_img" alt>
        </div>
        <div class="item-line"></div>
      </div>
    </div>
  </div>
</template>


<script>
import searchBar from "../components/searchBar.vue";
import loading from "../components/loading.vue";
export default {
  name: "dataCenter",
  data() {
    return {
      isLoading: true,
      placeholder: "调查调研",
      searchValue: "",
      item: [],
    };
  },
  components: {
    searchBar,
    loading
  },
  created (){
    setTimeout(() => {
      this.isLoading = false
    }, 500)
  },
  methods: {
    showToastTxtOnly(text) {
      this.toast = this.$createToast({
        txt: text,
        type: 'txt'
      })
      this.toast.show()
    },
    changeClick(){
      this.showToastTxtOnly('正在建设中...')
    },
    changeValue(val) {
      this.searchValue = val;
    },
    handleIsLogin() {},
    // 跳转问卷详情页面
    gotoQuestion(detailId, isrunning) {
      if (isrunning) {
        this.$router.push({
          path: "/dataCenter/Questionnaire",
          query: { id: detailId }
        });
      }
    },
    // 数据接口
    getIndexData() {
      this.http.get(this.ports.dataCenter.index, res => {
        if (res.status === 200) {
          this.item = res.data.data;
          this.isRunning();
        }
      });
    },
    // 筛选是否进行中
    isRunning() {
      // 排序，进行中的在前面
      this.item.sort(function(a, b) {
        return (
          new Date(b.start_time).getTime() - new Date(a.start_time).getTime()
        );
      });
      for (let i of this.item) {
        i.cover_img = "http://cqeic.swkj2014.com" + i.cover_img;
        let startTime = new Date(i.start_time).getTime();
        let endTime = new Date(i.end_time).getTime();
        if (startTime < Date.now() && Date.now() < endTime) {
          i.isrunning = true;
        } else {
          i.isrunning = false;
        }
      }
    }
  },
  mounted() {
    this.getIndexData();
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
      margin-bottom: 30px;
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
