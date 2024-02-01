<template>
    <div class="list-user">
      <User  v-bind:key="user.id" v-bind:user="user" />
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
    },
    components: {
      User,
    },
  };
  </script>
  