import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from '../components/HomePage.vue';
import AddEmployee from '../components/AddEmployee.vue'
import DisplayEmployee from '../components/DisplayEmployee.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/AddEmployee",
    name: "AddEmployee",
    component: AddEmployee
  },
  {
    path: "/DisplayEmployee",
    name: "DisplayEmployee",
    component: DisplayEmployee
  },
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
