<template>
  <div class="container">
    <template v-if="loggedIn">
      <CompTodo/>
    </template>
    <template v-else>
      <Login @login-success="handleLoginSuccess"/>
    </template>
  </div>
</template>

<script>
import CompTodo from './components/CompTodo.vue';
import Login from './components/Login.vue'

export default {
  name: 'App',

  components: {
    CompTodo,
    Login,
  },

  data() {
    return {
      loggedIn: false
    };
  },

  methods: {
    handleLoginSuccess() {
      // Cập nhật trạng thái đăng nhập thành công
      this.loggedIn = true;

      // Thực hiện điều hướng sang trang CompTodo
      this.$router.push('/comptodo'); // Đảm bảo bạn đã cấu hình router trong ứng dụng Vue.js của bạn.
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
.container{
    display: flex;
    justify-content: center;
  }
</style>
