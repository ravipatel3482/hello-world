<template>
  <div class="d-flex justify-content-center align-items-center gap-3 p-3 mb-2" 
       style="min-height: 80px; border-radius: 8px;">
    
    <span class="fs-5 fw-bold">{{ Name }}</span>
    <input 
      type="text" 
      v-model="lastName" 
      class="form-control form-control-sm" 
      placeholder="Enter last name"
      style="width: 150px;"
      v-if="Name.trim().split(' ').length === 1"
    />

    <button 
      class="btn btn-primary" 
      v-if="Name.trim().split(' ').length === 1" 
      @click="sendToParent(index)"
    >
      Add Last Name
    </button>

  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent ({
    name:'Child',
    props:['Name', "index"],
    emits:['update-last-name'],
    data() {
      return {
        lastName:''
       }
    },
    methods: {
     sendToParent(idx) {
      if (!this.lastName.trim()) {
        alert("Please enter a last name first!");
        return;
      }
      // Emit the captured lastName to the parent
      this.$emit('update-last-name', { 
        index: idx, 
        LastName: this.lastName.trim() 
      });
      
      // Clear the local input for the next use (if applicable)
      this.lastName = '';
     }
    }
  })
</script>

<style scoped>

</style>