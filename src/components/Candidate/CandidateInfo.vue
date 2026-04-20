<template>
  <div> <h3>General Information</h3>
    <p><strong>Name:</strong> {{ candidate.fname }} {{ candidate.lname }}</p>
    <p><strong>Email:</strong> {{ candidate.email }}</p>
    <p><strong>Summary:</strong> {{ candidate.summary }}</p>
  </div>  
</template>

<script>
  export default {
    name:'CandidateInfo',
    props:['candidate']
  }
</script>

<style scoped>

</style>