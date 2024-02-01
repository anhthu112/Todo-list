<template>
  <CompHeader v-bind:title="title"/>
  <ListUser />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <ComFooter v-bind:title="title"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CompHeader from './components/CompHeader.vue';
import ComFooter from './components/ComFooter.vue';
import ListUser from './components/ListUser.vue';
export default {
  name: 'App',
  data(){
    return {
      title:'header world',
      listUser : [
        {id:1000, email:'anhthu@gamil.com', active: true}
      ]
    }
  },
  components: {
    HelloWorld,
    CompHeader,
    ComFooter,
    ListUser
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
