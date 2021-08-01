<template>
<div class="layout-profile">
    <div class="wrapper-profile-user" style="background-color: #fff !important">
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
    </div>
</div>
</template>

<script>
import UserAPI from '../../api/UserAPI'

export default {
    name: 'Profile',
    data: () => {
        return {
            profile: {},
            showImage: 0,
            gridTemplateColumns: '',
            length: ''
        }
    },
    async created() {
        
        const user = await UserAPI.detail(this.$route.params.id)

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
.layout-profile{
    display: flex;
    justify-content: center;
}

.profile-bio {
    padding: 1.3rem 1.3rem 2.2rem 1.3rem;
    font-family: 'Raleway', sans-serif;
    color: gray
}

.profile-body {
    border-bottom: 1px solid #e4e4e4;
    padding: 1rem 0;
}

.detail-profile-body {
    padding: .3rem 1rem 0 1rem;
    color: rgb(105, 105, 105);
    font-family: 'Raleway', sans-serif;
}

.title-profile-body span {
    font-family: Arial, Helvetica, sans-serif;
}

.title-profile-body h3 {
    margin-top: 2.5rem;
    padding: 0rem 1rem 0 1rem;
}

.wrapper-profile-user {
    position: relative;
    width: 385px;
    height: 721px;
    overflow-y: scroll;
    border: 1px solid #e4e4e4;
    /* box-shadow: 0 0 0.25em 0.25em rgba(136, 136, 136, 0.25); */
}

.profile-header {
    position: relative;
    width: 100%;
    height: 490px;
}

.img-profile-header img {
    width: 100%;
    height: 520px;
}

@media only screen and (max-width: 600px){
    .arrow-next{
        top: 50% !important;
    }

    .arrow-prev{
        top: 50% !important;
    }

    .profile-header {
        height: 540px !important;
    }

    .profile-bio {
        padding: 1.3rem 2rem 2.2rem 2rem !important;
    }

    .profile-body {
        border-bottom: 1px solid #e4e4e4;
        padding: 1rem 1rem !important;
    }
}
</style>
