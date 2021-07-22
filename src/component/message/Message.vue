<template>
<div class="wrapper-content-chat">
    <div class="content-chat-left">
        <div class="header-chat-left">
            <router-link :to="'/home/profile/' + '1'">
                <div class="title-header-chat-left">
                    <img src="../../assets/avt2.jpg" alt="">
                    <h4>Tiền Kim</h4>
                </div>
            </router-link>
            <div>
                <router-link to="/home">
                    <i class="fa fa-close icon-header-chat-left"></i>
                </router-link>
            </div>
        </div>
        <div class="body-chat-left">
            <div class="chat-message-send">
                <div class="message-send">Chào em</div>
            </div>
            <div class="chat-message-received">
                <img src="../../assets/avt2.jpg" alt="">
                <div class="message-received">Chào anh</div>
            </div>
            <div class="chat-message-received">
                <img src="../../assets/avt2.jpg" alt="">
                <div class="message-received">Chào anh</div>
            </div>
            <div class="chat-message-received">
                <img src="../../assets/avt2.jpg" alt="">
                <div class="message-received">Chào anh</div>
            </div>
            <div class="chat-message-send">
                <div class="message-send">Chào em</div>
            </div>
        </div>
        <div class="footer-chat-left">
            <div class="input-chat-left">
                <div class="txt-footer-chat">
                    <input type="text" placeholder="Type a message">
                </div>
                <div class="send-footer-chat">
                    <div>
                        <i class="fa fa-smile-o" style="font-size:24px"></i>
                    </div>
                    <div style="margin-top: .2rem">
                        <a>SEND</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content-information-right">
        <Profile />
    </div>
</div>
</template>

<script>
// import { useRouter } from 'vue-router'
import Profile from '../profile/Profile.vue'

export default {
    name: 'Message',
    components: {
        Profile
    },
    setup() {

        // const router = useRouter()

    },
}
</script>

<style>
.header-chat-left a{
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
