<template>
  <div class="container">
    <button v-on:click="title='Yoon Jeonghan'">Thay đổi title từ comp app.vue</button>
    <CompHeader v-bind:title="title"
    v-on:changeTitle="handleChangeTitle"
    />
    <ListUser v-bind:listUser="listUser"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ComFooter v-bind:title="title"/>    
  </div>

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
        {id:1000, email:'anhthu1@gamil.com', active: true},
        {id:1001, email:'anhth2@gamil.com', active: true},
        {id:1002, email:'anhthu3@gamil.com', active: true},
        {id:1003, email:'anhthu4@gamil.com', active: false}
      ]
    }
  },
  components: {
    HelloWorld,
    CompHeader,
    ComFooter,
    ListUser
},
  methods:{
    handleChangeTitle(){
      console.log('sucess');
    }
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
