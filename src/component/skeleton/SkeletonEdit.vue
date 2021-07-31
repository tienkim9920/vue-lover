<template>
<div class="skeleton-wrapper-edit light">
    <SkeletonElement type="avatar" />
    <Shimmer />
</div>
</template>

<script>
import Shimmer from './Shimmer.vue'
import SkeletonElement from './SkeletonElement.vue'

export default {
    name: 'SkeletonEdit',
    components: {
        Shimmer,
        SkeletonElement
    }
}
</script>