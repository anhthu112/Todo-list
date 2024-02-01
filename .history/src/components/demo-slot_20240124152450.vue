<template>
    <div class="demo-ref">
        <h1>Lee dokyum</h1>
        <button class="avatar">change avatar</button>
        <input type="file" style="display:none">
    </div>
</template>
<script>
    export default {
        name:'demo-ref',
        data (){
            return {
            }
        }
    }
</script>
<style>
    .demo-ref{
        margin-top: 100px;
        padding: 100px 30px;
        border: 1px solid #000;

    }
    .avatar{
        color: #fff;
        padding: 12px 15px;
        background: #333;
    }
</style>