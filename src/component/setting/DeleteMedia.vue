<template>
<div class="modal-dialog">
    <div class="modal-content">
        <div class="d-flex justify-content-end">
            <i class="fa fa-remove close-login" data-bs-dismiss="modal" aria-label="Close"></i>
        </div>
        <div class="p-modal-login">
            <div class="d-flex justify-content-center">
                <div class="text-center">
                    <img class="img-modal-login" src="../../assets/icon.png" alt="">
                    <h3 class="h-start">Do you want to delete media?</h3>
                </div>
            </div>
            <div class="d-flex justify-content-center" style="margin: 2rem">
                <div class="btn-edit-setting">
                    <a data-bs-dismiss="modal" aria-label="Close" @click="onDelete">Yes</a>
                </div>
                &nbsp;
                <div class="btn-edit-setting">
                    <a>No</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'DeleteMedia',
    props: ['index'],
    methods: {
        onDelete(){
            this.$emit('delete', this.index)
        }
    }  
}
</script>

<style>

</style>
