import Vue from 'vue';
import App from './App.vue';

new Vue({
    el: '#app',
    template: "<p>hello{{ world }}</p>",
    data: {
        world: 'hello'
    }
});

// const app = new Vue({
//     template: `<App />`,
//     components: { App }
// }).$mount('#app');