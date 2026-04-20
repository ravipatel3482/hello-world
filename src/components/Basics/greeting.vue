<template>
  Hello {{ Name }}
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name:'Greet',
  props:['Name'],
  setup() {
    
  },


})
</script>
<style scoped>

</style>
