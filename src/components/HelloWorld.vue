<template>
  <div class="hello">
    <cube-button @click="showToastTime">Toast - time 1s</cube-button>
    <cube-button @click="showToastTime0">Toast - time 0</cube-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      toastTxt: 'cube toast content'
    }
  },
  methods: {
    showToastTime() {
      const toast = this.$createToast({
        time: 1000,
        txt: 'Toast time 1s'
      })
      toast.show()
    },
    showToastTime0() {
      const toast = this.$createToast({
        time: 0,
        txt: 'Toast time 0'
      })
      toast.show()
      setTimeout(() => {
        toast.hide()
      }, 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
