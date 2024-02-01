<template>
    <div class="user">
        <h1>{{ user.email }}</h1>
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
        data (){
            return {
                
            }
        }
    }
</script>