<template>
    <div v-if="!showLogin">
        <AddTodo @add-todo="addTodo" />
        <TodoItem
            v-for="todoItem in todo"
            :key="todoItem.id"
            :todoProps="todoItem"
            @item-complete="markComplete"
            @deleteItem="deleteItem(todoItem.id)"
        />
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import AddTodo from './AddTodo.vue';
import axios from 'axios';

export default {
    name: 'ToDo',
    data() {
        return {
            todo: []
        };
    },
    methods: {
        async getAlltodo() {
            try {
                const res = await axios.get('http://localhost:3000/posts');
                this.todo = res.data;
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        },
        markComplete(todoItem) {
            console.log(todoItem);
            todoItem.completed = !todoItem.completed;
            console.log(todoItem.completed);
        },
        async deleteItem(itemId) {
            try {
                await axios.delete(`http://localhost:3000/posts/${itemId}`);
                console.log(`Item ${itemId} deleted.`);
                this.todo = this.todo.filter(item => item.id !== itemId);
            } catch (err) {
                console.log(err);
            }
        },
        async addTodo(newTodo) {
            try {
                const res = await axios.post('http://localhost:3000/posts', newTodo);
                console.log("New todo added:", res.data);
                this.todo.push(res.data);
            } catch (err) {
                console.log(err);
            }
        }
    },
    mounted() {
        this.getAlltodo();
    },
    components: {
        TodoItem,
        AddTodo,
    },
};
</script>

<style>
</style>
