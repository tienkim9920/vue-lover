<template>
<div class="navigation">
    <div class="fixed-nav-header">
        <div class="navigation-header">
            <router-link to="/home">
                <img v-if="!profile" src="../../assets/avt1.jpg" alt="">
                <img v-else :src="profile.url" alt="">
            </router-link>
            <router-link to="/home/setting" class="myprofile-header" style="margin-top: .2rem">
                <span>My Profile</span>
                <i class="fa fa-chevron-right" style="color: #fff; margin-top: .5rem"></i>
            </router-link>

        </div>
        <div class="navigation-content">
            <a @click="onActiveNav('matches')">Matches</a>
            <a @click="onActiveNav('messages')">Messages</a>
            <div class="line-under-nav-content" v-bind:class="(activeNav === 'messages') ? 'activeNav' : 'unactiveNav'"></div>
        </div>
    </div>

    <div v-if="user">
        <div class="navigation-body" v-if="activeNav === 'matches'">
            <div class="wrapper-image-user">
                <div class="another-hide">
                    <router-link to="/home/another">
                        <SkeletonUser />
                        <span class="count-user-hide">???</span>
                    </router-link>
                </div>
            </div>
            <div v-for="item in user" :key="item._id">
                <div class="wrapper-image-user">
                    <router-link :to="'/home/message/' + item.id_userTo._id">
                        <img :src="item.id_userTo.image[0].url" alt="">
                        <span class="name-in-image-user">{{ item.id_userTo.fullname }}</span>
                    </router-link>
                </div>
            </div>

        </div>
    </div>
    <div v-if="!user">
        <div class="navigation-body" v-if="activeNav === 'matches'">
            <div class="wrapper-image-user" v-for="index in [1,2,3,4,5,6,7,8,9,10,11,12]" v-bind:key="index">
                <SkeletonUser />
            </div>
        </div>
    </div>

    <div class="navigation-message" v-if="activeNav === 'messages'">
        <div @click="checkingMessage(item._id)" v-for="item in chatlist" :key="item._id">
            <router-link :to="'/home/message/' + item.id_userTo._id" class="link-chat-user" exact-active-class="exact-active" v-bind:class="(checkMessage === item._id) ? 'wrapper-chat-user active-chat-user' : 'wrapper-chat-user unactive-chat-user'">
                <div>
                    <img :src="item.id_userTo.image[0].url" alt="">
                </div>
                <div class="chat-user-right">
                    <div>
                        <span style="font-size: 1.2rem">{{ item.id_userTo.fullname  }}</span>
                    </div>
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
</div>
</template>

<script>
import SkeletonUser from '../skeleton/SkeletonUser.vue'
import ChatAPI from '../../api/ChatAPI'
import queryString from 'query-string'
import UserAPI from '../../api/UserAPI'
import socket from '../../socket/socket.js'
import {
    ref,
    watchEffect
} from '@vue/runtime-core'

export default {
    name: 'Navigation',
    components: {
        SkeletonUser
    },
    data: () => {
        return {
            activeNav: 'matches',
            user: null,
            checkMessage: '',
            profile: null
        }
    },
    async created() {

        // Get list matches
        const params = {
            _id: sessionStorage.getItem('idUser')
        }

        const query = '?' + queryString.stringify(params)

        const listMatches = await ChatAPI.getList(query)

        // Get profile
        const res = await UserAPI.detail(sessionStorage.getItem('idUser'))

        setTimeout(() => {
            this.user = listMatches
            this.profile = res.image[0]
        }, 3000)

    },

    methods: {
        onActiveNav(value) {
            this.activeNav = value

            console.log(this.activeNav)
        },
        formatMessage(value) {
            if (value.length > 33) {
                const newStr = value.slice(0, 33) + '...'
                return newStr
            }
            return value
        },
        checkingMessage(value) {
            this.checkMessage = value
        }
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

                console.log(chatlist.value)
            })

        })

        return {
            chatlist
        }
    },
}
</script>

<style>
.myprofile-header span {
    width: 255px;
}

.myprofile-header {
    display: flex;
}

.navigation-header a {
    background-color: transparent;
}

.another-hide .exact-active {
    border-right: none;
}

.wrapper-image-user .exact-active {
    border-right: none;
}

.link-chat-user {
    text-decoration: none;
    color: #323232;
}

.link-chat-user:hover {
    color: #323232;
}

/* width */
::-webkit-scrollbar {
    width: 0px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: transparent;
}

.message-user-first {
    font-family: 'Raleway', sans-serif;
}

.chat-user-right {
    margin: .5rem 0 0 1rem;
}

.navigation-message {
    /* margin-top: .5rem; */
    background-color: #f8f8f8;
    height: 100%;
}

.wrapper-chat-user {
    display: flex;
    cursor: pointer;
    padding: 1rem 0rem 1rem 1rem;
}

.active-chat-user {
    border-right: 5px solid #FE5A62;
    background-color: #fcfcfcf7 !important;
    box-shadow: 0 0 0.25em 0.25em rgba(207, 207, 207, 0.25);
}

.exact-active {
    border-right: 5px solid #FE5A62;
    background-color: #f8f8f8;
}

.wrapper-chat-user:hover {
    border-right: 5px solid #FE5A62;
}

.wrapper-chat-user img {
    width: 76px;
    height: 73px;
    border-radius: 50%;
}

.another-hide {
    position: relative;
}

.count-user-hide {
    position: absolute;
    top: 3rem;
    left: 25%;
    color: #fff;
    font-size: 1.2rem;
    padding: .4rem;
    background-color: #FE5A62;
    border-radius: 50%;
    cursor: pointer;
}

.blur-image {
    filter: blur(2px) brightness(90%);
}

.navigation-body {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
    padding: 0rem 0 0 1rem;
}

.wrapper-image-user {
    padding-top: .2rem;
    position: relative;
}

.wrapper-image-user a .name-in-image-user {
    color: #fff;
    position: absolute;
    top: 80%;
    left: 5%;
}

.wrapper-image-user img {
    width: 105px;
    height: 130px;
    border-radius: 4px;
    cursor: pointer;
}

.wrapper-image-user:hover {
    transform: scale(1.07);
    transition: all .5s ease;
}

.navigation {
    position: relative;
    overflow-x: scroll;
    height: 720px;
    border-right: 1px solid #e2e2e2;
    width: 100%;
}

.navigation-header {
    background-color: #FE5A62;
    padding: 1.1rem 1rem;
    display: flex;
}

.navigation-header img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.navigation-header a {
    margin-top: .2rem;
    margin-left: 1rem;
    color: #fff;
    text-decoration: none;
    font-size: 1.4rem;
}

.navigation-content {
    padding: 1rem 1rem;
}

.navigation-content a {
    margin: 0 .7rem;
    text-decoration: none;
    color: #323232;
    cursor: pointer;
}

.line-under-nav-content {
    width: 85px;
    height: 3px;
    background-color: #FE5A62;
}

.activeNav {
    animation: moveLeft .5s;
    transform: translateX(92px)
}

.unactiveNav {
    animation: moveRight .5s;
    transform: translateX(0)
}

@keyframes moveLeft {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(92px);
    }
}

@keyframes moveRight {
    0% {
        transform: translateX(92px);
    }

    100% {
        transform: translateX(0);
    }
}
</style>
