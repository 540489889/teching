<template>
  <div class="questionnaire">
    <loading-bar v-show="isLoading"></loading-bar>
    <div class="banner">
      <img :src="subject.cover_img" alt>
    </div>
    <div class="quesion-title">
      <p>{{subject.title}}</p>
      <p>{{subject.subtitle}}</p>
    </div>
    <div class="subject">
      <form action>
        <div class="subject-item" v-for="item in subject.content" :key="item.id">
          <div class="subject-title">{{item.title}}</div>
          <div class="check-item" v-if="!item.isTextArea">
            <label v-for="(childVal,i) in item.answer" :key="i">
              <input
                name="n1"
                type="checkbox"
                :value="childVal"
                v-model="item.checkValue"
                v-on:change="change(item.checkValue)"
              >
              <span>{{childVal}}</span>
            </label>
          </div>
          <div class="check-item" v-else>
            <div>
              <textarea
                name
                id
                cols="50"
                rows="10"
                v-model="item.checkValue"
                @input="handleInputTextarea"
                placeholder="请输入内容"
              ></textarea>
            </div>
          </div>
        </div>
        <button type="button" @click="subAnswer()">提交</button>
      </form>
    </div>
    <div class="model" ref="model" v-if="isModelShow">
      <div class="content">
        <div class="main">
          <div class="title">调查调研填报信息登录</div>
          <form action>
            <div class="input" v-for="(item,index) in loginData" :key="index">
              <span>{{item.name}} ：</span>
              <input type="text" v-model="item.data" :placeholder="item.placeholder" required>
            </div>
          </form>
        </div>
        <button type="button" class="yes" @click="submitLogin">确定</button>
      </div>
    </div>
    <div class="pop-box" v-if="isSuccess">
      <div class="content">
        <div class="result">
          <div class="img">
            <img src="../../assets/ico/check.png" alt>
          </div>
          <div>提交成功</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.questionnaire {
  background: #fff;
  overflow: hidden;
  .banner {
    img {
      width: 100%;
    }
  }
  .quesion-title {
    p:nth-child(1) {
      font-size: 38px;
      color: #000;
      margin: 30px 0 18px;
    }
    p:nth-child(2) {
      line-height: 50px;
      font-size: 26px;
      color: #767376;
      margin: 0 35px;
      text-align: left;
    }
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 50px;
  }
  .subject {
    .subject-item {
      .subject-title {
        text-align: left;
        width: 750px;
        line-height: 98px;
        background-color: #f7f5f6;
        font-size: 32px;
        color: #000;
        font-weight: bold;
        padding: 0 20px;
        span {
          font-size: 26px;
          color: #bbb;
        }
      }
      .check-item {
        label {
          display: block;
          margin: 0 20px;
          text-align: left;
          line-height: 88px;
          border-bottom: 1px dashed #e5e5e5;
          padding-left: 10px;
          input[type="radio"]:after {
            display: block;
            content: "";
            border-radius: 50%;
            width: 38px;
            height: 38px;
            border: solid 1px #bbbbbb;
            background: #fff;
            position: relative;
            left: -10px;
            top: -5px;
          }
          input[type="checkbox"]:after {
            display: block;
            content: "";
            width: 38px;
            height: 38px;
            border-radius: 5px;
            border: solid 1px #bbbbbb;
            background: #fff;
            position: relative;
            left: -10px;
            top: -5px;
          }
          input:checked:after {
            background: url(../../assets/ico/check.png) no-repeat;
            background-color: #f74742;
            background-size: 70%;
            border: none;
            background-position: center;
          }
          span {
            margin-left: 14px;
          }
        }
        label:nth-last-child(1) {
          border-bottom: none;
        }
        div {
          margin: 20px 20px 0;
          textarea {
            width: 100%;
            overflow: auto;
            word-break: break-all;
            padding: 20px;
            resize: none;
            outline: none;
            box-sizing: border-box;
            textarea::-webkit-input-placeholder {
              color: #bbb;
            }
          }
        }
      }
    }
    button {
      width: 624px;
      line-height: 98px;
      background-color: #1ba255;
      border-radius: 49px;
      color: #fff;
      font-size: 36px;
      border: none;
      outline: none;
      margin: 40px 0 94px;
    }
  }
  .model {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .main {
        background: url(../../assets/img/subject-pop-bg.png) no-repeat;
        background-size: contain;
        width: 690px;
        height: 810px;
        overflow: hidden;
        .title {
          margin-top: 190px;
          font-size: 42px;
          color: #333;
        }
        form {
          margin-top: 17px;
          .input {
            line-height: 98px;
            background-color: #f2f2f5;
            border-radius: 5px;
            margin: 30px 30px 0;
            position: relative;
            span {
              position: absolute;
              top: 50%;
              transform: translate(0, -50%);
              left: 20px;
              font-size: 32px;
              color: #333;
            }
            input {
              background: #f2f2f5;
              border: none;
              outline: none;
              line-height: 100%;
            }
            input::-webkit-input-placeholder {
              color: #bbb;
              font-size: 32px;
            }
          }
        }
      }
      .yes {
        width: 300px;
        height: 98px;
        line-height: 98px;
        background-color: #1ba255;
        border-radius: 49px;
        color: #fff;
        font-size: 36px;
        margin-top: 30px;
        outline: none;
        border: none;
      }
    }
  }
  .pop-box {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    .content {
      width: 512px;
      height: 322px;
      background-color: #ffffff;
      border-radius: 18px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .result {
        text-align: center;
        .img {
          width: 85px;
          height: 85px;
          margin: 54px auto 0;
          padding: 20px;
          background: green;
          border-radius: 50%;
          img {
            width: 100%;
          }
        }
        div {
          margin-top: 57px;
          font-size: 34px;
          color: #333;
        }
      }
    }
  }
}
</style>

<script>
import loadingBar from "../components/loading.vue";
import { setTimeout, clearTimeout } from "timers";
export default {
  name: "questionnaire",
  components: {
    loadingBar
  },
  data() {
    return {
      isLoading: false,
      isModelShow: true,
      isSuccess: false,
      answer: [],
      loginData: [
        {
          name: "学校",
          placeholder: "请输入您所在学校名称",
          data: ""
        },
        {
          name: "班级",
          placeholder: "请输入您所在班级",
          data: ""
        },
        {
          name: "姓名",
          placeholder: "请输入您的姓名",
          data: ""
        },
        {
          name: "密码",
          placeholder: "请输入填报密码",
          data: ""
        }
      ],
      subject: {}
    };
  },
  methods: {
    change(data) {
      // console.log(data);
    },
    handleInputTextarea() {
      // console.log(this.subject.content[2].checkValue);
    },
    showToastTxtOnly(text) {
      this.toast = this.$createToast({
        txt: text,
        type: "txt"
      });
      this.toast.show();
    },
    // 获取试卷题目
    getQuestions() {
      this.http.post(
        this.ports.dataCenter.detail,
        { id: this.$route.query.id },
        res => {
          if (res.status === 200) {
            this.subject = res.data;
            this.handelQuestions();
          }
        }
      );
    },
    // 处理问卷数据
    handelQuestions() {
      var newArr = [];
      this.subject.cover_img =
        "http://cqeic.swkj2014.com" + this.subject.cover_img;
      for (var i = 0; i < this.subject.content.length; i++) {
        if (!this.subject.content[i].answer) {
          this.subject.content[i].isTextArea = true;
        } else {
          this.subject.content[i].isTextArea = false;
        }
        this.subject.content[i].checkValue = [];
      }
    },
    // 提交登录数据
    submitLogin() {
      let params = {};
      params.school = this.loginData[0].data;
      params.team = this.loginData[1].data;
      params.username = this.loginData[2].data;
      params.password = this.loginData[3].data;
      for (var i = 0; i < this.loginData.length; i++) {
        if (this.loginData[i].data === "") {
          this.showToastTxtOnly("请填写完整信息");
          return false;
        }
      }
      this.http.post(this.ports.dataCenter.islogin, params, res => {
        if (res.status == 500) {
          this.showToastTxtOnly(res.message);
        } else {
          this.isModelShow = false;
        }
      });
    },
    // 提交答案
    subAnswer() {
      let params = {};
      params.id = this.$route.query.id;
      params.answer = "";
      for (var i = 0; i < this.subject.content.length; i++) {
        if (this.subject.content[i].isTextArea === true) {
          let newCheckValue = this.subject.content[i].checkValue.split('"');
          this.subject.content[i].checkValue = newCheckValue;
        }
        this.answer.push(this.subject.content[i].checkValue);
        if (this.subject.content[i].checkValue.length == 0) {
          this.showToastTxtOnly("您的问卷还没有做完");
          return false;
        }
      }
      params.answer = JSON.stringify(this.answer);
      this.http.post(this.ports.dataCenter.answer, params, res => {
        if (res.status == 500) {
          this.showToastTxtOnly(res.message);
        } else {
          let timer;
          this.isSuccess = true;
          let _this = this;
          timer = setTimeout(function() {
            _this.isSuccess = false;
            _this.$router.replace({ path: "/" });
            clearTimeout(timer);
          }, 3000);
        }
      });
    }
  },
  mounted() {
    this.getQuestions();
  }
};
</script>

