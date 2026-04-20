<template>
  <div>
    <h1>Hello, {{name  }}!</h1>
    {{ message }}
    <br>
    currentUsername = {{ userName }}
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
  },
  inject:['userName']
})
</script>
