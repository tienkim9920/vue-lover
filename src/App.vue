<template>
  <!-- <v-facebook-login app-id="1188277554976347" @login="loginFacebook"></v-facebook-login> -->

  
  <Intro />

</template>

<script>
// import VFacebookLogin from 'vue-facebook-login-component-next'

import Intro from './views/Intro.vue'

export default {
  name: 'App',
  components: {
    // VFacebookLogin,

    Intro
  },

  setup(){
    // const loginFacebook = () => {
    //   const user = JSON.parse(sessionStorage.getItem('fbssls_1188277554976347')).authResponse
    //   console.log(user)
    // }
    // return { loginFacebook }

  }

}
</script>

<style>
body{
  font-family: 'Quicksand', sans-serif;
}
</style>
