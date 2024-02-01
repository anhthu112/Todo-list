<template>
    <div class="list-user">
        <User />

    </div>
</template>
<script>
import User from './User.vue'
    export default {
        name: 'list-user', 
        data (){
            return {

            }
        },
        components: {
            User
        }
    }    
</script>