<template>
    <div class="list-user">
      <User v-for="users in listUser" v-bind:key="users.id" v-bind:user="users" />
      <button> {{ text }}</button>
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
  };
  </script>
  