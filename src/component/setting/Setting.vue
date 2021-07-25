<template>
<div class="layout-profile">
    <div class="wrapper-profile-user">
        <div class="setting-laptop">
            <div class="profile-header">
                <div class="img-profile-header">
                    <div v-for="item in image" :key="item.id">
                        <img v-bind:class="(showImage === item.id) ? 'active-image-matches' : 'unactive-image-matches'" :src="item.src" alt="">
                    </div>
                </div>
                <div class="count-image-line" v-bind:style="{ gridTemplateColumns: gridTemplateColumns }">
                    <div v-for="item in image" :key="item.id" v-bind:class="(showImage === item.id) ? 'active-image-line' : 'unactive-image-line'">
                    </div>
                </div>
                <a class="view-image arrow-next" v-if="showImage < image.length" @click="nextImage">
                    <i class="fa fa-chevron-right" style="font-size: 26px; color: #fff"></i></a>
                <a class="view-image arrow-prev" v-if="showImage !== 1" @click="prevImage">
                    <i class="fa fa-chevron-left" style="font-size: 26px; color: #fff"></i></a>
            </div>
            <div class="profile-body">
                <div class="title-profile-body">
                    <h3>Tiền Kim <span>18</span></h3>
                </div>
                <div class="detail-profile-body d-flex">
                    <i class="fa fa-home" style="font-size:24px"></i>
                    <span style="margin-left: .7rem; margin-top: .1rem">Lives In TP. Quy Nhơn</span>
                </div>
                <div class="detail-profile-body d-flex">
                    <i class="fa fa-user" style="font-size:24px; margin-left: .1rem"></i>
                    <span style="margin-left: .9rem; margin-top: .1rem">Men</span>
                </div>
            </div>
            <div class="profile-bio">
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, provident recusandae. Quos expedita id, cumque aliquam ducimus ea culpa praesentium odit, magni, at fugiat vitae quod saepe et? Natus, error!</span>
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
import avt2 from "../../assets/avt2.jpg"
import avt3 from "../../assets/avt3.jpg"
import SettingMobile from './SettingMobile.vue'

export default {
    name: 'Setting',
    components: {
        SettingMobile
    },
    data: () => {
        return {
            image: [{
                    id: 1,
                    src: avt2
                },
                {
                    id: 2,
                    src: avt3
                },
            ],
            showImage: 1,
            gridTemplateColumns: ''
        }
    },
    created() {
        this.gridTemplateColumns = `repeat(${this.image.length}, minmax(60px, 1fr))`
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
    color: #fff;
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
