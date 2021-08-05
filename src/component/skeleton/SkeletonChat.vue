<template>
<div class="skeleton-wrapper-chat light">
    <div class="skeleton-chat">
        <SkeletonElement type="chat" />
        <SkeletonElement type="title-chat" />
    </div>
    <Shimmer />
</div>
</template>

<script>
import Shimmer from './Shimmer.vue'
import SkeletonElement from './SkeletonElement.vue'

export default {
    name: 'SkeletonChat',
    components: {
        Shimmer,
        SkeletonElement
    }
}
</script>