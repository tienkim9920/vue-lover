<template>
<div class="layout-profile">
    <transition name="show" appear>
        <div class="wrapper-profile-user" style="padding-bottom: 5rem; background-color: #f8f8f8">
            <div class="header-edit">
                <span>Address</span>
                <router-link to="/home/setting/edit" class="close-edit">Done</router-link>
            </div>
            <div class="body-about-edit" style="margin-top: 5rem">
                <div class="title-body-edit">
                    Search
                </div>
                <input type="text" id="to_places" class="input-body-edit" placeholder="Add New Address">
                <transition name="text" appear v-if="success">
                    <div class="text-center text-success" style="margin-top: 1.8rem; font-size: 1rem">
                        * You have been update address success!
                    </div>
                </transition>
                <div class="update-address">
                    <a class="btn-create" @click="handlerAddress">Update Address</a>
                </div>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
import UserAPI from '../../api/UserAPI'
export default {
    name: 'Address',
    data: () => {
        return {
            success: false
        }
    },
    methods: {
        async handlerAddress() {
            const address = document.getElementById('to_places').value

            const body = {
                _id: sessionStorage.getItem('idUser'),
                address
            }

            const user = await UserAPI.address(body)

            this.success = true

            setTimeout(() => {
                this.success = false
            }, 3000)

            console.log(user)
        }
    }
}
</script>

<style>
.update-address {
    text-align: center;
    margin-top: 4rem;
}
</style>
