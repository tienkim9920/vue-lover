<template>
  <v-facebook-login app-id="1188277554976347" @login="onClick"></v-facebook-login>
</template>

<script>
// import { reactive, watchEffect } from 'vue'
import VFacebookLogin from 'vue-facebook-login-component-next'

export default {
  name: 'App',
  components: {
    VFacebookLogin,
  },

  setup(){

    // const test = reactive({
    //   isCheck: false
    // })

    // watchEffect(() => {
    //   console.log(test.isCheck)
    // })

    const onClick = ({ response }) => {
      console.log(response)
    }

    return { onClick }

  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
