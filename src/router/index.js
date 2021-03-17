import VueRouter from 'vue-router'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'

export default new VueRouter({
routes: [
    {
        path: '',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
]
})