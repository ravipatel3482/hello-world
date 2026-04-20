<template>
  <div>
    <h4 class="mb-4 text-primary fw-bold">Address Information</h4>

    <div v-if="candidate && candidate.Address" class="row g-4">
      
      <div class="col-12">
        <div class="card shadow-sm border-start border-primary border-4">
          <div class="card-body">
            <div class="d-flex align-items-center mb-2">
              <i class="bi bi-house-door-fill text-primary fs-4 me-3"></i>
              <h6 class="card-title mb-0 fw-bold text-uppercase">Current Address</h6>
            </div>
            <p class="card-text fs-5 ms-5">{{ candidate.Address.currentAddress }}</p>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card shadow-sm border-start border-info border-4">
          <div class="card-body">
            <div class="d-flex align-items-center mb-2">
              <i class="bi bi-briefcase-fill text-info fs-4 me-3"></i>
              <h6 class="card-title mb-0 fw-bold text-uppercase">Work Address</h6>
            </div>
            <p class="card-text fs-5 ms-5">{{ candidate.Address.workaddress }}</p>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card shadow-sm border-start border-secondary border-4">
          <div class="card-body">
            <div class="d-flex align-items-center mb-2">
              <i class="bi bi-geo-alt-fill text-secondary fs-4 me-3"></i>
              <h6 class="card-title mb-0 fw-bold text-uppercase">Permanent Address</h6>
            </div>
            <p class="card-text fs-5 ms-5">{{ candidate.Address.premanantAddress }}</p>
          </div>
        </div>
      </div>

    </div>

    <div v-else class="alert alert-light border text-center p-5">
      <i class="bi bi-exclamation-circle fs-1 text-muted"></i>
      <p class="mt-3">No address records found for this candidate.</p>
    </div>
  </div>
</template>
<script>
  export default {
    name:'Address',
    props: ['candidate']
  }
</script>

<style scoped>
/* Adds a nice hover effect to the rows */
.card {
  transition: all 0.3s ease;
}
.card:hover {
  transform: translateX(5px);
  background-color: #f8f9fa;
}
</style>


