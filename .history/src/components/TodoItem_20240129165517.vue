<template>
  <p>{{ todoProps }}
    <button class="delete">Delete</button>
</p>
  
</template>

<script>
export default {
    name:'todo-item',
    props:['todoProps']
}
</script>

<style>

</style>