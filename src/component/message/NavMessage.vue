<template>
<div class="header-matches-mobile header-nav-message">
    <div class="header-logo">
        <img src="../../assets/icon.png" alt="">
        <h1>Messages</h1>
    </div>
</div>

<div v-if="!chatlist">
    <transition-group appear tag="div" @before-enter="beforeEnter" @enter="enter" class="mr-pd-nav-message">
        <div v-for="index in [0, 1, 2, 3]" :key="index" :data-index="index">
            <SkeletonChat />
        </div>
    </transition-group>
</div>
<div v-else>
    <div class="mr-pd-nav-message" v-for="(item, index) in chatlist" :key="index" :data-index="index">
        <router-link :to="'/home/message/' + item.id_userTo._id" class="wrapper-chat-user link-chat-user list-message-mobile">
            <div>
                <img :src="item.id_userTo.image[0].url" alt="">
            </div>
            <div class="chat-user-right">
                <div>
                    <span style="font-size: 1.2rem;">{{ item.id_userTo.fullname }}</span>
                </div>
                <div>
                    <span v-if="item.message.length > 33" class="message-user-first">{{ item.message.slice(0, 33) + '...' }}</span>
                    <span v-else class="message-user-first">{{ item.message }}</span>
                </div>
                <!-- <div class="d-flex">
                    <div class="online"></div>
                    <span class="message-user-first">Online</span>
                </div> -->
            </div>
        </router-link>
    </div>
</div>
</template>

<script>
import gsap from 'gsap'
import ChatAPI from '../../api/ChatAPI'
import queryString from 'query-string'
import SkeletonChat from '../skeleton/SkeletonChat.vue'

export default {
    name: 'NavMessage',
    components: {
        SkeletonChat
    },
    data: () => {
        return {
            chatlist: null,
        }
    },
    async created() {

        const params = {
            _id: sessionStorage.getItem('idUser')
        }

        const query = '?' + queryString.stringify(params)

        const res = await ChatAPI.getList(query)

        setTimeout(() => {
            this.chatlist = res
        }, 3000)
    },
    methods: {
        formatMessage(value) {
            if (value.length > 33) {
                const newStr = value.slice(0, 33) + '...'
                return newStr
            }
            return value
        },
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

.list-message-mobile {
    border-bottom: 1px solid #f3f3f3;
}

.header-nav-message {
    border-bottom: 1px solid #f3f3f3;
    position: fixed;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between !important;
    z-index: 9999;
}

.mr-pd-nav-message {
    margin: 4.3rem 0 4rem 0;
}

.online {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #14d314;
    margin-top: .45rem;
}


/* .list-matches-mobile{
    margin-top: 1.15rem;
    color: #FD546C;
} */
</style>
