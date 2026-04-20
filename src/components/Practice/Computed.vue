<template>
  Hello From Computed <br>
  Full Name  = {{ GetFullName() }}<br> 
  <button v-on:click="changeName()">ChangeName</button><br>
  ComputedFullName = {{ fullName }} <br>
  <button v-on:click="items.push(
          {id:1,
          title: 'KeyBoard',
          rate:100.00})">Add Item</button><br>
  computedTotal =  {{  total }}<br>
  MethodTtoal = {{ Gettotal() }}
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name:'Computed',
  setup() {
    
  },
  data(){
    return {
      firstName:"Ravi",
      LastName:"Patel",
      items:[
        {
          id:1,
          title:"phone",
          rate:100.00
        },
         {
          id:2,
          title:"tv",
          rate:200.00
        },
         {
          id:3,
          title:"mobile",
          rate:300.00
        }
      ]
    }
  },
  methods: {
     GetFullName(){
      return this.firstName + this.LastName
     },
     Gettotal() {
       return this.items.reduce((t, c) => t = t + c.rate , 0)
     },
     changeName() {
      this.fullName = "Niki Patel"
     }
  },
  computed: {
     fullName:{
       get() {
        return `${this.firstName} ${this.LastName}` 
       },
       set(value) {
         const namepart = value.split(' ')
         this.firstName = namepart[0],
         this.LastName = namepart[1]
       }
     },
     total() {
       return this.items.reduce((t, c) => t = t + c.rate , 0)
     }
  },
  watch:{
    // firstName(newValue, oldValue) {
    // console.log(`Your Name changed from "${oldValue}" to "${newValue}"`);
    // }
    firstName: {
      handler(newValue, oldValue) {
        console.log('Watcher fired!');
        console.log('Current Name:', newValue);
         console.log('previous Name:', oldValue);
        // Note: oldValue will be undefined on the very first run
      },
      deep: true, // check nested property change 
      immediate: true // This makes it run right away on page load
    }
  }

})
</script>
