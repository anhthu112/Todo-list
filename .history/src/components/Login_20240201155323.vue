<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <!-- <button type="submit" @click="showCompTodo = true">Login</button> -->
        <button type = "submit" @click="handleLogin">Login</button>
      </form>
    </div>
  </template>
  <script>
  export default {
    name: 'login-page',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        console.log('Username:', this.username);
        console.log('Password:', this.password);
      }
    },
  };
  </script>
  
  <style scoped>

    .container {
    width: 300px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f5f5f5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
    text-align: center;
    color: #333;
    }

    form {
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    label {
    margin-bottom: 5px;
    }

    input[type="text"],
    input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    }

    button[type="submit"] {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    }

    button[type="submit"]:hover {
    background-color: #0056b3;
    }

  </style>
  