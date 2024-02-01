<template>
    <div class="user">
        <h1>{{ user.email }}</h1>
        <button class="delete"
        v-on:click="handleDelete"
        >delete</button>
    </div>
</template>
<script>
    export default {
        name: 'userComponent',
        props:{
            user : {
                type: Object,
            }
        },
        methods:{
            handleDelete(e){
                var data={};
                console.log('delete');
                this.$emit('deleteUser',data);
            }
        },
        data (){
            return {
                
            }
        }
    }
</script>
<style>
    .user{
        position: relative;
    }
    .delete{
        position: absolute;
        top:0;
        right:0;
    }
</style>