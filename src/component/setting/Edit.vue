<template>
<div class="layout-profile">
    <transition name="show" appear>
        <div class="wrapper-profile-user" style="padding-bottom: 5rem">
            <div class="header-edit">
                <span>Edit Info</span>
                <router-link to="/home/setting" class="close-edit">Done</router-link>
            </div>
            <div class="body-image-edit">
                <div class="grid-image-edit">
                    <div class="box-image-edit">
                        <div class="position-edit">
                            <div>
                                <img src="../../assets/avt2.jpg" alt="">
                            </div>

                            <i class="fa fa-close"></i>
                        </div>
                    </div>
                    <div class="box-image-edit">
                        <div class="position-edit">
                            <div>
                                <img src="../../assets/avt2.jpg" alt="">
                            </div>
                            <i class="fa fa-close"></i>
                        </div>
                    </div>
                    <div class="box-image-edit">
                        <div class="position-edit">
                            <div>
                                <img src="../../assets/avt2.jpg" alt="">
                            </div>
                            <i class="fa fa-close"></i>
                        </div>
                    </div>
                    <div class="box-image-edit">
                        <div class="position-edit">
                            <div>
                                <img src="../../assets/avt2.jpg" alt="">
                            </div>
                            <i class="fa fa-close"></i>
                        </div>
                    </div>
                    <div class="box-image-edit">
                        <div class="position-edit">
                            <div>
                                <img src="../../assets/avt2.jpg" alt="">
                            </div>
                            <i class="fa fa-close"></i>
                        </div>
                    </div>
                    <div class="box-image-edit">
                        <div class="position-edit">
                            <div>
                                <img src="../../assets/avt2.jpg" alt="">
                            </div>
                            <i class="fa fa-close"></i>
                        </div>
                    </div>
                    <div class="box-image-edit">
                        <div class="position-edit">
                            <div class="img-edit-unactive">
                                <!-- <img src="../../assets/avt2.jpg" alt=""> -->
                            </div>
                            <i class="fa fa-plus edit-plus"></i>
                        </div>
                    </div>
                    <div class="box-image-edit">
                        <div class="position-edit">
                            <div class="img-edit-unactive">
                                <!-- <img src="../../assets/avt2.jpg" alt=""> -->
                            </div>
                            <i class="fa fa-plus edit-plus"></i>
                        </div>
                    </div>
                    <div class="box-image-edit">
                        <div class="position-edit">
                            <div class="img-edit-unactive">
                                <!-- <img src="../../assets/avt2.jpg" alt=""> -->
                            </div>
                            <i class="fa fa-plus edit-plus"></i>
                        </div>
                    </div>
                </div>
                <div class="btn-add-image-edit">
                    <a>ADD MEDIA</a>
                </div>
            </div>
            <div class="body-about-edit">
                <div class="title-body-edit">
                    Full Name
                </div>
                <input type="text" class="input-body-edit" placeholder="Add full name">
            </div>
            <div class="body-about-edit">
                <div class="title-body-edit">
                    Address
                </div>
                <input type="text" class="input-body-edit" placeholder="Add address">
            </div>
            <div class="body-about-edit">
                <div class="title-body-edit">
                    Gender
                </div>
                <div class="link-body-edit">
                    <a class="a-gender">Men</a>
                    <i class="fa fa-chevron-right" style="color: gray; margin-top: .25rem"></i>
                </div>
            </div>
            <div class="body-about-edit">
                <div class="title-body-edit">
                    About Tiền Kim
                </div>
                <input type="text" class="input-body-edit" placeholder="Add about you">
            </div>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    name: 'Edit',
    setup() {

    },
}
</script>

<style>
.link-body-edit {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: .6rem 1rem;
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
    font-size: .9rem !important;
    color: #fff !important;
    background-color: #FD546C !important;
}

.position-edit {
    position: relative;
}

.box-image-edit i {
    position: absolute;
    top: 85%;
    left: 85%;
    color: #FD546C;
    background-color: #fff;
    padding: .3rem .45rem;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 0 0.2em 0.2em rgba(170, 170, 170, 0.25);
}

.grid-image-edit {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    gap: 15px;
}

.body-image-edit {
    margin-top: 3rem;
    padding: .6rem .8rem;
    background-color: #f5f5f5;
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
    position: fixed;
    width: 24%;
    padding: .6rem 0;
    font-size: 1.2rem;
    text-align: center;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
    z-index: 999;
}

.close-edit {
    position: absolute;
    top: 25%;
    left: 90%;
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
        width: 100%;
    }

    .close-edit {
        left: 86% !important;
    }

    .body-image-edit {
        margin-top: 0rem !important;
        padding: 4rem .8rem .6rem .8rem !important;
    }
}
</style>
