<template>
    <form @submit.prevent="addItem">
      <input type="text" placeholder="New member" v-model="title" @input="check" class="input">
      <input type="submit" value="Add" class="add-btn">
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { v4 as uuidv4 } from 'uuid';
  
  export default {
    name: 'AddTodo',
    setup(props, context) {
      const title = ref('');
  
      const check = () => {
        console.log(title.value);
      };
  
      const addItem = event => {
        event.preventDefault();
        const newItem = {
          id: uuidv4(), 
          title: title.value,
          completed: false
        };
        context.emit('add-todo', newItem);
        title.value = '';
      };
  
      return {
        title,
        check,
        addItem,
      };
    },
  };
  </script>
  
  <style>
/* Định dạng chung cho các phần tử trong form */
form {
  display: flex; /* Hiển thị các phần tử trong form trên cùng một hàng ngang */
  align-items: center; /* Căn chỉnh các phần tử theo trục dọc */
}

/* Định dạng cho input text */
.input {
  padding: 8px; /* Kích thước lề của input */
  border: 1px solid #ccc; /* Đường viền của input */
  border-radius: 4px; /* Góc cong của input */
  margin-right: 8px; /* Khoảng cách giữa input text và nút Add */
  font-size: 16px; /* Cỡ chữ của input text */
}

/* Định dạng cho nút Add */
.add-btn {
  padding: 8px 16px; /* Kích thước lề của nút Add */
  background-color: #007bff; /* Màu nền của nút Add */
  color: #fff; /* Màu chữ của nút Add */
  border: none; /* Không có đường viền */
  border-radius: 4px; /* Góc cong của nút Add */
  cursor: pointer; /* Con trỏ hiển thị khi di chuyển qua nút Add */
}

/* Hiệu ứng hover cho nút Add */
.add-btn:hover {
  background-color: #0056b3; /* Màu nền khi di chuột qua */
}

/* Định dạng cho placeholder trong input text */
.input::placeholder {
  color: #aaa; /* Màu chữ của placeholder */
}

/* Định dạng cho input text khi được focus */
.input:focus {
  outline: none; /* Loại bỏ đường viền khi input text được focus */
  border-color: #007bff; /* Màu đường viền khi input text được focus */
}

  </style>
  