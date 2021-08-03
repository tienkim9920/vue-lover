<template>
<div class="skeleton-wrapper-circle light">
    <div class="skeleton-circle">
        <SkeletonElement type="circle" />
        <SkeletonElement type="title-circle" />
    </div>
    <Shimmer />
</div>
</template>

<script>
import Shimmer from './Shimmer.vue'
import SkeletonElement from './SkeletonElement.vue'

export default {
    name: 'SkeletonMess',
    components: {
        Shimmer,
        SkeletonElement
    }
}
</script>
