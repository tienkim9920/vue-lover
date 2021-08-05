<template>
<div class="header-matches-mobile">
    <div class="header-logo">
        <img src="../../assets/icon.png" alt="">
        <h1>Lover</h1>
    </div>
</div>
<transition name="profile" appear>
    <div class="show-matches" v-if="showMatch">
        <div class="profile-show-matches profile-header">
            <div class="img-profile-header">
                <div v-for="(item, index) in showMatch.id_userTo.image" :key="index">
                    <img v-bind:class="(showImageMatch === index) ? 'image-show-matches active-image-matches' : 'image-show-matches unactive-image-matches'" :src="item.url" alt="">
                </div>
            </div>

            <div class="view-title-matches">
                <span>IT'S A</span>
                <h1>MATCH!</h1>
            </div>
            <a class="close-show-matches">
                <i class="fa fa-remove" @click="handlerCloseMatch"></i>
            </a>
            <div class="count-image-line" v-bind:style="{ gridTemplateColumns: gridTemplateColumnsMatches }">
                <div v-for="(item, index) in showMatch.id_userTo.image" :key="index" v-bind:class="(showImageMatch === index) ? 'active-image-line' : 'unactive-image-line'">
                </div>
            </div>
            <a class="view-image arrow-next" v-if="showImageMatch < lengthMatch - 1" @click="nextImageMatch">
                <i class="fa fa-chevron-right" style="font-size: 26px; color: #fff"></i></a>
            <a class="view-image arrow-prev" v-if="showImageMatch !== 0" @click="prevImageMatch">
                <i class="fa fa-chevron-left" style="font-size: 26px; color: #fff"></i></a>
        </div>
    </div>
</transition>
<div class="group-doituong" v-if="listMatches">
    <div v-for="(user, index) in listMatches" :key="index">
        <div v-bind:class="(showUser === index) ? 'list-doituong active' : 'list-doituong unactive'">
            <div class="detail-doituong">
                <div v-for="(item, index) in user.id_userTo.image" :key="index">
                    <img v-bind:class="(showImage === index) ? 'active-image-matches' : 'unactive-image-matches'" :src="item.url" alt="">
                </div>
                <div class="count-image-line" v-bind:style="{ gridTemplateColumns: gridTemplateColumns }">
                    <div v-for="(item, index) in user.id_userTo.image" :key="index" v-bind:class="(showImage === index) ? 'active-image-line' : 'unactive-image-line'">
                    </div>
                </div>

                <div class="group-matches-name-nav-mobile">
                    <span>{{ user.id_userTo.fullname}}</span>
                    <router-link :to="'/home/profile/' + user.id_userTo._id">
                        <i class="fa fa-address-book" style="font-size:32px; color: #FE5A62"></i>
                    </router-link>
                </div>

                <div class="line-matches">
                    <div class="line-matches-child"></div>
                </div>

                <a class="view-image arrow-next" v-if="showImage < user.id_userTo.image.length - 1" @click="nextImage">
                    <i class="fa fa-chevron-right" style="font-size: 26px; color: #fff"></i></a>
                <a class="view-image arrow-prev" v-if="showImage !== 0" @click="prevImage">
                    <i class="fa fa-chevron-left" style="font-size: 26px; color: #fff"></i></a>
                <div class="group-option-user">
                    <i class="fa fa-close icon-option-delete" @click="clickUnlike(user._id)" style="color: #FE5266"></i>
                    <i class="fa fa-star icon-option-star" @click="clickSupper(user._id)" style="color: #36CAF6"></i>
                    <i class="fa fa-heart icon-option-tym" @click="clickLike(user._id)" style="color: #23EBC2"></i>
                </div>
            </div>
            <div class="group-matches-name">
                <span>{{ user.id_userTo.fullname }}</span>
                <router-link :to="'/home/profile/' + user.id_userTo._id">
                    <i class="fa fa-address-book" style="font-size:32px; color: #FE5A62"></i>
                </router-link>
            </div>
        </div>
    </div>
    <div class="msgEnd" v-if="msgEnd">
        Please reload page to update lover!
    </div>
    <div class="msgEnd" v-if="length === 0">
        We ran out of object for you!
    </div>
</div>
<div class="group-doituong" v-if="!listMatches">
    <div class="wrapper-loading">
        <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>
    </div>
</div>

<!-- <div>
    <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
        <li v-for="item in getList(1)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
            {{ item.title }}
        </li>
    </div>
    <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
        <li v-for="item in getList(2)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
            {{ item.title }}
        </li>
    </div>
</div> -->
</template>

<script>
import MatchesAPI from '../../api/MatchesAPI'
import queryString from 'query-string'
// import {
//     ref,
//     watchEffect,
// } from 'vue'

export default {
    name: 'Match',
    // data: () => {
    //     return {
    //         image: [{
    //                 id: 1,
    //                 src: avt2
    //             },
    //             {
    //                 id: 2,
    //                 src: avt3
    //             },
    //         ],
    //         showImage: 1,
    //         gridTemplateColumns: '',
    //         items: [{
    //                 id: 1,
    //                 title: "Item A",
    //                 list: 1
    //             },
    //             {
    //                 id: 2,
    //                 title: "Item B",
    //                 list: 1
    //             },
    //             {
    //                 id: 3,
    //                 title: "Item C",
    //                 list: 2
    //             },
    //         ],
    //     }
    // },
    // created() {
    //     this.gridTemplateColumns = `repeat(${this.image.length}, minmax(60px, 1fr))`
    // },

    // methods: {
    //     nextImage() {
    //         this.showImage = this.showImage + 1
    //     },

    //     prevImage() {
    //         this.showImage = this.showImage - 1
    //     },

    //     getList(list) {
    //         return this.items.filter(item => item.list === list)
    //     },

    //     startDrag(event, item) {
    //         console.log(item)
    //         event.dataTransfer.dropEffect = 'move'
    //         event.dataTransfer.effectAllowed = 'move'
    //         event.dataTransfer.setData('itemID', item.id)
    //     },

    //     onDrop(event, list) {
    //         const itemID = event.dataTransfer.getData('itemID')
    //         const index = this.items.findIndex(item => item.id === parseInt(itemID))
    //         this.items[index].list = list
    //     }
    // },
    data: () => {
        return {
            listMatches: null,
            showUser: 0,
            showImage: 0,
            gridTemplateColumns: '',
            msgEnd: false,
            length: null,
            gridTemplateColumnsMatches: '',
            showMatch: null,
            showImageMatch: 0,
            lengthMatch: null
        }
    },
    async created() {

        const params = {
            _id: sessionStorage.getItem('idUser')
        }

        const query = '?' + queryString.stringify(params)

        const list = await MatchesAPI.listObject(query)

        setTimeout(() => {
            this.listMatches = list
            this.length = list.length

            if (list.length < 1) {
                return
            }

            this.gridTemplateColumns = `repeat(${list[this.showUser].id_userTo.image.length}, minmax(60px, 1fr))`
        }, 3000);

    },
    methods: {
        nextImage() {
            this.showImage = this.showImage + 1
        },
        prevImage() {
            this.showImage = this.showImage - 1
        },
        nextImageMatch() {
            this.showImageMatch = this.showImageMatch + 1
        },
        prevImageMatch() {
            this.showImageMatch = this.showImageMatch - 1
        },
        handlerCloseMatch() {
            this.showMatch = null
            this.showImageMatch = 0
        },
        async clickUnlike(value) {

            const body = {
                _id: value
            }

            const res = await MatchesAPI.unlike(body)
            console.log(res)

            if (this.showUser === this.listMatches.length - 1) {
                this.msgEnd = true
                this.showUser = this.showUser + 1
                return
            }

            this.showUser = this.showUser + 1
            this.showImage = 0
            this.gridTemplateColumns = `repeat(${this.listMatches[this.showUser].id_userTo.image.length}, minmax(60px, 1fr))`
        },
        async clickSupper(value) {

            const body = {
                _id: value
            }

            const res = await MatchesAPI.supper(body)
            console.log(res)

            // Kiểm tra msg được trả về để biết đối tượng có được matche với nhau không
            // Nếu có thì hiện lên thông báo
            if (res.msg === 'Matches') {
                this.showMatch = res.match
                this.lengthMatch = res.match.id_userTo.image.length
                this.gridTemplateColumnsMatches = `repeat(${this.showMatch[this.showUser].id_userTo.image.length}, minmax(60px, 1fr))`
            }

            if (this.showUser === this.listMatches.length - 1) {
                this.msgEnd = true
                this.showUser = this.showUser + 1
                return
            }

            this.showUser = this.showUser + 1
            this.showImage = 0
            this.gridTemplateColumns = `repeat(${this.listMatches[this.showUser].id_userTo.image.length}, minmax(60px, 1fr))`
        },
        async clickLike(value) {

            const body = {
                _id: value
            }

            const res = await MatchesAPI.like(body)
            console.log(res)

            // Kiểm tra msg được trả về để biết đối tượng có được matche với nhau không
            // Nếu có thì hiện lên thông báo
            if (res.msg === 'Matches') {
                this.showMatch = res.match
                this.lengthMatch = res.match.id_userTo.image.length
                this.gridTemplateColumnsMatches = `repeat(${this.showMatch.id_userTo.image.length}, minmax(60px, 1fr))`
            }

            if (this.showUser === this.listMatches.length - 1) {
                this.msgEnd = true
                this.showUser = this.showUser + 1
                return
            }

            this.showUser = this.showUser + 1
            this.showImage = 0
            this.gridTemplateColumns = `repeat(${this.listMatches[this.showUser].id_userTo.image.length}, minmax(60px, 1fr))`

        }
    },
}
</script>

<style>
/* .drop-zone {
    width: 50%;
    margin: 50px auto;
    background-color: #ecf0f1;
    padding: 10px;
    min-height: 10px;
}

.drag-el {
    list-style: none;
    background-color: #3298db;
    color: #fff;
    padding: 5px;
    margin-bottom: 10px;
} */

.msgEnd {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    text-align: center;
}

.group-matches-name {
    font-size: 2rem;
    padding: 1rem 1.5rem;
    border: 1px solid #e4e4e4;
    display: flex;
    justify-content: space-between;
    color: #323232;
}

.group-matches-name i {
    margin-top: .6rem;
    cursor: pointer;
    color: #323232;
}

.group-option-user {
    position: absolute;
    top: 85%;
    left: 16%;
}

.icon-option-delete {
    font-size: 45px;
    padding: .8rem 1.2rem;
    border: 1px solid #FE5266;
    border-radius: 50%;
    cursor: pointer;
}

.icon-option-delete:hover {
    background-color: #FE5266;
    color: #fff !important;
    transition: all .5s ease;
}

.icon-option-star {
    font-size: 40px;
    padding: 1rem 1.2rem;
    border: 1px solid #36CAF6;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 1rem;
}

.icon-option-star:hover {
    background-color: #36CAF6;
    color: #fff !important;
    transition: all .5s ease;
}

.icon-option-tym {
    font-size: 40px;
    padding: 1rem 1.1rem;
    border: 1px solid #23EBC2;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 1rem;
}

.icon-option-tym:hover {
    background-color: #23EBC2;
    color: #fff !important;
    transition: all .5s ease;
}

.count-image-line {
    display: grid;
    position: absolute;
    top: .8rem;
    left: 0;
    padding: 0 .5rem;
    width: 100%;
}

.close-show-matches {
    position: absolute;
    top: 1.5rem;
    left: 22.5%;
    color: #fff;
    text-decoration: none;
}

.close-show-matches:hover {
    color: #ececec;
}

.close-show-matches i {
    font-size: 26px;
}

.active-image-line {
    height: 5px;
    background-color: #fff;
    margin: 0 .15rem;
    border-radius: 1rem;
}

.unactive-image-line {
    height: 5px;
    background-color: rgb(235, 235, 235, .2);
    margin: 0 .15rem;
    border-radius: 1rem;
}

.list-doituong {
    position: relative;
}

.list-doituong.active {
    display: block;
    animation: fade-matches-in .7s;
}

.list-doituong.unactive {
    display: none;
}

.arrow-next {
    top: 45%;
    left: 87%;
    padding: .5rem .4rem .3rem .7rem;
}

.arrow-prev {
    top: 45%;
    left: 5%;
    padding: .5rem .7rem .3rem .4rem;
}

.view-image {
    position: absolute;
    text-decoration: none;
    cursor: pointer;
    background-color: rgb(240, 240, 240, .3);
}

.group-doituong {
    display: flex;
    justify-content: center;
}

.detail-doituong {
    width: 380px;
    height: 620px;
    border-radius: 4px;
    margin-top: .5rem;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}

.detail-doituong img {
    width: 100%;
    height: 620px;
    /* position: absolute; */
    /* top: 0;
    left: 0; */
}

.active-image-matches {
    display: block;
}

.unactive-image-matches {
    display: none;
}

.show-matches {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.6);
}

.profile-show-matches {
    position: absolute;
    left: 50%;
}

.image-show-matches {
    width: 380px !important;
    height: 710px !important;
}

.view-title-matches{
    position: absolute;
    top: 50%;
    left: 2.5%;
    text-align: center;
    font-style: italic;
    color: #31FFC7;
}

.view-title-matches span{
    font-size: 1.8rem;
}

.view-title-matches h1{
    font-size: 5rem;
}

@media only screen and (max-width: 600px) {
    .profile-show-matches {
        left: 0% !important;
    }

    .image-show-matches {
        width: 100% !important;
        height: 662px !important
    }

    .show-matches {
        height: 90% !important;
    }

    .close-show-matches {
        left: 90% !important;
    }

    .view-title-matches{
        left: 15% !important;
    }
}

@keyframes fade-matches-in {
    0% {
        opacity: 0;
        transform: scale(.6);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
