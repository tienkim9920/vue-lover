<template>
<div class="modal-dialog">
    <div class="modal-content">
        <div class="d-flex justify-content-end">
            <i class="fa fa-remove close-login" data-bs-dismiss="modal" aria-label="Close"></i>
        </div>
        <div class="p-modal-login">
            <div class="d-flex justify-content-center">
                <div class="text-center">
                    <img class="img-modal-login" src="../../assets/icon.png" alt="">
                    <h3 class="h-start">SIGN IN</h3>
                </div>
            </div>
            <div>
                <div v-if="error" class="text-center error">
                    * Note: {{ error }}
                </div>
                <div class="group-input">
                    <input type="text" placeholder="Phone Number" v-model="phone">
                    <span class="error" v-if="errorPhone">* Invalid Phone!</span>
                </div>
                <div class="group-input">
                    <input type="password" placeholder="Password" v-model="password">
                    <span class="error" v-if="errorPassword">* Invalid Password!</span>
                </div>
                <div class="redirect-login">
                    <span 
                        data-bs-dismiss="modal" aria-label="Close"
                        data-bs-toggle="modal" data-bs-target="#signup"
                        >Do you want to Account?</span>
                </div>
                <div class="btn-modal-signin">
                    <input type="submit" value="SIGN IN" @click="onSignIn">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    ref
} from 'vue'

import {
    useRouter
} from 'vue-router'
import UserAPI from '../../api/UserAPI'

export default {
    name: 'SignIn',
    setup() {

        const phone = ref('')
        const password = ref('')

        const errorPhone = ref(false)
        const errorPassword = ref(false)

        const error = ref('')

        const router = useRouter()

        const onSignIn = async () => {

            if (!phone.value) {
                errorPhone.value = true
                errorPassword.value = false
                return
            }

            if (!password.value) {
                errorPhone.value = false
                errorPassword.value = true
                return
            }

            errorPhone.value = false
            errorPassword.value = false

            const body = {
                phone: phone.value,
                password: password.value
            }

            const res = await UserAPI.login(body)

            if (res === "Please Checking Phone Again!"){
                error.value = 'Please Checking Phone Again!'
            }else if (res === 'Please Checking Password Again!'){
                error.value = 'Please Checking Password Again!'
            }else{
                document.getElementsByClassName('modal-backdrop')[0].setAttribute("style", 
                    "background-color: transparent !important; width: 0vw !important; height: 0vh !important; position: none !important;")
                document.getElementsByClassName('modal-backdrop')[1].setAttribute("style", 
                    "background-color: transparent !important; width: 0vw !important; height: 0vh !important; position: none !important;")
                
                sessionStorage.setItem('idUser', res._id)

                router.push('/home')
            }

        }

        return {
            phone,
            password,
            errorPhone,
            errorPassword,
            error,
            onSignIn
        }

    }
}
</script>

<style>
.redirect-login {
    text-align: end;
    margin-top: 1rem;
}

.redirect-login:hover {
    color: #FD546C;
}

.btn-modal-signin {
    display: flex;
    justify-content: center;
    margin: 3rem 0;
}

.btn-modal-signin input {
    width: 100%;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: .05rem;
    font-size: 1.1rem;
    padding: .7rem 0;
    background-color: #FD546C;
    border-radius: 2rem;
    outline: none;
    border: none;
}

.btn-modal-signin input:hover {
    background-color: #f83a56;
}

.error {
    color: rgb(255, 102, 102);
    padding-left: .5rem;
}

.group-input {
    margin-top: 1rem;
}

.group-input input {
    width: 100%;
    outline: none;
    border: none;
    background-color: #F5F7FA;
    padding: .5rem 1rem;
    font-size: 1.1rem;
}
</style>
