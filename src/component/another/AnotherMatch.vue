<template>
<div class="layout-another">
    <div class="another-header">
        <div class="like-another">
            <i class="fa fa-heart"></i>
            <h4>{{ count }}</h4>
        </div>
        <div>
            <router-link to="/home">
                <i class="fa fa-close icon-header-another"></i>
            </router-link>
        </div>
    </div>
    <div class="another-body">
        <router-link class="another-see-likes" to="/home/another">See who likes you</router-link>
        <div class="h5-another-body">
            <h5>Upgrade to Gold to see people who already like you.</h5>
        </div>
        <transition-group v-if="!another" appear tag="div" @before-enter="beforeEnter" @enter="enter" class="grid-another-body">
            <div class="wrapper-another-body" v-for="index in [1,2,3,4]" :key="index" :data-index="index">
                <SkeletonAnother />
            </div>
        </transition-group>

        <div class="grid-another-body" v-if="another">
            <div class="wrapper-another-body" v-for="item in another" :key="item._id">
                <router-link :to="'/home/message/' + item.id_userTo._id" class="box-another-match">
                    <img :src="item.id_userTo.image[0].url" alt="">
                    <div class="title-another-match">
                        <div>{{ item.id_userTo.fullname }}</div>
                        <div>{{ item.id_userTo.age }}</div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import SkeletonAnother from '../skeleton/SkeletonAnother.vue'
import gsap from 'gsap'
import ChatAPI from '../../api/ChatAPI'
import queryString from 'query-string'

export default {
    name: 'AnotherMatch',
    components: {
        SkeletonAnother
    },
    data: () => {
        return {
            another: null,
            count: ''
        }
    },
    async created() {

        const params = {
            _id: sessionStorage.getItem('idUser')
        }

        const query = '?' + queryString.stringify(params)

        const listMatches = await ChatAPI.getList(query)

        setTimeout(() => {
            this.another = listMatches
            this.count = listMatches.length + ' Likes'
        }, 3000)

    },
    setup() {

        const beforeEnter = (el) => {
            el.style.opacity = 0
            el.style.transform = 'translateY(150px)'
        }

        const enter = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                onComplete: done,
                delay: el.dataset.index * 0.2
            })
        }

        return {
            beforeEnter,
            enter
        }

    },
}
</script>

<style>
.box-another-match img {
    width: 100%;
    height: 208px;
    position: relative;
}

.title-another-match {
    font-size: 1.5rem;
    color: #fff;
    position: absolute;
    top: 76%;
    left: 5%;
}

@media only screen and (max-width: 600px) {
    .title-another-match {
        font-size: 1.2rem !important;
        top: 70% !important;
    }
}
</style>
