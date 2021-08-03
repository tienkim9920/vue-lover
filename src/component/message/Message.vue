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
                <input type="submit" @click="sendSocket">
                <!-- <div>
                    <div class="chat-message-send">
                        <div class="message-send">Chào em</div>
                    </div>
                    <div class="chat-message-received">
                        <img :src="image" alt="">
                        <div class="message-received">Chào anh</div>
                    </div>
                    <div class="chat-message-send">
                        <div class="message-send">Chào em</div>
                    </div>
                    <div class="chat-message-received">
                        <img :src="image" alt="">
                        <div class="message-received">Chào anh</div>
                    </div>
                    <div class="chat-message-send">
                        <div class="message-send">Chào em</div>
                    </div>
                    <div class="chat-message-received">
                        <img :src="image" alt="">
                        <div class="message-received">Chào anh</div>
                    </div>
                    <div class="chat-message-send">
                        <div class="message-send">Chào em</div>
                    </div>
                    <div class="chat-message-received">
                        <img :src="image" alt="">
                        <div class="message-received">Chào anh</div>
                    </div>
                </div> -->
            </div>
            <div class="footer-chat-left">
                <div class="input-chat-left">
                    <div class="txt-footer-chat">
                        <input v-model="message" type="text" placeholder="Type a message">
                    </div>
                    <div class="send-footer-chat">
                        <div>
                            <i class="fa fa-smile-o" style="font-size:24px" @click="openIcon"></i>
                        </div>
                        <div style="margin-top: .2rem">
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
import queryString from 'query-string'
import SkeletonMess from '../skeleton/SkeletonMess.vue'

import io from "socket.io-client";
var connectionOptions =  {
            // "force new connection" : true,
            // "reconnectionAttempts": "Infinity", 
            // "timeout" : 10000,                  
            "transports" : ["websocket"]
        };

const socket = io.connect('http://localhost:4000', connectionOptions)

export default {
    name: 'Message',
    components: {
        Profile,
        Icon,
        SkeletonMess
    },
    data: () => {
        return {
            userTo: null,
            id: '',
            fullname: '',
            image: '',
            room: '',
        }
    },
    async created() {

        //Get userTo for chat
        const params = {
            _id: sessionStorage.getItem('idUser'),
            userTo: this.$route.params.id
        }

        const query = '?' + queryString.stringify(params)

        setTimeout(async () => {
            const resUserTo = await ChatAPI.getUser(query)
            this.userTo = resUserTo
            this.fullname = resUserTo.id_userTo.fullname
            this.image = resUserTo.id_userTo.image[0].url
            this.id = resUserTo.id_userTo._id
            this.room = resUserTo.room

            // Khi bấm vào đối tượng muốn chat thì client sẽ gửi lên server
            // room chat của đối tượng đó
            socket.emit('room', this.room)

        }, 3000)

    },
    methods: {
        sendSocket(){
            const data = {
                room: this.room,
                msg: sessionStorage.getItem('idUser')
            }

            // Gửi tin nhắn đến đến server có kém room chat
            socket.emit('send', data)
        }
    },
    setup() {

        const showIcon = ref(false)
        const icon = ref([])
        const message = ref('')

        watchEffect(async () => {
            // Get API Icon
            const res = await fetch('https://cdn.jsdelivr.net/npm/emoji-picker-element-data@%5E1/en/emojibase/data.json')
            const data = await res.json()
            const newData = data.slice(0, 50)
            icon.value = newData

        })

        watchEffect(() => {

            // Tiến hành nhận tin nhắn
            socket.on('receive', (data) => {
                console.log(data)
            })

        })

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
        }

    },
}
</script>

<style>
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
    margin-top: .5rem;
    display: flex;
    justify-content: flex-end;
}

.chat-message-received {
    margin-top: .5rem;
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
    padding: .5rem 1rem 1rem 1rem;
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
</style>
