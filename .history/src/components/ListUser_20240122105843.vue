<template>
    <div class="list-user">
        <p>List user component</p>
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