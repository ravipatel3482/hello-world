<template>
  <div>
    <MultiSlotCard>
       <template v-slot:Header>
         <h2>Card 1 Header</h2>
       </template>
       <template v-slot:default>
         <h2>Card 1 Content</h2>
       </template>
       <template v-slot:Footer>
         <h2>Card 1 Footer</h2>
       </template>
    </MultiSlotCard>
  </div>
</template>

<script>
import MultiSlotCard from '@/components/Basics/MultiSlotCard.vue'
export default {
    name:'NamedSlot',
    components:{
      MultiSlotCard
    }
  }
</script>

<style scoped>

</style>