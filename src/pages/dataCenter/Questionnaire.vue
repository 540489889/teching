<template>
  <div class="questionnaire">
    <loading-bar v-show="isLoading"></loading-bar>
    <div class="banner">
      <img src="../../assets/img/data-link.png" alt>
    </div>
    <div class="quesion-title">
      <p>中学生作业调查问卷</p>
      <p>亲爱的同学们:你好，我们是重庆市市九龙坡区十三中二年五班的学生，首先感谢您在百忙之中来完成此问卷。</p>
    </div>
    <div class="subject">
      <form action>
        <div class="subject-item" v-for="(item,index) in subject.list" :key="index">
          <div class="subject-title">
            {{item.title}}
            <span>{{item.isradio?"（单选）":"（多选）"}}</span>
          </div>
          <div class="check-item" v-if="!item.isTextArea">
            <label v-for="(childVal,i) in item.options" :key="i">
              <input
                name="n1"
                :type="item.type"
                :value="childVal.id"
                v-model="item.checkValue"
                v-on:change="change()"
              >
              <span>{{childVal.value}}</span>
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
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit">提交</button>
      </form>
    </div>
    <div class="model" ref="model" v-if="isModelShow">
      <div class="content">
        <div class="main">
          <div class="title">调查调研填报信息登录</div>
          <form action>
            <div class="input" v-for="(item,index) in loginData" :key="index">
              <span>{{item.name}} ：</span>
              <input type="text" :placeholder="item.placeholder">
            </div>
          </form>
        </div>
        <button class="yes" @click="submitLogin">确定</button>
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
            padding: 0;
            resize: none;
            outline: none;
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
}
</style>

<script>
import loadingBar from "../components/loading.vue";
export default {
  name: "questionnaire",
  components: {
    loadingBar
  },
  data() {
    return {
      isLoading: false,
      isModelShow: true,
      loginData: [
        {
          name: "学校",
          placeholder: "请输入您所在学校名称"
        },
        {
          name: "班级",
          placeholder: "请输入您所在班级"
        },
        {
          name: "姓名",
          placeholder: "请输入您的姓名"
        },
        {
          name: "密码",
          placeholder: "请输入填报密码"
        }
      ],
      subject: {
        bannerimg: "",
        theme: "",
        list: [
          {
            title: "Q1：你所在的年级?",
            type: "radio",
            checkValue: [],
            isTextArea: false,
            options: [
              {
                id: "1",
                value: "初一"
              },
              {
                id: "2",
                value: "初二"
              },
              {
                id: "3",
                value: "初三"
              }
            ]
          },
          {
            title: "Q4：觉得写作业时困难重重的科目是？",
            type: "checkbox",
            checkValue: [],
            value: "",
            options: [
              {
                id: "1",
                value: "初一",
                ischecked: true
              },
              {
                id: "2",
                value: "初二",
                ischecked: true
              },
              {
                id: "3",
                value: "初三",
                ischecked: true
              }
            ],
            isTextArea: false
          },
          {
            title: "Q6：您对各科老师布置的作业有什么意见或建议？",
            type: "textarea",
            checkValue: [],
            isTextArea: true
          }
        ]
      }
    };
  },
  methods: {
    change() {
      // console.log(this.subject[0].checkValue);
    },
    submitLogin() {
      this.isModelShow = false;
    },
    handleInputTextarea() {
      console.log(this.subject.list[2].checkValue);
    }
  },
  mounted() {
    console.log(this.$route.query.id);
  }
};
</script>

