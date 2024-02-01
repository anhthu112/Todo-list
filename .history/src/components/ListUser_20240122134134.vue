<template>
    <div class="list-user">
        <User/>

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