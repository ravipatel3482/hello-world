<template>
  <div>
    <h1>Hello, {{name  }}!</h1>
    {{ message }}
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Hello',
  component: {
    
  },
  data() {
    return {
      name: 'robin',
      message: 'Hello, World!'
    }
  } 
})
</script>
