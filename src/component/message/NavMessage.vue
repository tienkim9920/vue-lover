<template>
<div class="header-matches-mobile header-nav-message">
    <div class="header-logo">
        <img src="../../assets/icon.png" alt="">
        <h1>Messages</h1>
    </div>
    <!-- <div class="list-matches-mobile">
        New Matches
    </div> -->
</div>
<transition-group appear tag="div" @before-enter="beforeEnter" @enter="enter" class="mr-pd-nav-message">
    <div v-for="item in chatlist" :key="item" :data-index="item.id">
        <router-link :to="'/home/message/' + item.id" class="wrapper-chat-user link-chat-user list-message-mobile">
            <div>
                <img src="../../assets/avt2.jpg" alt="">
            </div>
            <div class="chat-user-right">
                <div>
                    <span style="font-size: 1.2rem">{{ item.name }}</span>
                </div>
                <div>
                    <span class="message-user-first">{{ formatMessage(item.message) }}</span>
                </div>
            </div>
        </router-link>
    </div>
</transition-group>
</template>

<script>
import gsap from 'gsap'

export default {
    name: 'NavMessage',
    data: () => {
        return {
            chatlist: [{
                    id: 1,
                    name: 'Tiền Kim',
                    message: 'Xin chào bạn tên là gì =)) cho mình làm quen nha',
                },
                {
                    id: 2,
                    name: 'Phạm Đoàn Mỹ Hân',
                    message: 'Chào bạn mình tên là Mỹ Hân',
                },
                {
                    id: 3,
                    name: 'Phạm Đoàn Mỹ Hân',
                    message: 'Chào bạn mình tên là Mỹ Hân',
                },
                {
                    id: 4,
                    name: 'Phạm Đoàn Mỹ Hân',
                    message: 'Chào bạn mình tên là Mỹ Hân',
                },
                {
                    id: 5,
                    name: 'Phạm Đoàn Mỹ Hân',
                    message: 'Chào bạn mình tên là Mỹ Hân',
                },
                {
                    id: 6,
                    name: 'Phạm Đoàn Mỹ Hân',
                    message: 'Chào bạn mình tên là Mỹ Hân',
                },
                {
                    id: 7,
                    name: 'Phạm Đoàn Mỹ Hân',
                    message: 'Chào bạn mình tên là Mỹ Hân',
                },
            ],
        }
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
                duration: 0.2,
                onComplete: done,
                delay: el.dataset.index * 0.1
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

/* .list-matches-mobile{
    margin-top: 1.15rem;
    color: #FD546C;
} */
</style>
