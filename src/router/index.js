import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/HomePage'
import About from '../views/AboutPage'
import Leaderboards from '../views/LeaderboardsPage'
import Train from '../views/TrainPage'
import Register from '../views/RegisterPage'
import Login from '../views/LoginPage'
import User from '../views/UserPage'
import SelectPage from '../views/SelectPage'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/leaderboards',
        name: 'Leaderboards',
        component: Leaderboards
    },
    {
        path: '/select',
        name: 'Train',
        component: SelectPage
    },

    {
        path:'/train',
        name: 'Training',
        component: Train
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/user/:username?',
        name: 'User',
        component: User,
        props: true
    },
    {
        path: '/task/:taskid?',
        name: 'Task',
        component: Train,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router