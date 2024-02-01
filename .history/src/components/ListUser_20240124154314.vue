<template>
    <div class="list-user">
      <User v-for="us in listUser" v-bind:key="us.id" v-bind:us="us" />
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
  