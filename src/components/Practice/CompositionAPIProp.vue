<template>
  <div class="container mt-4">
  <div class="d-flex flex-column align-items-center">
    
    <div class="row col-md-6 mb-2 p-2 align-items-center">
      <label for="firstName" class="col-sm-4 col-form-label">FirstName</label>
      <div class="col-sm-8">
        <input type="text" id="firstName" class="form-control" v-model="fname">
      </div>
    </div>

    <div class="row col-md-6 mb-3 p-2 align-items-center">
      <label for="lastName" class="col-sm-4 col-form-label">LastName</label>
      <div class="col-sm-8">
        <input type="text" id="lastName" class="form-control" v-model="lname">
      </div>
    </div>

   
    <PersonGreeting :firstName="fname" :LastName="lname" @getfullName="getfullName"></PersonGreeting>
  </div>
</div>
</template>

<script>
 import{ ref } from 'vue'
 import PersonGreeting from '@/components/Basics/PersonGreeting.vue'
  export default {
    name:'CompositionAPIProp',
    components : { PersonGreeting },
    setup() {
         const fname = ref('')
         const lname = ref('')       
        function getfullName(event){
          console.log(event.value)
        }
        return {
           fname,
           lname,
          getfullName
        }
    }
  }
</script>

<style lang="scss" scoped>

</style>