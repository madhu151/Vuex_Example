<template>
  <div>
     
      <h1><u>Display Employee</u></h1>
      <ul>
          <li v-for="emp in getEmployees" :key="emp">
              {{emp}}
          </li>
      </ul>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
    name:'DisplayEmployee',
    
    computed: {
        ...mapGetters([
            'getEmployees'
        ])
    },
    
}
</script>

<style>

</style>
