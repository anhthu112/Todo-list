<template>
    <div class="list-user">
        <p>List user component</p>
        <User 
        v-for="user in list user"
        v-bind:key="user.id"
        />

    </div>
</template>
<script>
import User from './User.vue'
    export default {
        name: 'list-user', 
        props: {
            listUser:{
                type:Array,
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