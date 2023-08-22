<template>
    <img src="../assets/logoresturant.png"/>
    <h1>Welcome to Login Page</h1>

    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" /><br/>
        <input type="password" v-model="password" placeholder="Enter Password" /><br/>
        <button v-on:click="Login">Login</button>
        <p>
            Create an account? <span><router-link to="/signup">Register</router-link></span>
        </p>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Login',
    data()
    {
        return {
            email: '',
            password: ''
        } 
    },
    methods:{
        async Login()
        {
            alert("Login Successfully");

            let result= await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            console.log(result.data);
            if(result.status==200&& result.data.length>0)
            {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({name: 'HomePage'})
            }
            console.log("email", this.email);
            console.log("password", this.password);
        }
    },
    mounted()
    {
        let user=localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name: 'HomePage'});
        }
    }
}
</script>