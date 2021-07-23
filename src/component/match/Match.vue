<template>
<div class="group-doituong">
    <div v-for="(user, index) in users" :key="index">
        <div v-bind:class="(showUser === index) ? 'list-doituong active' : 'list-doituong unactive'">
            <div class="detail-doituong">
                <div v-for="item in user.image" :key="item.id">
                    <img v-bind:class="(showImage === item.id) ? 'active-image-matches' : 'unactive-image-matches'" :src="item.src" alt="">
                </div>
            </div>
            <div class="count-image-line" v-bind:style="{ gridTemplateColumns: `repeat(${user.image.length}, minmax(60px, 1fr))` }">
                <div v-for="item in user.image" :key="item.id" v-bind:class="(showImage === item.id) ? 'active-image-line' : 'unactive-image-line'">
                </div>
            </div>
            <a class="view-image arrow-next" v-if="showImage < user.image.length" @click="nextImage">
                <i class="fa fa-chevron-right" style="font-size: 26px; color: #fff"></i></a>
            <a class="view-image arrow-prev" v-if="showImage !== 1" @click="prevImage">
                <i class="fa fa-chevron-left" style="font-size: 26px; color: #fff"></i></a>
            <div class="group-option-user">
                <i class="fa fa-close icon-option-delete" @click="clickUnlike()" style="color: #FE5266"></i>
                <i class="fa fa-star icon-option-star" style="color: #36CAF6"></i>
                <i class="fa fa-heart icon-option-tym" @click="clickLike()" style="color: #23EBC2"></i>
            </div>
            <div class="group-matches-name">
                <span>Tiền Kim</span>
                <router-link :to="'/home/profile/' + '1'">
                    <i class="fa fa-address-book" style="font-size:32px"></i>
                </router-link>
            </div>
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
import avt2 from "../../assets/avt2.jpg"
import avt3 from "../../assets/avt3.jpg"
import avt4 from "../../assets/avt4.jpg"
import avt5 from "../../assets/avt5.jpg"
import {
    ref,
    reactive,
} from 'vue'

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
    setup() {

        const users = reactive([{
                id: 1,
                name: 'Tiền Kim',
                image: [{
                        id: 1,
                        src: avt2
                    },
                    {
                        id: 2,
                        src: avt3
                    }
                ]
            },
            {
                id: 2,
                name: 'Mỹ Hân',
                image: [{
                        id: 1,
                        src: avt4
                    },
                    {
                        id: 2,
                        src: avt5
                    }
                ]
            }
        ])

        const showUser = ref(0)

        const showImage = ref(1)

        const gridTemplateColumns = ref('')

        const nextImage = () => {
            showImage.value = showImage.value + 1
        }

        const prevImage = () => {
            showImage.value = showImage.value - 1
        }

        const clickLike = () => {
            showUser.value = showUser.value + 1
            showImage.value = 1
        }

        const clickUnlike = () => {
            showUser.value = showUser.value + 1
            showImage.value = 1
        }

        return {
            users,
            showImage,
            showUser,
            gridTemplateColumns,
            nextImage,
            prevImage,
            clickLike,
            clickUnlike
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
    top: 73%;
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

.view-image {
    position: absolute;
}

.arrow-next {
    top: 45%;
    left: 92%;
}

.arrow-prev {
    top: 45%;
    left: 5%;
}

.view-image {
    text-decoration: none;
    cursor: pointer;
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
    position: absolute;
    top: 0;
    left: 0;
}

.active-image-matches {
    display: block;
}

.unactive-image-matches {
    display: none;
}

@keyframes fade-matches-in {
    0%{
        opacity: 0;
        transform: scale(.6);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
}
</style>
