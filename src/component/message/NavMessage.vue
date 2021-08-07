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
<div v-else class="mr-pd-nav-message">
    <div v-for="(item, index) in chatlist" :key="index" :data-index="index">
        <router-link :to="'/home/message/' + item.id_userTo._id" class="wrapper-chat-user link-chat-user list-message-mobile">
            <div>
                <img :src="item.id_userTo.image[0].url" alt="">
            </div>
            <div class="chat-user-right">
                <div>
                    <span style="font-size: 1.2rem;">{{ item.id_userTo.fullname }}</span>
                </div>
                <!-- <div>
                    <span v-if="item.message.length > 33" class="message-user-first">{{ item.message.slice(0, 33) + '...' }}</span>
                    <span v-else class="message-user-first">{{ item.message }}</span>
                </div> -->
                <div class="d-flex" v-if="item.active">
                    <div class="online"></div>
                    <span class="status-online">Online</span>
                </div>
                <div class="d-flex" v-else>
                    <div class="offline"></div>
                    <span class="status-online">Offline</span>
                </div>
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
import socket from '../../socket/socket.js'
import {
    ref,
    watchEffect
} from 'vue'

export default {
    name: 'NavMessage',
    components: {
        SkeletonChat
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

        const chatlist = ref(null)

        watchEffect(async () => {

            // Khi vào thì client sẽ gửi lên server event login
            // Để server nhận và lưu userId vào bộ nhớ
            socket.emit('login', sessionStorage.getItem('idUser'))

            // Sau 3 giây sẽ gửi tiếp getOnline lên server
            // Để lấy danh sách user đang có trong bộ nhớ online
            setTimeout(() => {
                socket.emit('getOnline')
            }, 3000)

        })

        watchEffect(() => {

            // Nhận danh sách user đang online có trong bộ nhớ
            socket.on('getOnline', async (client) => {

                const params = {
                    _id: sessionStorage.getItem('idUser')
                }

                const query = '?' + queryString.stringify(params)

                const res = await ChatAPI.getList(query)

                for (let i = 0; i < res.length; i++) {
                    for (let j = 0; j < client.length; j++) {
                        if (res[i].id_userTo._id.toString() === client[j]._id.toString()) {
                            res[i].active = true
                        }
                    }
                }
                chatlist.value = res
            })

        })

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
            enter,
            chatlist
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

/* .list-matches-mobile{
    margin-top: 1.15rem;
    color: #FD546C;
} */
</style>
