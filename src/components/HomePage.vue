<template>
    <Header/>
    <h1>Welcome to the Home Page</h1>
</template>

<script>
    import Header from "./Header.vue"
export default{
    name: 'HomePage',
    components:{
        Header
    },
    mounted(){
        let user= localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push('Login')
        }
    }
}
</script>