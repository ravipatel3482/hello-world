<template>
    <div class="pt-3">
    <h1>About Me</h1>
    <ul>
      <li v-for="(value, key) in MyInfromation" :key="key">
        <strong>{{ key }}:</strong> {{ value }}
      </li>
    </ul>    
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AboutMe',
  data() {
    return {
     MyInfromation:{
       Name:'ravinPatel',
       contact:'5029421166',
       Email:'ravinPatel.3482@gmail.com',
       Designation:'####'
     }
    }
  },
  methods: {  
    
  }
})
</script>
<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 8px 0;
    font-size: 18px;
  }
</style>
