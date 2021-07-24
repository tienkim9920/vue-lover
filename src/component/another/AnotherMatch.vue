<template>
<div class="layout-another">
    <div class="another-header">
        <div class="like-another">
            <i class="fa fa-heart"></i>
            <h4>10 Likes</h4>
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
        <transition-group appear tag="div" @before-enter="beforeEnter" @enter="enter" class="grid-another-body">
            <div class="wrapper-another-body" v-for="index in [1,2,3,4,5,6,7,8]" :key="index" :data-index="index">
                <div class="box-another-match">
                    <img src="../../assets/avt2.jpg" alt="">
                    <div class="title-another-match">
                        <div>Tiền Kim</div>
                        <div>18</div>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</div>
</template>

<script>
import gsap from 'gsap'

export default {
    name: 'AnotherMatch',
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

.box-another-match img{
    width: 100%;
    height: 100%;
    position: relative;
}

.title-another-match{
    font-size: 1.2rem;
    color: #fff;
    position: absolute;
    top: 70%;
    left: 5%;
}

</style>