<template>
  <div class="roomIndex recommend-content">
    <loading-bar v-show="isLoading"></loading-bar>
    <div class="banner">
      <bannerSwiper :list="bannerList"></bannerSwiper>
      <div class="search">
        <i class="cubeic-search"></i>
        <input type="text" v-model="searchVal" placeholder="直播课堂">
      </div>
    </div>
    <!--直播预告-->
    <div class="newsVideo">
      <h3 class="text-left">直播预告</h3>
      <ul>
        <li>
          <div class="thisVideo flex-box">
            <div class="leftImg">
              <img :src="latestLive.picture" alt>
            </div>
            <div class="textCenter box-1">
              <h4 class="media_title">{{latestLive.title}}</h4>
              <p class="flex-box">
                <span class="flex-box">
                  <i></i>
                  {{latestLive.begin_time}}
                </span>
                {{latestLive.teacher}}
              </p>
            </div>
            <div class="right-ico">
              <i class="v-ico-1"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!--直播课堂-->
    <div class="roomContent">
      <div class="infoList2">
        <h2 class="titleBox flex-box">
          <span class="left-ico flex-box">直播课堂</span>
        </h2>
        <ul>
          <li v-for="(item) in searchLive" :key="item.id">
            <a :href="item.hrefs">
              <div class="leftText flex-box">
                <div class="img">
                  <img class="rightImg" :src="item.picture" alt>
                </div>
                <div class="box-1">
                  <h4 class="flex-box">
                    <p class="box-1 media_desc">{{item.title}}</p>
                  </h4>
                  <h6 class="flex-box">
                    <span>
                      <i class="bf-ico-1"></i>
                    </span>
                    <span>
                      <i class="cubeic-person"></i>
                      {{item.click}}
                    </span>
                  </h6>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import searchBar from "../components/searchBar.vue";
import bannerSwiper from "../classroom/BannerSwiper.vue";
import loadingBar from "../components/loading.vue";
export default {
  name: "sayValue",
  data() {
    return {
      isLoading: true,
      bannerList: [],
      searchVal: "",
      live: [],
      willLive: [],
      latestLive: {},
      searchLive: []
    };
  },
  components: {
    searchBar,
    bannerSwiper,
    loadingBar
  },
  methods: {
    // 请求页面数据
    changeHandler() {
      this.http.get(this.ports.home.Classroom, res => {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
        if (res.status == 200) {
          let data = res.data;
          this.bannerList = data.banner;
          this.live = data.live;
          this.checkWillLive(this.live);
          this.newLive(this.willLive);
        }
      });
    },
    // 筛选预告
    checkWillLive(arr) {
      this.searchLive = this.live;
      for (var i = 0; i < arr.length; i++) {
        arr[i].picture = "http://cqeic.swkj2014.com" + arr[i].picture;
        if (arr[i].begin_time * 1000 > Date.now()) {
          this.willLive.push(arr[i]);
          arr.splice(i, 1);
        }
      }
      for (var j = 0; j < this.willLive.length; j++) {
        arr[j].picture = "http://cqeic.swkj2014.com" + arr[j].picture;
      }
    },
    // 找出最新预告并格式化时间
    newLive(arr) {
      arr.sort(this.compare("begin_time"));
      this.latestLive = arr[0];
      this.latestLive.begin_time = this.formatDate(
        this.latestLive.begin_time * 1000
      );
    },
    // 排序
    compare(property) {
      return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
      };
    },

    // 格式化时间
    formatDate(time) {
      var date = new Date(time);
      var year = date.getFullYear(),
        month = date.getMonth() + 1, //月份是从0开始的
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
      if (hour < 9) {
        hour = "0" + hour;
      }
      if (min < 9) {
        min = "0" + min;
      }
      var newTime = hour + ":" + min;
      return newTime;
    },
    // 搜索
    focus(val) {
      if (val) {
        this.searchLive = this.live.filter(function(v, index, arr) {
          return v.title.includes(val);
        });
      } else {
        this.searchLive = this.live;
      }
    }
  },
  watch: {
    searchVal: function(value) {
      this.focus(value);
    }
  },
  mounted() {
    this.changeHandler();
  }
};
</script>
<style lang="less" scoped>
input::-webkit-input-placeholder {
  color: #999;
  font-size: 28px;
}
a {
  display: block;
  width: 100%;
  height: 100%;
}
.roomIndex {
  background-color: #f5f5f5;
  font-size: 24px;
  margin-bottom: 100px;
  min-height: 100%;
  .banner {
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }
    .search {
      position: absolute;
      top: 12px;
      left: 20px;
      color: #999;
      z-index: 100000;
      i {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 30px;
        color: #999;
        font-size: 28px;
      }
      input {
        width: 635px;
        height: 63px;
        line-height: 63px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 31px;
        padding-left: 75px;
        font-size: 28px;
        border: none;
        outline: none;
        color: #999;
      }
    }
  }
  .newsVideo {
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
    padding-bottom: 30px;
    h3 {
      text-align: left;
      font-size: 34px;
      margin: 30px auto;
      margin-top: 10px;
    }
    .thisVideo {
      box-shadow: 0px 9px 24px 0px rgba(198, 198, 198, 0.45);
      background-color: white;
      box-sizing: border-box;
      overflow: hidden;
      border-radius: 15px;
      .leftImg {
        width: 128px;
        height: 128px;
        img {
          width: 100%;
        }
      }
      .textCenter {
        text-align: left;
        margin-left: 20px;
        /*margin-right:20px;*/
        padding-right: 40px;
        border-right: 1px solid #eee;
        h4 {
          line-height: 1.6;
          font-size: 30px;
          margin-bottom: 10px;
          color: black;
        }
        p {
          color: #999999;
          font-size: 28px;
          span {
            padding: 5px 10px;
            color: white;
            background-color: #e60012;
            font-size: 18px;
            border-radius: 5px;
            margin-right: 20px;
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
        }
      }
      .right-ico {
        margin-right: 40px;
        margin-left: 40px;
        .v-ico-1 {
          display: inline-block;
          width: 30px;
          height: 48px;
          background: url(./../../assets/ico/video-ico-1.png) no-repeat center;
          background-size: 100%;
        }
      }
    }
  }
  .roomNav {
    border-bottom: 1px solid #eee;
  }
  .infoList2 {
    background-color: white;
    padding: 10px 0;
    padding-bottom: 0;
    .titleBox {
      .left-ico i {
        width: 32px;
        height: 32px;
        background: url(./../../assets/ico/info-t-2.png) no-repeat center;
        background-size: 100%;
      }
    }
    ul {
      .noList {
        padding: 10px;
        color: #999;
      }
      li:last-child {
        border: none;
      }
      li {
        background-color: white;
        /*margin-top:20px;*/
        padding: 20px;
        border-bottom: 1px solid #eee;
        // align-items: flex-start;
        .leftText {
          align-items: flex-start;
          text-align: left;
          .img {
            width: 190px;
            height: 130px;
            margin-right: 20px;
            border-radius: 10px;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          h4 {
            margin-bottom: 10px;
            span {
              padding: 10px;
              border-radius: 5px;
              font-size: 20px;
              margin-left: 20px;
            }
            .style1 {
              border: 1px solid #009946;
              color: #009946;
            }
            .style2 {
              border: 1px solid #f69704;
              color: #f69704;
            }
          }
          .media_title {
            font-size: 30px;
          }
          .media_desc {
            /*color:#909090;*/
            font-size: 28px;
          }
          h6 {
            color: #909090;
            font-size: 22px;
            margin-top: 15px;
            justify-content: space-between;
            .bf-ico-1 {
              display: inline-block;
              width: 27px;
              height: 20px;
              background: url(./../../assets/ico/bf-ico-1.png) no-repeat center;
              background-size: 100%;
            }
          }
        }
      }
      li:last-child {
        border: none;
      }
    }
  }
}
</style>
