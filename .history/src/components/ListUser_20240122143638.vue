<template>
    <div class="list-user">
        <User v-for="user in listUser"
        v-bind:key="user.id"
        v-bind:user="user"
        />
    </div>
</template>
<script>
import User from './User.vue'
    export default {
        name: 'list-user', 
        props:{
            listUser:{
                type: Array,
                default:[]
            }
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