import Vue from 'vue';
import Router from 'vue-router';

import Index from '../views/index'

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        meta: {
            title: '高比科技'
        }
    },
    {
        path: '/index',
        name: 'Index',
        component: Index,
        meta: {
            title: '高比科技'
        }
    }
]

export default new Router({
    mode: 'hash',
    routes: routes
})