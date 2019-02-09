import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Music from './components/Music'
import Contact from './components/Contact'
import About from './components/About'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },{
            path: '/music',
            name: 'music',
            component: Music
        },{
            path: '/about',
            name: 'about',
            component: About
        },{
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
});