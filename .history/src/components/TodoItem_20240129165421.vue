<template>
  <p>{{ todoProps }}</p>
  <button class="delete">Delete</button>
</template>

<script>
export default {
    name:'todo-item',
    props:['todoProps']
}
</script>

<style>

</style>