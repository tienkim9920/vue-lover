<template>
<transition name="profile" appear>
    <div class="setting-mobile">
        <div class="header-setting-mobile">
            <div class="d-flex justify-content-center">
                <div class="info-setting-mobile">
                    <img src="../../assets/avt2.jpg" alt="">
                    <h3>Tiền Kim <span>21</span></h3>
                </div>
            </div>
            <div class="d-flex justify-content-between" style="padding: 0 3.5rem">
                <router-link to="/home/setting/account" class="header-setting-mobile-icon">
                    <i class="fa fa-cog"></i>
                    <div>Settings</div>
                </router-link>
                <router-link to="/home/setting/edit" class="header-setting-mobile-icon">
                    <i class="fa fa-pencil"></i>
                    <div>Edit info</div>
                </router-link>
            </div>
        </div>
        <div class="body-setting-mobile" style="padding: 0 1rem 1rem 1rem">
            <div style="padding-left: 1rem">
                <h3>Tiền Kim <span>21</span></h3>
            </div>
            <div class="detail-profile-body d-flex">
                <i class="fa fa-home" style="font-size:24px"></i>
                <span style="margin-left: .7rem; margin-top: .1rem">Lives In TP. Quy Nhơn</span>
            </div>
            <div class="detail-profile-body d-flex">
                <i class="fa fa-user" style="font-size:24px; margin-left: .1rem"></i>
                <span style="margin-left: .9rem; margin-top: .1rem">Men</span>
            </div>
        </div>
        <div class="bio-setting-mobile">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, porro consequatur.
            Fuga pariatur facere sit placeat. Culpa dolor fugit, dicta cumque unde neque ipsam nulla amet tempora officia enim ea.
        </div>
    </div>
</transition>
</template>

<script>
export default {
    name: 'SettingMobile',
    setup() {

    },
}
</script>

<style>
.profile-enter-from{
    transform: scale(.5);
    opacity: 0;
}

.profile-enter-to{
    transform: scale(1);
    opacity: 1;
}

.profile-enter-active{
    transition: all .3s ease-in;
}

.bio-setting-mobile {
    padding: 1rem 2rem 1rem 2rem;
    font-family: 'Raleway', sans-serif;
}

.body-setting-mobile {
    border-bottom: 1px solid #e2e2e2;
}

.header-setting-mobile-icon {
    text-align: center;
    cursor: pointer;
    text-decoration: none;
}

.header-setting-mobile-icon div {
    color: gray;
    text-transform: uppercase;
    font-size: .9rem;
    margin-top: .2rem;
}

.header-setting-mobile-icon i {
    font-size: 30px;
    color: gray;
    padding: .8rem 1rem;
    border-radius: 50%;
    box-shadow: 0 0 0.25em 0.25em rgba(207, 207, 207, 0.25);
}

.setting-mobile {
    display: none;
}

.header-setting-mobile {
    width: 100%;
    height: 375px;
    background-color: #fff;
    clip-path: ellipse(80% 67% at 50% 25%);
    ;
}

.info-setting-mobile {
    margin-top: 2rem;
}

.info-setting-mobile img {
    width: 128px;
    height: 120px;
    border-radius: 50%;
}

.info-setting-mobile h3 {
    text-align: center;
    padding: .8rem 0;
}
</style>
