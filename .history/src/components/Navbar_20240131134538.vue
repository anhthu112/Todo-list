<template>
    <nav>
        <ul class="nav-link">
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
    nav{
        background: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
    }
    .nav ul.nav-link{
        display:flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
    }
</style>