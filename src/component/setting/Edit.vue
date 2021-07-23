<template>
<div class="layout-profile">
    <div class="wrapper-profile-user">
        <div class="header-edit">
            <span>Edit Info</span>
            <router-link to="/home" class="close-edit">Done</router-link>
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

            <div class="about-edit">
                
            </div>
        </div>

    </div>
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
.btn-add-image-edit{
    text-align: center;
    padding: 1.5rem 0 1rem 0;
}

.btn-add-image-edit a{
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

.btn-add-image-edit a:hover{
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

.img-edit-unactive{
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

.close-edit:hover{
    color: #FD546C;
}

@media only screen and (max-width: 600px) {
    .header-edit {
        width: 100%;
    }
}
</style>
