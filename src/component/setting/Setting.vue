<template>
<div class="layout-profile">
    <div class="wrapper-profile-user" style="background-color: #fff !important">
        <div class="setting-laptop">
            <div class="profile-header">
                <div class="img-profile-header">
                    <div v-for="(item, index) in profile.image" :key="index">
                        <img v-bind:class="(showImage === index) ? 'active-image-matches' : 'unactive-image-matches'" :src="item.url" alt="">
                    </div>
                </div>
                <div class="count-image-line" v-bind:style="{ gridTemplateColumns: gridTemplateColumns }">
                    <div v-for="(item, index) in profile.image" :key="index" v-bind:class="(showImage === index) ? 'active-image-line' : 'unactive-image-line'">
                    </div>
                </div>
                <a class="view-image arrow-next" v-if="showImage < length" @click="nextImage">
                    <i class="fa fa-chevron-right" style="font-size: 26px; color: #fff"></i></a>
                <a class="view-image arrow-prev" v-if="showImage !== 0" @click="prevImage">
                    <i class="fa fa-chevron-left" style="font-size: 26px; color: #fff"></i></a>
            </div>
            <div class="profile-body">
                <div class="title-profile-body">
                    <h3>{{ profile.fullname }} <span>{{ profile.age }}</span></h3>
                </div>
                <div class="detail-profile-body d-flex">
                    <i class="fa fa-home" style="font-size:24px"></i>
                    <span style="margin-left: .7rem; margin-top: .1rem">{{ profile.address }}</span>
                </div>
                <div class="detail-profile-body d-flex">
                    <i class="fa fa-user" style="font-size:24px; margin-left: .1rem"></i>
                    <span style="margin-left: .9rem; margin-top: .1rem">{{ profile.gender }}</span>
                </div>
            </div>
            <div class="profile-bio">
                <span>{{ profile.bio }}</span>
            </div>
            <div class="btn-edit-setting">
                <router-link to="/home/setting/account">Settings</router-link>
                &nbsp;
                <router-link to="/home/setting/edit">Edit Info</router-link>
            </div>
        </div>

        <SettingMobile />
    </div>
</div>
</template>

<script>
import UserAPI from '../../api/UserAPI'
import SettingMobile from './SettingMobile.vue'

export default {
    name: 'Setting',
    components: {
        SettingMobile
    },
    data: () => {
        return {
            profile: {},
            showImage: 0,
            gridTemplateColumns: '',
            length: ''
        }
    },
    async created() {

        const user = await UserAPI.detail(sessionStorage.getItem('idUser'))
        this.profile = user
        this.length = user.image.length - 1

        this.gridTemplateColumns = `repeat(${user.image.length}, minmax(60px, 1fr))`
    },
    methods: {
        nextImage() {
            this.showImage = this.showImage + 1
        },

        prevImage() {
            this.showImage = this.showImage - 1
        },
    },
}
</script>

<style>
.btn-edit-setting {
    text-align: center;
    padding-bottom: 2rem;
}

.btn-edit-setting a {
    text-decoration: none;
    color: #fff !important;
    text-transform: uppercase;
    letter-spacing: .05rem;
    font-size: .9rem;
    padding: .6rem 1.8rem;
    background-color: #FD546C;
    border-radius: 2rem;
    cursor: pointer;
    box-shadow: 0 0 0.2em 0.2em rgba(170, 170, 170, 0.25);
}

.btn-edit-setting a:hover {
    background-color: #ff405c;
}
</style>
