import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Print from '@/components/Print'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Print',
            component: Print
        },
        {
            path: '/print',
            name: 'Print',
            component: Print
        }
    ]
})