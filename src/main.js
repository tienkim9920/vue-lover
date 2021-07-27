import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router/index'

createApp({
    // setup () {
    //     provide(DefaultApolloClient, apolloClient)
    // },
    render(){
        return h(App)
    }
}).use(router).mount('#app')
