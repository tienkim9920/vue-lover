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

.skeleton.text{
    width: 100%;
    height: 12px;
}

.skeleton.title{
    position: absolute;
    top: 78%;
    left: 5%;
    width: 50%;
    height: 10px;
}

.skeleton.detail{
    position: absolute;
    top: 85%;
    left: 5%;
    width: 30%;
    height: 8px;
}

.skeleton.avatar{
    width: 100%;
}

.skeleton.thumbnail{
    width: 100%;
}

.skeleton-wrapper{
    position: relative;
    overflow: hidden;
    width: 105px;
    height: 130px;
    border-radius: 4px;
}

.skeleton-wrapper-another{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 280px;
    border-radius: 4px;
}

.skeleton-users{
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
    align-items: center;
}

/* Theme */
.skeleton-wrapper.light{
    background: #f7f7f7;
    border-radius: 4px;
}

.skeleton-wrapper-another.light{
    background: #f7f7f7;
    border-radius: 4px;
}

/* animation */
.shimmer-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: loading 2.5s infinite;
}

.shimmer{
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    transform: skewX(-20deg);
}

@keyframes loading {
    0% {
        transform: translateX(-150%);
    }
    50%{
        transform: translateX(-60%);
    }
    100%{
        transform: translateX(150%);
    }
}

</style>
