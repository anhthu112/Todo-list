<template>
  <div class="container">
    <CompTodo/>
    <Login/>
  </div>
</template>

<script>
import CompTodo from './components/CompTodo.vue';

export default {
  name: 'App',

  components: {
    CompTodo,
},
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
.container{
    display: flex;
    justify-content: center;
  }
</style>
