<template>
<div class="skeleton-wrapper-another light">
    <SkeletonElement type="thumbnail" />
    <SkeletonElement type="title" />
    <SkeletonElement type="detail" />
    <Shimmer />
</div>
</template>

<script>
import Shimmer from './Shimmer.vue'
import SkeletonElement from './SkeletonElement.vue'

export default {
    name: 'SkeletonAnother',
    components: {
        Shimmer,
        SkeletonElement
    }
}
</script>
