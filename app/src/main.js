import Vue from 'vue'
//import Vue from "vue/dist/vue.js";
import Surfboard from './components/Surfboard'
//import Bottom from './components/Bottom'
import Control from './components/Control'
//import { mapState } from "vuex"
import store from "./store"
//Vue.config.productionTip = false

//console.log(store);
//store.test.id = 1500;

//console.log(this.$store);

// use this to have access to the store..
new Vue({
    render: h => h(Surfboard),
    store,
    data: { 
    }
}).$mount('#board-placeholder')

new Vue({
    render: h => h(Control),
    store,
    data: {
        models: [
            {id: 1, name: "test 1"},
            {id: 2, name: "test 2"},
        ]                               
    }
}).$mount('#controls-placeholder')

/*
new Vue({
    el: '#controls-placeholder',    
    store,
    components: {    
        Control        
    }
})

new Vue({
    el: '#board-placeholder',    
    store,
    components: {    
        Surfboard
    }
})
*/

/*
new Vue({
    el: '#controls-placeholder',
    components: {    
        Controls        
    }
})
*/

/*
new Vue({
    el: '#app',
    components: {    
        Board
    }
})
*/