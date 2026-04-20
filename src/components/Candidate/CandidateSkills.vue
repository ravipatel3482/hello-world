<template>
  
  <div> 
    <h3>Skills</h3>
    <div v-if="candidate">
      <span v-for="s in candidate.skills" :key="s" class="badge bg-primary me-1">
        {{ s }}
      </span>
    </div>
  </div>
  
</template>

<script>
  export default {
     props: ['candidate']
  }
</script>

<style scoped>

</style>