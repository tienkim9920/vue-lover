<template>
<div class="layout-profile">
    <transition name="show" appear>
        <div class="wrapper-profile-user">
            <div class="header-edit">
                <span>Edit Info</span>
                <router-link to="/home/setting" class="close-edit">Done</router-link>
            </div>
            <div class="body-image-edit">
                <div class="grid-image-edit" v-if="!profile">
                    <div v-for="index in [0,1,2,3,4,5,6,7,8]" :key="index">
                        <SkeletonEdit />
                    </div>
                </div>
                <div class="grid-image-edit" v-if="profile">
                    <div class="box-image-edit" v-for="index in [0,1,2,3,4,5,6,7,8]" :key="index">
                        <div v-for="(item, position) in profile.image" :key="position">
                            <div class="position-edit" v-if="index === position">
                                <div v-bind:class="item">
                                    <img :src="item.url">
                                </div>
                                <i class="fa fa-close icon-image-upload" @click="getPosition(position)" data-bs-toggle="modal" data-bs-target="#deleteMedia"></i>
                            </div>
                        </div>
                        <router-link to="/home/setting/edit/addmedia" v-if="length < index">
                            <div class="position-edit">
                                <div class="img-edit-unactive">

                                </div>
                                <i class="fa fa-plus edit-plus"></i>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="btn-add-image-edit">
                    <router-link to="/home/setting/edit/addmedia">ADD MEDIA</router-link>
                </div>
            </div>
            <div class="body-about-edit">
                <div class="title-body-edit">
                    Full Name
                </div>
                <input v-model="fullname" type="text" class="input-body-edit" placeholder="Add full name">
            </div>
            <div class="body-about-edit">
                <div class="title-body-edit">
                    Age
                </div>
                <input v-model="age" type="text" class="input-body-edit" placeholder="Add age">
            </div>
            <div class="body-about-edit">
                <div class="title-body-edit">
                    Address
                </div>
                <a href="/home/setting/edit/address" class="link-body-edit">
                    <a class="a-gender">{{ address }}</a>
                    <i class="fa fa-chevron-right" style="color: gray; margin-top: .25rem"></i>
                </a>
            </div>
            <div class="body-about-edit">
                <div class="title-body-edit">
                    Gender
                </div>
                <router-link to="/home/setting/edit/gender" class="link-body-edit">
                    <a class="a-gender">{{ gender }}</a>
                    <i class="fa fa-chevron-right" style="color: gray; margin-top: .25rem"></i>
                </router-link>
            </div>
            <div class="body-about-edit">
                <div class="title-body-edit">
                    About Tiền Kim
                </div>
                <input v-model="about" type="text" class="input-body-edit" placeholder="Add about you">
            </div>
        </div>
    </transition>

    <div class="modal fade" id="deleteMedia">
        <DeleteMedia :index="position" @delete="handlerDelete" />
    </div>
</div>
</template>

<script>
import {
    ref,
    watch,
    watchEffect
} from 'vue'
import useDebouncedRef from './useDebouncedRef'
import UserAPI from '../../api/UserAPI'
import SkeletonEdit from '../skeleton/SkeletonEdit.vue'
import DeleteMedia from './DeleteMedia.vue'

export default {
    name: 'Edit',
    components: {
        SkeletonEdit,
        DeleteMedia
    },
    setup() {
        const fullname = useDebouncedRef('', 2000)
        const age = useDebouncedRef('', 2000)
        const address = ref('')
        const about = useDebouncedRef('', 2000)
        const gender = ref('')
        const profile = useDebouncedRef(null, 2000)
        const length = ref(null)
        const position = ref('')

        watchEffect(async () => {
            const user = await UserAPI.detail(sessionStorage.getItem('idUser'))

            profile.value = user
            length.value = user.image.length - 1

            fullname.value = user.fullname
            age.value = user.age
            address.value = user.address
            about.value = user.bio
            gender.value = user.gender
        })

        watch(fullname, async (newFullname) => {

            const body = {
                _id: sessionStorage.getItem('idUser'),
                fullname: newFullname
            }

            const user = await UserAPI.fullname(body)

            console.log(user)

        })

        watch(age, async (newAge) => {

            const body = {
                _id: sessionStorage.getItem('idUser'),
                age: newAge
            }

            const user = await UserAPI.age(body)

            console.log(user)

        })

        watch(about, async (newAbout) => {
            const body = {
                _id: sessionStorage.getItem('idUser'),
                bio: newAbout
            }

            const user = await UserAPI.about(body)

            console.log(user)
        })

        const getPosition = (value) => {
            position.value = value
        }

        const handlerDelete = async (value) => {

            profile.value = null

            const body = {
                _id: sessionStorage.getItem('idUser'),
                position: value
            }

            const user = await UserAPI.deleteMedia(body)

            setTimeout(() => {
                profile.value = user
                length.value = user.image.length - 1
            }, 2000)
        }

        return {
            fullname,
            age,
            address,
            about,
            gender,
            profile,
            length,
            position,
            handlerDelete,
            getPosition
        }
    },
}
</script>

<style>
.wrapper-profile-user{
    padding-bottom: 5rem; 
    background-color: #f8f8f8 !important;
}

.link-body-edit {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: .6rem 1rem;
    text-decoration: none;
    cursor: pointer;
}

.a-gender:hover {
    color: gray;
}

.a-gender {
    font-family: 'Raleway', sans-serif;
    color: gray;
    text-decoration: none;
}

.input-body-edit {
    width: 100%;
    padding: .6rem 1rem;
    outline: none;
    border: none;
    font-family: 'Raleway', sans-serif;
    color: gray;
}

.body-about-edit {
    margin-top: 2rem;
}

.title-body-edit {
    padding: 0 1rem;
    color: gray;
    text-transform: uppercase;
}

.btn-add-image-edit {
    text-align: center;
    padding: 1.5rem 0 1rem 0;
}

.btn-add-image-edit a {
    text-decoration: none;
    color: #fff !important;
    text-transform: uppercase;
    letter-spacing: .05rem;
    font-size: .9rem;
    padding: .6rem 6rem;
    background-color: #FD546C;
    border-radius: 2rem;
    cursor: pointer;
    box-shadow: 0 0 0.2em 0.2em rgba(170, 170, 170, 0.25);
}

.btn-add-image-edit a:hover {
    background-color: #ff405c;
}

.edit-plus {
    position: absolute;
    top: 40%;
    left: 39%;
    color: #fff !important;
    background-color: #FD546C !important;
}

.position-edit {
    position: relative;
}

.box-image-edit i {
    color: #FD546C;
    background-color: #fff;
    padding: .3rem .45rem;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 0 0.2em 0.2em rgba(170, 170, 170, 0.25);
}

.box-image-edit .icon-image-upload {
    position: absolute;
    top: 85%;
    left: 85%;
}

.grid-image-edit {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    gap: 15px;
}

.body-image-edit {
    padding: .6rem .8rem;
    background-color: #fcfcfc;
}

.img-edit-unactive {
    width: 100%;
    height: 140px;
    border-radius: .5rem;
    background-color: #e4e4e4;
}

.box-image-edit img {
    width: 100%;
    height: 140px;
    border-radius: .5rem;
}

.header-edit {
    padding: .6rem 0;
    font-size: 1.2rem;
    text-align: center;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
    z-index: 999;
}

.close-edit {
    position: absolute;
    top: 1.5%;
    left: 87%;
    font-size: 1rem;
    color: #FD546C;
    cursor: pointer;
    text-decoration: none;
}

.close-edit:hover {
    color: #FD546C;
}

@media only screen and (max-width: 600px) {
    .header-edit {
        position: fixed !important;
        width: 100%;
    }

    .close-edit {
        top: 25% !important;
        left: 86% !important;
    }

    .body-image-edit {
        padding: 4rem .8rem .6rem .8rem !important;
    }

    /* .edit-plus {
        margin-left: 2.72rem;
    } */
}
</style>
