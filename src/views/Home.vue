<template>
<div class="layout-home">
    <Navigation />
    <!-- <transition name="route" mode="out-in">
        <router-view v-slot="{ Component }">
            <component :is="Component"></component>
        </router-view>
    </transition> -->

    <router-view></router-view>
</div>
</template>

<script>
import Navigation from '../component/share/Navigation.vue'

export default {
    name: 'Home',
    components: {
        Navigation
    },
    setup() {

    },
}
</script>

<style>
.layout-home {
    display: grid;
    grid-template-columns: 0.53fr 1.6fr;
}

/* route transitions */
.route-enter-from {
    opacity: 0;
}

/* .route-enter-to {
    opacity: 1;
} */

.route-enter-active {
    transition: all 0.3s ease-out;
}

/* 
.route-leave-from {
    opacity: 1;
} */

.route-leave-to {
    opacity: 0;
}

.route-leave-active {
    transition: all 0.3s ease-in;
}
</style>
