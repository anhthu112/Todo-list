<template>
    <div class="list-user">
      <User v-for="user in listUser" :key="user.id" :user="user" />
    </div>
  </template>
  
  <script>
  import User from './User.vue';
  
  export default {
    name: 'ListUser',
    props: {
      listUser: {
        type: Array,
        default: () => [],
      },
    },
    components: {
      User,
    },
  };
  </script>
  