import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        employees : ["A", "B"]
    },
    getters: {
        getEmployees : (state) => {
            return state.employees;
        }
    },
    mutations: {
        addEmployee :(state, payload) => {
            state.employees.push(payload);
        }
    },
    actions: {
        addEmployee : (context , payload) =>  {
            setTimeout(function(){
                context.commit('addEmployee', payload);
            }, 2000)
        }
    }
})