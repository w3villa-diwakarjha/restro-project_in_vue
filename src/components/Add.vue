<template>
    <Header/>
    <h1>Welcome to Add Section</h1>
    <form action="" class="add-resturant">
        <input type="text" placeholder="Enter Name" v-model="resturant.name" name="name"/>
        <input type="text" placeholder="Enter Address" v-model="resturant.Address" name="Address"/>
        <input type="text" placeholder="Enter Contact" v-model="resturant.contact" name="Contact"/>
        <button type="button" v-on:click="addresturant">Add New Resturant</button>
    </form>
</template>

<script>
import Header from '../components/Header.vue';
export default {
    name: 'Add',
    components: {
        Header
    },
    data()
    {
        return{
            resturant:{
                name: '',
                Address: '',
                contact: ''
            }
        }
    },
    methods :{
        addresturant()
        {
            console.log(this.resturant)
        }
    },
    mounted()
    {
        let user= localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name: 'Login'});
        }
    }
}
</script>