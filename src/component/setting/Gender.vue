<template>
<div class="layout-profile">
    <transition name="show" appear>
        <div class="wrapper-profile-user" style="padding-bottom: 5rem; background-color: #f8f8f8">
            <div class="header-edit">
                <span>Gender</span>
                <router-link to="/home/setting/edit" class="close-edit">Done</router-link>
            </div>
            <div class="body-about-edit" style="margin-top: 5rem">
                <div class="title-body-edit">
                    Option
                </div>
                <div class="link-body-edit" @click="changeGender('male')">
                    <a class="a-gender">Men</a>
                    <i class="fa fa-check icon-check-gender" v-if="gender === 'male'"></i>
                </div>
                <div class="link-body-edit" @click="changeGender('female')" style="border-top: 1px solid #f8f8f8">
                    <a class="a-gender">Female</a>
                    <i class="fa fa-check icon-check-gender" v-if="gender === 'female'"></i>
                </div>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'Gender',
    setup() {
        
        const gender = ref('male')

        const changeGender = (value) => {
            gender.value = value
        }

        return {
            gender,
            changeGender
        }
        
    },
}
</script>

<style>
.icon-check-gender{
    font-size: 20px;
    margin-top: .2rem;
    color: #FE5A62;
}
</style>
