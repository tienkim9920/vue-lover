<template>
<div class="wrapper-content-chat">
    <transition name="show" appear>
        <div class="content-chat-left">
            <div class="header-chat-left">
                <div v-if="!userTo">
                    <SkeletonMess />
                </div>
                <router-link v-else :to="'/home/profile/' + id">
                    <div class="title-header-chat-left">
                        <img :src="image" alt="">
                        <h4>{{ fullname }}</h4>
                    </div>
                </router-link>
                <div class="redirect-message">
                    <router-link to="/home">
                        <i class="fa fa-close icon-header-chat-left"></i>
                    </router-link>
                </div>
                <div class="redirect-message-mobile">
                    <router-link to="/home/message">
                        <i class="fa fa-close icon-header-chat-left"></i>
                    </router-link>
                </div>
            </div>
            <div class="body-chat-left">
                <div v-if="!messChat">
                    <div v-for="index in [0, 1, 2, 3, 4, 5]" :key="index">
                        <div v-bind:class="index % 2 === 0 ? 'chat-message-send' : 'chat-message-received'">
                            <SkeletonMessSend v-if="index % 2 === 0" />
                            <SkeletonMess v-else />
                        </div>
                    </div>
                </div>
                <div v-else class="scrollChat" ref="bodyChat">
                    <div v-for="(item, index) in messChat" :key="index">
                        <div v-bind:class="item.id_user === sessionUser ? 'chat-message-send' : 'chat-message-received'">
                            <div v-if="item.id_user !== sessionUser">
                                <img :src="image" alt="">
                            </div>
                            <div v-bind:class="item.id_user === sessionUser ? 'message-send' : 'message-received'">{{ item.message }}</div>
                        </div>
                    </div>
                    <div v-if="loading" class="chat-message-received">
                        <img :src="image" alt="">
                        <div class="message-received">
                            <div class="spinner-message">
                                <div class="bounce1-message"></div>
                                <div class="bounce2-message"></div>
                                <div class="bounce3-message"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-chat-left">
                <div class="input-chat-left">
                    <div class="txt-footer-chat">
                        <input @keyup="keyupMessage" v-model="message" type="text" placeholder="Type a message">
                    </div>
                    <div class="send-footer-chat">
                        <div>
                            <i class="fa fa-smile-o" style="font-size:24px" @click="openIcon"></i>
                        </div>
                        <div style="margin-top: .2rem" @click="sendSocket">
                            <a>SEND</a>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="showIcon">
                <Icon :icon="icon" @handlerIcon="handlerIcon" />
            </div>
        </div>
    </transition>
    <div class="content-information-right">
        <Profile />
    </div>
</div>
</template>

<script>
import {
    ref
} from '@vue/reactivity'
import Profile from '../profile/Profile.vue'
import Icon from './Icon.vue'
import {
    watchEffect
} from '@vue/runtime-core'
import ChatAPI from '../../api/ChatAPI'
import MessAPI from '../../api/MessAPI'
import queryString from 'query-string'
import SkeletonMess from '../skeleton/SkeletonMess.vue'
import SkeletonMessSend from '../skeleton/SkeletonMessSend.vue'

import io from "socket.io-client";
import {
    useRoute
} from 'vue-router'
var connectionOptions = {
    // "force new connection" : true,
    // "reconnectionAttempts": "Infinity", 
    // "timeout" : 10000,                  
    "transports": ["websocket"]
};

const socket = io.connect('http://localhost:4000', connectionOptions)

export default {
    name: 'Message',
    components: {
        Profile,
        Icon,
        SkeletonMess,
        SkeletonMessSend
    },
    setup() {

        const route = useRoute()

        const showIcon = ref(false)
        const icon = ref([])
        const message = ref('')

        const bodyChat = ref(null)

        const sessionUser = ref(sessionStorage.getItem('idUser'))

        const userTo = ref(null)
        const id = ref('')
        const fullname = ref('')
        const image = ref('')
        const room = ref('')

        const messChat = ref(null)
        const loading = ref(false)

        watchEffect(async () => {
            // Get API Icon
            const res = await fetch('https://cdn.jsdelivr.net/npm/emoji-picker-element-data@%5E1/en/emojibase/data.json')
            const data = await res.json()
            const newData = data.slice(0, 50)
            icon.value = newData

            // Get userTo for chat
            const params = {
                _id: sessionStorage.getItem('idUser'),
                userTo: route.params.id
            }
            const query = '?' + queryString.stringify(params)
            const resUserTo = await ChatAPI.getUser(query)

            // Get list message for chat
            const paramsMess = {
                room: resUserTo.room
            }
            const queryMess = '?' + queryString.stringify(paramsMess)
            const resMess = await MessAPI.getRoom(queryMess)

            setTimeout(() => {
                // Get userTo
                userTo.value = resUserTo
                fullname.value = resUserTo.id_userTo.fullname
                image.value = resUserTo.id_userTo.image[0].url
                id.value = resUserTo.id_userTo._id
                room.value = resUserTo.room

                // Get listMess
                messChat.value = resMess

                // Khi bấm vào đối tượng muốn chat thì client sẽ gửi lên server
                // room chat của đối tượng đó
                socket.emit('room', room.value)

            }, 3000)

        })

        watchEffect(() => {

            // Tiến hành nhận tin nhắn
            socket.on('receive', (data) => {

                const clone = messChat.value

                const newMessChat = [...clone, data]

                messChat.value = newMessChat

                scrollBottom()

            })

            socket.on('typing', (data) => {

                if (data.message === '') {
                    loading.value = false
                    return
                }
                if (data.message !== '' && loading.value === false) {
                    loading.value = true
                    scrollBottom()
                    return
                }
                if (data.message !== '' && loading.value === true) {
                    return
                }

            })

        })

        const keyupMessage = () => {

            const data = {
                room: room.value,
                message: message.value
            }

            socket.emit('typing', data)

            scrollBottom()

        }

        const sendSocket = () => {
            const data = {
                id_user: sessionStorage.getItem('idUser'),
                id_userTo: route.params.id,
                message: message.value,
                room: room.value
            }

            const clone = messChat.value

            const newMessChat = [...clone, data]

            messChat.value = newMessChat

            message.value = ''

            socket.emit('send', data)

            scrollBottom()

            // on key up for message
            const keyup = {
                room: room.value,
                message: message.value
            }

            socket.emit('typing', keyup)

        }

        const scrollBottom = () => {
            bodyChat.value.scrollTop = bodyChat.value.scrollHeight
        }

        const handlerIcon = (value) => {
            message.value += icon.value[value].emoji + ' '
        }

        const openIcon = () => {
            showIcon.value = !showIcon.value
        }

        return {
            openIcon,
            handlerIcon,
            showIcon,
            icon,
            message,
            userTo,
            id,
            fullname,
            image,
            room,
            messChat,
            sendSocket,
            sessionUser,
            loading,
            keyupMessage,
            bodyChat,
            scrollBottom
        }

    },
}
</script>

<style>
/* Loading CSS */
.spinner-message {
    text-align: center;
}

.spinner-message>div {
    width: 13px;
    height: 13px;
    background-color: #e4e4e4;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner-message .bounce1-message {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}

.spinner-message .bounce2-message {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {

    0%,
    80%,
    100% {
        -webkit-transform: scale(0)
    }

    40% {
        -webkit-transform: scale(1.0)
    }
}

@keyframes sk-bouncedelay {

    0%,
    80%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    40% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
}

/* Loading CSS */

.content-chat-left {
    position: relative;
}

.show-enter-from {
    transform: translateY(500px);
    opacity: 0;
}

.show-enter-to {
    transform: translateY(0px);
    opacity: 1;
}

.show-enter-active {
    transition: all .3s ease-in;
}

.redirect-message-mobile {
    display: none;
}

.header-chat-left a {
    cursor: pointer;
    text-decoration: none;
    color: #323232;
}

.txt-footer-chat input {
    width: 270%;
    border: none;
    outline: none;
    padding: .4rem 1rem;
}

.send-footer-chat {
    display: flex;
    margin-top: .3rem;
}

.send-footer-chat a {
    text-decoration: none;
    color: #fff !important;
    text-transform: uppercase;
    letter-spacing: .05rem;
    font-size: 1rem;
    padding: .7rem 1.6rem;
    background-color: #FD546C;
    border-radius: 2rem;
    cursor: pointer;
    box-shadow: 0 0 0.25em 0.25em rgba(206, 206, 206, 0.25);
}

.send-footer-chat a:hover {
    background-color: #fd4460;
}

.send-footer-chat i {
    color: #F8B62F;
    background-color: #F5F7FA;
    padding: .2rem .3rem;
    border-radius: 50%;
    cursor: pointer;
    margin-right: .7rem;
}

.input-chat-left {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 1.5rem;
    border-top: 1px solid #e4e4e4;
}

.chat-message-received img {
    margin-top: .1rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid #fff;
}

.chat-message-send {
    margin: .8rem 0;
    display: flex;
    justify-content: flex-end;
}

.chat-message-received {
    margin: .8rem 0;
    display: flex;
}

.message-send {
    color: #fff;
    background-color: #3D9FFF;
    padding: .6rem 1.3rem;
    border-radius: 1vw 1vw .2vw 1vw;
}

.message-received {
    color: #323232;
    background-color: #F5F7FA;
    padding: .6rem 1.3rem;
    border-radius: 1vw 1vw 1vw .2vw;
    margin-left: .3rem;
}

.body-chat-left {
    padding: 0 1rem;
    height: 530px;
    /* overflow-y: scroll; */
    overflow: hidden;
}

.scrollChat {
    height: 530px;
    overflow-y: scroll;
}

.header-chat-left {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4;
    padding: 1rem;
}

.title-header-chat-left {
    display: flex;
    margin: .8rem;
}

.title-header-chat-left h4 {
    margin-top: .5rem;
    margin-left: 1rem;
}

.title-header-chat-left img {
    width: 49px;
    height: 45px;
    border-radius: 50%;
    border: 4px solid #fff;
    box-shadow: 0 0 0.25em 0.25em rgba(136, 136, 136, 0.25);
}

.icon-header-chat-left {
    color: #FE5266;
    font-size: 20px;
    cursor: pointer;
    border-radius: 50%;
    padding: .4rem .6rem;
    border: 1px solid #FE5266;
    margin: 1.2rem .8rem .8rem .8rem;
}

.icon-header-chat-left:hover {
    color: #fff;
    background-color: #FE5266;
}

.wrapper-content-chat {
    width: 100%;
    height: 721px;
    display: grid;
    grid-template-columns: 1.4fr 0.7fr;
}

@media only screen and (max-width: 600px) {
    .input-chat-left {
        padding: 1.5rem 0.5rem !important;
    }

    .body-chat-left {
        height: 500px !important;
    }

    .scrollChat {
        height: 500px !important;
        padding-bottom: 3.3rem;
    }
}
</style>
