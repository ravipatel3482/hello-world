<template>
  <div class="card">
    <div class="card-header">
      <slot name="Header"></slot>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
    <div  class="card-footer">
      <slot name="Footer"></slot>
    </div>
   </div>
</template>

<script>
 export default {
    name:'MultiSlotCard'

  }
</script>

<style scoped>

</style>