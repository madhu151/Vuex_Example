<template>
  <div>
      <h1><u>Add New Employee</u></h1>
      <label for="ename">Enter the Name</label>
      <input type="text" v-model="ename"> 
      <button v-on:click="addEmployee(ename)">Add Employee</button>

      <h1><u>Display Employee</u></h1>
      <ul>
          <li v-for="emp in getEmployees" :key="emp">
              {{emp}}
          </li>
      </ul>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    name:'AddEmployee',
    data() {
        return {
            ename: ''
        }
    },
    computed: {
        ...mapGetters([
            'getEmployees'
        ])
    },
    methods: {
        ...mapActions([
            'addEmployee'
        ])
    },
}
</script>

<style>

</style>
