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
                <div class="group-input">
                    <input type="text" placeholder="Phone Number" v-model="phone">
                    <span class="error" v-if="errorPhone">* Invalid Phone!</span>
                </div>
                <div class="group-input">
                    <input type="password" placeholder="Password" v-model="password">
                    <span class="error" v-if="errorPassword">* Invalid Password!</span>
                </div>
                <div class="redirect-login" data-bs-toggle="modal" data-bs-target="#signup">
                    <span data-bs-dismiss="modal" aria-label="Close">Do you want to Account?</span>
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

export default {
    name: 'SignIn',
    setup() {

        const phone = ref('')
        const password = ref('')

        const errorPhone = ref(false)
        const errorPassword = ref(false)

        const validation = () => {
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
        }

        const onSignIn = () => {

            validation()

            const data = {
                phone: phone.value,
                password: password.value
            }

            console.log(data)

        }

        return {
            phone,
            password,
            errorPhone,
            errorPassword,
            validation,
            onSignIn
        }

    }
}
</script>

<style>
.redirect-login {
    text-align: end;
    margin-top: 1rem;
    cursor: pointer;
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
