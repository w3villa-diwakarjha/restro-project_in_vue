<template>
    <Header/>
    <h1>Welcome to Update Section</h1>
    <form action="" class="update-resturant">
        <input type="text" placeholder="Enter Updated Name" v-model="resturant.name" name="name"/>
        <input type="text" placeholder="Enter Updated Address" v-model="resturant.Address" name="Address"/>
        <input type="text" placeholder="Enter Updated Contact" v-model="resturant.Contact" name="Contact"/>
        <button type="button" v-on:click="updateresturant">Upadate Resturant</button>
    </form>
</template>

<script>
import Header from '../components/Header.vue';
import axios from 'axios';
export default {
    data()
    {
        return{
            resturant:[]
        }
    },
    name: 'Update',
    components: {
        Header
    },
    methods:{
        async updateresturant()
        {
            // console.log(this.resturant)
            const result= await axios.put('http://localhost:3000/resturant'+'/'+this.$route.params.id,{
                name: this.resturant.name,
                Address: this.resturant.Address,
                Contact: this.resturant.Contact
            });
            console.log(result)
            if(result.status==200)
            {
                alert("Updated Successfully")
                this.$router.push({name: 'HomePage'})
            }
        }
    },
    async mounted()
    {
        let user= localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name: 'Login'});
        }
        const result= await axios.get('http://localhost:3000/resturant/'+this.$route.params.id);
        // console.log(result.data)
        // console.log(this.$route.params.id)
        this.resturant=result.data;
        // console.log(this.resturant)
    }
}
</script>