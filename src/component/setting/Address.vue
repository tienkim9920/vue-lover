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
    methods: {
        async handlerAddress() {
            const address = document.getElementById('to_places').value 
            
            const body = {
                _id: sessionStorage.getItem('idUser'),
                address
            }

            const user = await UserAPI.address(body)

            console.log(user)
        }
    }
}
</script>

<style>
.update-address{
    text-align: center;
    margin-top: 4rem;
}

</style>
