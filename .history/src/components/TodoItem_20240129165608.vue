<template>
  <p>{{ todoProps }}
    <button class="btn-delete">Delete</button>
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