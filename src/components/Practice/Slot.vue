<template>
  <div>
    <card>
      
          <div class="card-header bg-white border-bottom-0 pt-3">
                  <h5 class="card-title fw-bold text-primary">Candidate Information</h5>
                </div>

                <div class="card-body">
                  <p class="card-text text-secondary">
                    Test Candidate 1
                  </p>
          </div>

      <div class="card-footer bg-transparent border-top-0 pb-3">
        <button class="btn btn-outline-primary btn-sm">View Details</button>
      </div>
    </card>
    <br>
    <card>
      <h2>Test Candidate 2 </h2>
    </card>
    <br>
    <card></card>
  </div>
</template>

<script>
import Card from '@/components/Basics/Card.vue'
  export default {
    name:'Slot',
    components:{
      Card
    }
  }
</script>

<style scoped>

</style>