<template>
    <Header />
    <h1>Welcome {{ name }} to the Home Page</h1>
    <table border="1">
        <tr>
            <td>S.No</td>
            <td>Name</td>
            <td>Address</td>
            <td>Contact No.</td>
            <td>Actions</td>
            <td>Delete</td>
        </tr>
        <tr v-for="resturant in resturants" :key="resturant.id">
            <td>{{ resturant.id }}</td>
            <td>{{ resturant.name }}</td>
            <td>{{ resturant.Address }}</td>
            <td>{{ resturant.Contact }}</td>
            <td>
                <router-link :to="'/update' + '/' + resturant.id">Update</router-link>
            </td>
            <td>
                <button v-on:click="deleteResturant(resturant.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios'
import Header from "./Header.vue"
export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            resturants: []
        }
    },
    components: {
        Header
    },
    methods: {
        async deleteResturant(id) {
            // console.log(id)
            let result = await axios.delete('http://localhost:3000/resturant/' + id)
            if (result.status == 200) {
                this.loadData();
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name
            if (!user) {
                this.$router.push('Login')
            }
            let result = await axios.get('http://localhost:3000/resturant');
            this.resturants = result.data
        },
    },
    mounted() {
        // let user= localStorage.getItem('user-info');
        // this.name=JSON.parse(user).name
        // if(!user)
        // {
        //     this.$router.push('Login')
        // }
        // let result= await axios.get('http://localhost:3000/resturant');
        // this.resturants=result.data
        this.loadData()
    }
}
</script>

<style>
td {
    width: 160px;
    height: 40px;
}
</style>