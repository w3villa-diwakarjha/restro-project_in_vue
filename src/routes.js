import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login'
import Add from './components/Add'
import Update from './components/Update'
import { createRouter, createWebHistory } from 'vue-router'

const routes=[
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name: 'Add',
        component: Add,
        path: '/add'
    },
    {
        name: 'Update',
        component: Update,
        path: '/update/:id'
    },

]
const router= createRouter({
    history:createWebHistory(),
    routes
})
export default router