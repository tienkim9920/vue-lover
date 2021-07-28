<template>
<div class="header-intro">
    <div class="header-logo">
        <img src="../assets/icon.png" alt="">
        <h1>Lover</h1>
    </div>
    <div class="header-login">
        <a class="btn-login" data-bs-toggle="modal" data-bs-target="#login">Log in</a>
    </div>
</div>
<div class="banner-intro">
    <div class="title-intro">
        <h1>Swipe Right</h1>
        <div class="parent-btn-create">
            <a class="btn-create" data-bs-toggle="modal" data-bs-target="#signup">Create Account</a>
        </div>
    </div>
</div>
<div class="footer">
    <div class="container">
        <div class="intro-app">
            <h2>GET THE APP!</h2>
            <p>Single people, listen up: if you're looking for love, want to start dating, or just keep it casual,
                you need to be on Lover. With over 55 billion matches made, it's the place to be to meet your next best match.
                Let's be real, the dating landscape looks very different tody, as most people are meeting online.
                With Lover, the world's most popular free dating app, you have millions of other single at your fingertips and they's all ready to meet someone like you.</p>
            <p>There really is something for everyone on Lover. Want to get into a relationshop? You got it.
                Trying to find some new friend? Say no more. New kid on campus and looking to make the most of your college experience? Lover U's got you covered.
                Lover isn't your average dating site - it;s the most diverse dating app,
                where adults of all backgrounds and experience are invited to make connections, memories, and everything in between.
            </p>
        </div>
        <div class="copyright">
            <a href="https://www.facebook.com/KimTien.9920/" target="_blank">Copyright © 2021 Lover. Powered by Nguyễn Kim Tiền</a>
        </div>
    </div>

</div>

<div class="modal fade" id="login">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="d-flex justify-content-end">
                <i class="fa fa-remove close-login" data-bs-dismiss="modal" aria-label="Close"></i>
            </div>
            <div class="p-modal-login">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <img class="img-modal-login" src="../assets/icon.png" alt="">
                        <h3 class="h-start">GET STARTED</h3>
                    </div>
                </div>
                <div class="text-center">
                    <p class="chitiet-modal">
                        By clicking Log In, you agree to our Terms.
                        Learn how we process your date in our Privacy Policy and Cookie Policy
                    </p>
                </div>
                <div class="group-btn-login">
                    <div class="btn-facebook">
                        <v-facebook-login app-id="1188277554976347" @login="loginFacebook"></v-facebook-login>
                    </div>
                    <div class="btn-login-lover" data-bs-toggle="modal" data-bs-target="#signin">
                        <a class="login-lover" data-bs-dismiss="modal" aria-label="Close">Log in With Phone Number</a>
                    </div>
                    <div class="btn-login-lover" data-bs-toggle="modal" data-bs-target="#signup">
                        <a class="login-lover" data-bs-dismiss="modal" aria-label="Close">Sign Up</a>
                    </div>
                    <div class="line-modal-login">
                        <div class="line-login">

                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <div style="padding: 1rem">
                        <h3 class="h-start">GET THE APP!</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="signin">
    <SignIn />
</div>

<div class="modal fade" id="signup">
    <SignUp />
</div>
</template>

<script>
import VFacebookLogin from 'vue-facebook-login-component-next'
import SignIn from '../component/intro/SignIn.vue'
import SignUp from '../component/intro/SignUp.vue'
import {
    useRouter
} from 'vue-router'

import UserAPI from '../api/UserAPI'

export default {
    name: "Intro",
    components: {
        VFacebookLogin,
        SignIn,
        SignUp
    },
    created() {

        const fb = JSON.parse(sessionStorage.getItem('fbssls_1188277554976347'))

        if (fb.authResponse !== null) {
            this.$router.push('/home')
        }

    },

    setup() {
        const router = useRouter()

        const loginFacebook = async () => {

            // Get session by return server
            const user = JSON.parse(sessionStorage.getItem('fbssls_1188277554976347')).authResponse

            // Save it in object
            const fb = {
                userID: user.userID,
            }

            console.log(fb)

            // Implement call api checking facebook
            const res = await UserAPI.facebook(fb)

            console.log(res)

            if (res === 'Account exist') {
                document.getElementsByClassName('modal-backdrop')[0].setAttribute("style",
                    "background-color: transparent !important; width: 0vw !important; height: 0vh !important; position: none !important;")
                document.getElementsByClassName('modal-backdrop')[1].setAttribute("style",
                    "background-color: transparent !important; width: 0vw !important; height: 0vh !important; position: none !important;")

                router.push('/home')

            } else {

                const body = {
                    fullname: '',
                    address: '',
                    gender: '',
                    bio: '',
                    email: '',
                    phone: '',
                    password: '',
                    userID: fb.userID,
                    image: []
                }

                const newUser = await UserAPI.addUser(body)

                sessionStorage.setItem('idUser', newUser._id)

                document.getElementsByClassName('modal-backdrop')[0].setAttribute("style",
                    "background-color: transparent !important; width: 0vw !important; height: 0vh !important; position: none !important;")
                document.getElementsByClassName('modal-backdrop')[1].setAttribute("style",
                    "background-color: transparent !important; width: 0vw !important; height: 0vh !important; position: none !important;")

                router.push('/home/setting/edit')

            }

        }
        return {
            loginFacebook
        }
    }

}
</script>

<style>
.modal.show .modal-dialog {
    animation: fadeIn .5s ease;
}

.modal-dialog {
    animation: fadeOut .5s ease;
}

@keyframes fadeOut {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(0.6);
    }
}

@keyframes fadeIn {
    0% {
        transform: scale(0.6);
    }

    100% {
        transform: scale(1);
    }
}

/* .modal{
    top: 2.5rem;
} */

.copyright {
    font-family: 'Raleway', sans-serif;
    letter-spacing: .05rem;
    padding: 2rem;
    text-align: center;
}

.copyright a {
    color: #323232;
    text-decoration: none;
}

.intro-app {
    padding: 2rem 0 1rem 0;
    border-bottom: 1px solid #e2e2e2;
}

.intro-app h2 {
    padding-bottom: 1rem;
}

.intro-app p {
    font-family: 'Raleway', sans-serif;
    letter-spacing: .05rem;
}

.btn-login-lover {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
}

.line-modal-login {
    display: flex;
    justify-content: center;
}

.line-login {
    width: 80%;
    height: 1px;
    background-color: #e2e2e2;
}

.login-lover {
    width: 80%;
    padding: .7rem 0;
    border-radius: 3rem;
    border: 2px solid #929292;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    color: #929292;
    cursor: pointer;
    transform: translateY(0px);
    transition: all .5s ease-in-out;
}

.login-lover:hover {
    color: #929292;
    transform: translateY(-5px)
}

.btn-facebook {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    transform: translateY(0px);
    transition: all .5s ease-in-out;
}

.btn-facebook:hover {
    transform: translateY(-5px)
}

.v-facebook-login {
    background-color: transparent;
    padding: .7rem 0;
    width: 80%;
    border-radius: 3rem;
    border: 2px solid #929292;
}

.v-facebook-login svg {
    width: 30px;
    height: 25px;
    margin-right: 2rem;
    background-color: #fff;
    color: #298CFA;
}

.v-facebook-login span {
    color: #7e7e7e;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: .03rem;
    line-height: 20px;
}

.chitiet-modal {
    font-size: .85rem;
    font-family: 'Raleway', sans-serif;
}

.h-start {
    font-weight: bold;
    font-style: italic;
}

.img-modal-login {
    width: 100px;
}

.header-intro {
    position: fixed;
    width: 100%;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
}

.header-logo {
    display: flex;

}

.header-logo h1 {
    margin-top: 1rem;
    color: #fff;
}

.header-logo img {
    width: 80px;
    height: 80px;
}

.banner-intro {
    background-image: url(../assets/gioithieu.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 100%;
    height: 721px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-login {
    margin-top: 2rem;
}

.btn-login {
    text-decoration: none;
    color: #FD546C;
    text-transform: uppercase;
    letter-spacing: .05rem;
    font-size: .9rem;
    padding: .6rem 1.6rem;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
}

.btn-login:hover {
    background-color: #FD546C;
    color: #fff;
    transition: all .1s ease;
}

.title-intro h1 {
    color: #fff;
    font-size: 6rem;
}

.parent-btn-create {
    text-align: center;
    margin-top: 2rem;
}

.btn-create {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: .05rem;
    font-size: 1rem;
    padding: 1rem 3.8rem;
    background-color: #FD546C;
    border-radius: 2rem;
    cursor: pointer;
}

.btn-create:hover {
    background-color: #fc415d;
    color: #fff;
    transition: all .1s ease;
}

.close-login {
    font-size: 30px;
    color: #323232;
    margin-right: 1rem;
    margin-top: .6rem;
    cursor: pointer;
}

.p-modal-login {
    padding: 0 2rem;
}

@media only screen and (max-width: 600px) {
    .title-intro h1 {
        font-size: 4rem;
    }

    .header-intro {
        padding: 0 1rem;
    }

    .header-logo h1 {
        margin-top: 1.6rem;
    }

    .v-facebook-login {
        padding: .7rem 0;
        width: 100%;
    }

    .v-facebook-login svg {
        margin-right: 0rem;
    }

    .login-lover {
        width: 100%;
    }

    .intro-app p {
        font-size: .9rem;
    }

    .copyright a {
        font-size: 1rem;
    }

    .modal-content {
        margin-top: 3rem;
    }
}
</style>
