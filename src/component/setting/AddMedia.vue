<template>
<div class="layout-profile">
    <transition name="show" appear>
        <div class="wrapper-profile-user" style="padding-bottom: 5rem; background-color: #f8f8f8">
            <div class="header-edit">
                <span>Add Media</span>
                <router-link to="/home/setting/edit" class="close-edit">Done</router-link>
            </div>
            <div class="body-about-edit" style="margin-top: 5rem">
                <div class="group-addMedia">
                    <h1>Create New</h1>
                    <span style="font-family: 'Raleway', sans-serif;">Choose a content type</span>
                    <transition name="text" appear v-if="success">
                        <div 
                            class="text-center text-warning" 
                            style="margin-top: 1.8rem; font-size: 1rem">
                            * {{ success }}
                        </div>
                    </transition>
                    <div @click="openUpload" class="box-addMedia">
                        <input @change="handlerUpload" type="file" id="fileUpload" style="display: none" />
                        <div style="padding: 1rem 1.5rem">
                            <span>Upload from</span>
                            <h1>Galley</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
import UserAPI from '../../api/UserAPI'
export default {
    name: 'AddMedia',
    data: () => {
        return {
            success: null
        }
    },
    methods: {
        openUpload() {
            document.getElementById('fileUpload').click()
        },

        async handlerUpload(e) {
            if (e.target.files && e.target.files[0]) {

                const file = e.target.files[0]
                const fileName = e.target.files[0].name

                const formData = new FormData();
                formData.append("file", file);
                formData.append("fileName", fileName);
                formData.append("_id", sessionStorage.getItem('idUser'))

                const res = await UserAPI.media(formData)

                if (res.msg === 'Success'){
                    this.success = 'You have been Upload Media Success!'
                }else{
                    this.success = 'You have been Upload Media Fail!'
                }

                setTimeout(() => {
                    this.success = null
                }, 3000)

            }
        }
    },
    setup() {

    },
}
</script>

<style>
.group-addMedia {
    padding: 1rem 2rem;
}

.box-addMedia {
    margin-top: 2rem;
    background-image: url("https://tinder.com/static/build/33f6a9cb003d5e11ea46d1d91c8e442d.webp");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 6.35rem;
    cursor: pointer;
}

.box-addMedia h1 {
    color: #fff;
    font-size: 2.2rem;
}

.box-addMedia span {
    font-family: 'Raleway', sans-serif;
    font-size: .9rem;
    color: #fff;
}

@media only screen and (max-width: 600px){
    .box-addMedia {
        height: 6.9rem !important;
    }
}
</style>
