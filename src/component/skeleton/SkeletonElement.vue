<template>
<div :class="'skeleton ' + type">

</div>
</template>

<script>
export default {
    name: 'SkeletonElement',
    props: ['type'],
}
</script>
