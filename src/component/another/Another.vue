<template>
<div class="layout-another">
    <div class="another-header">
        <div class="like-another">
            <i class="fa fa-heart"></i>
            <h4>99+ Likes</h4>
        </div>
        <div>
            <router-link to="/home">
                <i class="fa fa-close icon-header-another"></i>
            </router-link>
        </div>
    </div>
    <div class="another-body">
        <a class="another-see-likes">See who likes you</a>
        <div class="h5-another-body">
            <h5>Upgrade to Gold to see people who already like you.</h5>
        </div>
        <transition-group appear tag="div" @before-enter="beforeEnter" @enter="enter" class="grid-another-body">
            <div class="wrapper-another-body" v-for="index in [1,2,3,4,5,6,7,8]" :key="index" :data-index="index">
                <SkeletonAnother />
            </div>
        </transition-group>
    </div>
</div>
</template>

<script>
import SkeletonAnother from '../skeleton/SkeletonAnother.vue'
import gsap from 'gsap'

export default {
    name: 'Another',
    components: {
        SkeletonAnother
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
                duration: 1.2,
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
.another-body {
    overflow-y: scroll;
    height: 650px;
}

.another-see-likes {
    position: fixed;
    top: 85%;
    left: 55%;
    z-index: 9999;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    padding: .6rem 1.8rem;
    font-size: 1rem;
    text-transform: uppercase;
    background-color: #ffcf4b;
    border-radius: 2rem;
    box-shadow: 0 0 0.15em 0.15em rgba(136, 136, 136, 0.5);
}

.another-see-likes:hover {
    color: #fff;
}

.grid-another-body {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    gap: 15px;
    padding: 1rem 2rem 3rem 2rem;
}

.wrapper-another-body {
    position: relative;
    overflow: hidden;
    margin-top: 1rem;
}

.h5-another-body {
    text-align: center;
    font-family: 'Raleway', sans-serif;
    color: rgb(85, 85, 85);
    padding-top: 2rem;
}

.like-another {
    display: flex;
}

.like-another i {
    font-size: 26px;
    margin-top: .2rem;
    color: #FE5266;
}

.like-another h4 {
    font-style: italic;
    margin-left: .5rem;
}

.another-header {
    display: flex;
    justify-content: space-between;
    padding: 1.1rem 1rem;
    border-bottom: 1px solid #e4e4e4;
}

.icon-header-another {
    color: #FE5266;
    font-size: 20px;
    cursor: pointer;
    border-radius: 50%;
    padding: .4rem .6rem;
    border: 1px solid #FE5266;
}

.icon-header-another:hover {
    color: #fff;
    background-color: #FE5266;
}
</style>
