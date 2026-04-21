<template>
  <h1>Home Page Working</h1> <br>
  <Greet Name="Ravi" />
  <Greet :Name="name" />
</template>
<script>
import { defineComponent } from 'vue'
import Greet  from '@/components/Basics/greeting.vue'
export default defineComponent({
  name: 'AppHome',
  components: {
    Greet
  }, 
  data() {
    return {
      name:'niki'
    }
  },
  methods: {  
    
  }
})
</script>
<style scoped>
</style>
