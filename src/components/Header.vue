<template>
    <div class="nav">
        <a href="home">Home</a>
        <a href="home"> Add Resturant</a>
        <a href="">Update Resturant</a>
        <a href="" v-on:click="Logout">Logout</a>
    </div>
</template>

<script>
export default{
    name: 'Header',
    methods:{
        Logout()
        {
            alert("Logout Successfully");
            localStorage.clear()
            this.$router.push({name:"Login"})
        }
    }
}
</script>

<style>
    .nav{
        background-color: #333;
        overflow: hidden;
    }
    .nav a{
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 16px 14px;
        text-decoration: none;
        font-size: 16px;
        margin-right: 4px;
    }
    .nav a:hover{
        background-color: #ddd;
        color: #222;
    }
</style>