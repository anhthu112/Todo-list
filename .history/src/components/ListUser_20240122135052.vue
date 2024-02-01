<template>
    <div class="list-user">
        <User v-for="user in listUser"
        v-bind:key="user.id"
        />

    </div>
</template>
<script>
import User from './User.vue'
    export default {
        name: 'list-user', 
        props:{
            type:Array,
        },
        data (){
            return {

            }
        },
        components: {
            User
        }
    }    
</script>