<template>
  <v-facebook-login app-id="1188277554976347" v-model="model" @sdk-init="handleSdkInit"></v-facebook-login>
  <button v-if="scope.logout && model.connected" @click="scope.logout">
      Logout
  </button>
</template>

<script>
import VFacebookLogin from 'vue-facebook-login-component-next'

export default {
  name: 'App',
  components: {
    VFacebookLogin,
  },
  data: () => ({
      FB: {},
      model: {},
      scope: {},
    }),
  methods: {
    handleSdkInit({ FB, scope }) {
      this.FB = FB
      this.scope = scope

      console.log(this.model)
    },
  },
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
