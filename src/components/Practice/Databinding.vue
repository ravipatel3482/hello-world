<template>
  <div>
    <h1>Data_binding</h1>
    <p>This is the content for Databinding.</p>
    <p>Property: {{ message }}</p>
    <p v-html="message2"></p>
    <div>v-text = <span v-text="htmlString"></span></div>
    <div>v-html = <span v-html="htmlString"></span></div>
    <div> v-text = <span v-text="dummy"></span></div>
    <div> v-html = <span v-html="dummy"></span></div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Databinding',
  component: {
    
  },
  data() {
    return {
       Firstname : 'Ravi',
       lastName : 'Patel',
       fullName : `ravi patel`,
       message: 'Value From Component Data',
       message2: 'Another Value From Component Data binding bind using v-html directive',
       htmlString : `<strong>ravi patel</strong>`,
       dummy : `<a href="#" onclick="alert('dummy injected')">your offer</a>`
    }
  }
})
</script>
