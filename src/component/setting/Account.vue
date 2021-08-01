<template>
<div class="layout-profile">
    <transition name="show" appear>
        <div class="wrapper-profile-user" style="padding-bottom: 3rem; background-color: #f8f8f8">
            <div class="header-edit">
                <span>Settings</span>
                <router-link to="/home/setting" class="close-edit">Done</router-link>
            </div>
            <div class="body-about-edit" style="margin-top: 5rem">
                <div class="title-body-edit">
                    Email
                </div>
                <input v-model="email" type="text" class="input-body-edit" placeholder="Add email">
            </div>
            <div class="body-about-edit">
                <div class="title-body-edit">
                    Phone
                </div>
                <input disabled="true" :value="phone" type="text" class="input-body-edit" placeholder="Add phone">
            </div>
            <div class="body-about-edit">
                <div class="title-body-edit">
                    Password
                </div>
                <input v-model="password" type="password" class="input-body-edit" placeholder="">
            </div>

            <div class="body-about-edit">
                <div class="logout-account" v-if="session" @click="onLogOut">
                    Logout
                </div>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue'
import useDebouncedRef from './useDebouncedRef'
import UserAPI from '../../api/UserAPI'
export default {
    name: 'Account',
    data: () => {
        return {
            session: null
        }
    },
    created(){
        if (sessionStorage.getItem('idUser')){
            this.session = true
        }else{
            this.session = false
        }
    },
    methods: {
        onLogOut() {
            sessionStorage.clear('idUser')
            sessionStorage.clear('fbssls_1188277554976347')
            localStorage.clear('fblst_1188277554976347')
            this.$router.push('/')
        }
    },
    setup() {
        
        const email = useDebouncedRef('', 2000)
        const phone = ref('')
        const password = useDebouncedRef('', 2000)

        watchEffect(async () => {

            const profile = await UserAPI.detail(sessionStorage.getItem('idUser'))

            email.value = profile.email
            phone.value = profile.phone
            password.value = profile.password
        })

        watch(email, async (newEmail) => {

            const body = {
                _id: sessionStorage.getItem('idUser'),
                email: newEmail
            }

            const user = await UserAPI.email(body)

            console.log(user)

        })

        return {
            email,
            phone,
            password
        }

    }
}
</script>

<style>
.logout-account {
    color: gray;
    text-align: center;
    background-color: #fff;
    padding: .6rem 1rem;
    font-family: 'Raleway', sans-serif;
    cursor: pointer;
}
</style>
