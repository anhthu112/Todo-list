<template>
  <div class="container">
  <CompTodo/>
  </div>
  

</template>

<script>
import CompTodo from './components/CompTodo.vue';

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
      ],
      
      textSvt: "Seventen",
    }
  },
  components: {
    CompHeader,
    ComFooter,
    ListUser,
    DemoRef,
    CompTodo,
},
  methods:{
    changeTitleEvent(){
      console.log('sucess');
      this.title="Hello Anna";
    },
    handleDeleteUser(data) {
  console.log('mit moi', data);
  this.listUser = this.listUser.filter(a => a.id !== data.id);
  console.log(this.listUser);
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
