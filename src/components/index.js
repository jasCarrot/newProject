import Vue from 'vue';
import App from './App.vue';
import top from './head.vue';
import VRouter from 'vue-router';
import foot from './foot.vue';
import Vuex from 'vuex';

Vue.use(VRouter);
Vue.use(Vuex);

let store = new Vuex({
    state: {
        totalPrice: 0
    },
    mutations: {
        increament (state,price){
            state.totalPrice += price
        },
        decrement (state,price){
            state.totalPrice += price
        },
    }
});

let router = new VRouter({
    routes:[
        {
            path: '/',
            redirect: '/head'

        },
        {
            path: '/head',
            component: top
        },
        {
            path: '/foot/:color',
            component: foot,
        }
    ]
});

const app = new Vue({
    router,
    store,
    template: `<App />`,
    components:{ App }
}).$mount('#app');
