<template>
<transition name="icon" appear>
    <div class="group-icon-message">
        <div class="box-icon-message">
            <div v-for="(item, index) in icon" :key="index">
                <li @click="addIcon(index)" class="li-icon-message">{{ item.emoji }}</li>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    name: 'Icon',
    props: ['icon'],
    methods: {
        addIcon(value){
            this.$emit('handlerIcon', value)
        }
    }
}
</script>

<style>
.icon-enter-from{
    transform: translateY(50px);
    opacity: 0;
}

.icon-enter-to{
    transform: translateY(0px);
    opacity: 1;
}

.icon-enter-active{
    transition: all .3s ease-in;
}

.li-icon-message{
    list-style: none;
    font-size: 1.3rem;
}

.group-icon-message {
    position: absolute;
    top: 60%;
    width: 100%;
    height: 200px;
    overflow-y: scroll;
}

.box-icon-message {
    border-top: 1px solid #e2e2e2;
    display: grid;
    grid-template-columns: repeat(8, minmax(auto, 1fr));
    gap: 10px;
    padding: .5rem 1rem;
}

@media only screen and (max-width: 600px) {
    .group-icon-message {
        top: 51.3% !important;
    }
}
</style>
