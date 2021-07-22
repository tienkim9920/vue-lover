<template>
<div class="skeleton-wrapper light">
    <SkeletonElement type="avatar" />
    <Shimmer />
</div>
</template>

<script>
import Shimmer from './Shimmer.vue'
import SkeletonElement from './SkeletonElement.vue'

export default {
    name: 'SkeletonUser',
    components: {
        Shimmer,
        SkeletonElement
    }
}
</script>
