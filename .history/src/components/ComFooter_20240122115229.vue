<template>
    <h1>{{ text }}</h1>
</template>
<script>
    export default{
        name: 'comp-footer',
        props: {
            title: String,
        }
    }
</script>