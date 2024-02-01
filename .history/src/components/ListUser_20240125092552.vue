<template>
    <div class="list-user">
      <User v-for="users in listUser" v-bind:key="users.id" v-bind:user="users"
      v-on:deleteUsert="deleteUser"
       />
      <h2> {{ text }}</h2>
    </div>
</template>
  
  <script>
  import User from './User.vue';
  export default {
    name: 'ListUser',
    props: {
      listUser: {
        type: Array,
      },
      text: {
        type: String,
      }
    },
    components: {
      User,
    },
    methods:{
      deleteUser(data){
        this.$emit('')
        console.log('delete trong listuser',data)
      }
    }
  };
  </script>
  