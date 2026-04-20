<template>
  <div class="card shadow-sm border-0 mb-3" style="transition: transform 0.2s;">
      <slot>Defualt value</slot>
 </div>
</template>

<script>
  export default {
    name:'Card',
    props:{
      content:String
    }
  }
</script>

<style scoped>

</style>