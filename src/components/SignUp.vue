<template>
    <img src="../assets/logoresturant.png"/>
    <h1 class="Hi">Welcome to the SignUp Page</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" /><br/>
        <input type="text" v-model="email" placeholder="Enter Email" /><br/>
        <input type="password" v-model="password" placeholder="Enter Password" /><br/>
        <button v-on:click="signUp">SignUp</button>
        <p>
            Already have an account? <span><router-link to="/login">Login</router-link></span>
        </p>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "SignUp",
    data()
    {
        return{
            name: '',
            email: '',
            password: ''
        }
    },
    methods:{
        async signUp()
        {
            console.log(this)
            console.log("name",this.name)
            console.log("email",this.email)
            console.log("password",this.password)

            let result= axios.post('http://localhost:3000/users',{
                email: this.email,
                password: this.password,
                name: this.name
            });
            if(result.status==201)
            {
                // alert("User sucessfully SignUp")
                localStorage.setItem("user-info",JSON.stringify(result.data));
                this.$router.push({name: 'HomePage'})
            }
            console.log(result);
        },
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

<style>

</style>