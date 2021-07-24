<template>
<div class="nav-mobile">
    <li class="li-nav-mobile">
        <router-link to='/home'><i class="fa fa-home"></i></router-link>
    </li>
    <li class="li-nav-mobile">
        <router-link to='/home/another'><i class="fa fa-heart"></i></router-link>
    </li>
    <li class="li-nav-mobile">
        <router-link to='/home/message'><i class="fa fa-comment"></i></router-link>
    </li>
    <li class="li-nav-mobile">
        <router-link to='/home/setting'><i class="fa fa-user"></i></router-link>
    </li>
</div>
</template>

<script>
export default {
    name: 'NavMobile',
    setup() {

    },
}
</script>

<style>
.nav-mobile {
    display: none;
}

.li-nav-mobile .router-link-active{
    background-color: transparent !important;
    border: none !important;
}

.li-nav-mobile .exact-active i {
    color: #FD546C !important;
}

.li-nav-mobile i {
    color: #f0f0f0;
    font-size: 30px;
}

</style>
