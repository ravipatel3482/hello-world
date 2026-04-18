<template>
  <input type="text" v-model="number">
  {{ number }}
  <h1 v-html="number > 10 ? 'number is greater than 10' : 'number less than 10' "></h1>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name:'Condition',
  data() {
    return {
      number:0
    }
  },
})
</script>
