import VueRouter from 'vue-router'
import Home from '@/pages/Home/Home'
import About from '@/pages/About/About'

export default new VueRouter({
    mode: 'history',
routes: [
    {
        path: '',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    ]
    
})