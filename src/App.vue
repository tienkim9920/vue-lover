<template>
<router-view />
</template>

<script>
export default {
    name: 'App',
}
</script>

<style>
body {
    font-family: 'Quicksand', sans-serif;
}

/* Skeleton */

.skeleton {
    background: #e2e2e2;
    margin: 10px 0;
    border-radius: 4px;
}

.skeleton.text {
    width: 100%;
    height: 12px;
}

.skeleton.title {
    position: absolute;
    top: 78%;
    left: 5%;
    width: 50%;
    height: 10px;
}

.skeleton.detail {
    position: absolute;
    top: 85%;
    left: 5%;
    width: 30%;
    height: 8px;
}

.skeleton.avatar {
    width: 100%;
}

.skeleton.thumbnail {
    width: 100%;
}

.skeleton-wrapper {
    position: relative;
    overflow: hidden;
    width: 105px;
    height: 130px;
    border-radius: 4px;
}

.skeleton-wrapper-another {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 280px;
    border-radius: 4px;
}

.skeleton-users {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
    align-items: center;
}

/* Theme */
.skeleton-wrapper.light {
    background: #f7f7f7;
    border-radius: 4px;
}

.skeleton-wrapper-another.light {
    background: #f7f7f7;
    border-radius: 4px;
}

/* animation */
.shimmer-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: loading 2.5s infinite;
}

.shimmer {
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    transform: skewX(-20deg);
}

.header-matches-mobile {
    display: none;
}

.group-matches-name-nav-mobile{
    display: none;
}

@keyframes loading {
    0% {
        transform: translateX(-150%);
    }

    50% {
        transform: translateX(-60%);
    }

    100% {
        transform: translateX(150%);
    }
}

/* Mobile For App */

@media only screen and (max-width: 600px) {

    /* Navigation */

    .layout-home {
        grid-template-columns: auto !important;
    }

    .navigation {
        display: none !important;
    }

    /* Navigation */




    /* Matches */
    .header-matches-mobile {
        display: block;
        padding: .2rem .6rem;
    }

    .header-matches-mobile img {
        width: 60px !important;
        height: 60px !important;
    }

    .header-matches-mobile h1 {
        color: #FD546C !important;
        font-size: 1.5rem;
        margin-top: 1rem !important;
    }

    .detail-doituong {
        width: 100% !important;
        height: 100% !important;
        margin-top: 0rem !important;
        padding: 0 .3rem;
        overflow: hidden !important;
    }

    .detail-doituong img {
        width: 100% !important;
        height: 590px !important;
        border-radius: 10px !important;
    }

    .icon-option-delete {
        font-size: 36px !important;
        padding: .6rem 1rem !important;
    }

    .icon-option-star {
        font-size: 36px !important;
        padding: .6rem .8rem !important;
    }

    .icon-option-tym {
        font-size: 36px !important;
        padding: .6rem .8rem !important;
    }

    .group-option-user {
        top: 87% !important;
        left: 0% !important;
        width: 100% !important;
        text-align: center !important;
    }

    .count-image-line {
        padding: 0 1rem !important;
    }

    .group-matches-name {
        display: none !important;
    }

    .line-matches {
        position: absolute;
        top: 83%;
        left: 0;
        padding: 0 .5rem;
        width: 100%;
    }

    .line-matches-child {
        height: 2px;
        background-color: #fff;
        margin: 0 .4rem;
        border-radius: 1rem;
    }

    .group-matches-name-nav-mobile{
        width: 97%;
        display: block;
        font-size: 2rem;
        padding: 1rem 1.5rem;
        display: flex;
        justify-content: space-between;
        color: #f0f0f0;
        position: absolute;
        top: 70%;
    }

    .group-matches-name-nav-mobile i{
        color: #fff;
    }

    .group-doituong {
        height: 650px !important;
        overflow-y: scroll !important;
        padding: .6rem .2rem;
        background-color: #f3f3f3 !important;
    }

    .nav-mobile{
        display: flex !important;
        justify-content: space-evenly;
        background-color: #fff;
        padding: .8rem 0 !important;
        position: fixed;
        top: 93%;
        width: 100%;
        z-index: 9999;
        /* border-top: 1px solid #e2e2e2; */
    }

    .li-nav-mobile{
        list-style: none;
    }

    /* Matches */



    /* Another */
    .grid-another-body {
        grid-template-columns: repeat(2, minmax(100px, 1fr)) !important;
        gap: 15px;
        padding: 1rem 2rem 3rem 2rem;
    }

    .h5-another-body{
        padding: 2rem 2rem 0rem 2rem;
    }

    .another-see-likes {
        left: 25% !important;
    }

    .like-another h4{
        margin-top: .3rem;
    }

    .like-another{
        margin-top: .2rem;
    }

    .icon-header-another{
        margin-top: .2rem;
    }

    .another-header{
        padding: .9rem 1rem !important;
    }

}
</style>
