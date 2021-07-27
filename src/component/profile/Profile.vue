<template>
<div class="layout-profile">
    <div class="wrapper-profile-user">
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
    </div>
</div>
</template>

<script>
import avt2 from "../../assets/avt2.jpg"
import avt3 from "../../assets/avt3.jpg"

export default {
    name: 'Profile',
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
.layout-profile{
    display: flex;
    justify-content: center;
}

.profile-bio {
    padding: 1.3rem 1.3rem 2.2rem 1.3rem;
    font-family: 'Raleway', sans-serif;
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
