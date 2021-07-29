<template>
<div class="layout-profile">
    <transition name="show" appear>
        <div class="wrapper-profile-user" style="padding-bottom: 5rem; background-color: #f8f8f8">
            <div class="header-edit">
                <span>Settings</span>
                <router-link to="/home/setting" class="close-edit">Done</router-link>
            </div>
            <div class="body-about-edit" style="margin-top: 5rem">
                <div class="title-body-edit">
                    Email
                </div>
                <input type="text" class="input-body-edit" placeholder="Add email">
            </div>
            <div class="body-about-edit">
                <div class="title-body-edit">
                    Phone
                </div>
                <input type="text" class="input-body-edit" placeholder="Add phone">
            </div>
            <div class="body-about-edit">
                <div class="title-body-edit">
                    Password
                </div>
                <input type="text" class="input-body-edit" placeholder="">
            </div>

            <div class="body-about-edit">
                <div class="logout-account" v-if="!session" @click="onLogOut">
                    Logout
                </div>
                <div class="logout-account" v-if="session">
                     <v-facebook-login app-id="1188277554976347"></v-facebook-login>
                </div>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    name: 'Account',
    data: () => {
        return {
            session: null
        }
    },
    created(){
        if (!sessionStorage.getItem('fbssls_1188277554976347')){
            this.session = false
        }else{
            this.session = true
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
