<template>
    <p :class="['todo-item', todoProps.completed ? 'is-complete' : '']">
      <input type="checkbox" :checked="todoProps.completed" v-on:change="markItemCompleted"/>
      {{ todoProps.title }}
      <button v-on:click="deleteItem" class="btn-delete">Delete</button>
    </p>
  </template>
  
  <script>
  export default {
      name: 'todo-item',
      data (){
        return {
        }
      },
      props: ['todoProps'],
      methods:{
        markItemCompleted(){
          this.$emit('item-complete',this.todoProps);
        }, 
        deleteItem(){
          this.$emit('deleteItem', this.todoProps);
        }
      }

  }
  </script>
  
  <style>
/* Định dạng chung cho một mục trong danh sách công việc */
.todo-item {
  display: flex; /* Sắp xếp các thành phần trong một hàng ngang */
  align-items: center; /* Căn chỉnh các thành phần theo trục dọc */
  margin-bottom: 8px; /* Khoảng cách giữa các mục */
  font-size: 16px; /* Cỡ chữ */
}

/* Kiểu chữ gạch ngang cho mục đã hoàn thành */
.is-complete {
  text-decoration: line-through;
}

/* Kiểu chữ màu xám cho mục đã hoàn thành */
.is-complete {
  color: #888;
}

/* Ô checkbox */
.todo-item input[type="checkbox"] {
  margin-right: 8px; /* Khoảng cách giữa checkbox và tiêu đề công việc */
}

/* Nút xóa */
.btn-delete {
  margin-left: auto; /* Đẩy nút xóa về phía bên phải */
  background-color: #dc3545; /* Màu nền của nút */
  color: #fff; /* Màu chữ của nút */
  border: none; /* Không có đường viền */
  padding: 4px 8px; /* Kích thước lề nút */
  border-radius: 4px; /* Góc cong */
  cursor: pointer; /* Con trỏ hiển thị khi di chuyển qua nút */
}

/* Hiệu ứng hover cho nút xóa */
.btn-delete:hover {
  background-color: #c82333; /* Màu nền khi di chuột qua */
}

  </style>
  