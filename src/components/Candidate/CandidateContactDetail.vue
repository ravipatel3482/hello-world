<template>
  <div>
    <h4 class="mb-4 text-primary fw-bold">Contact Details</h4>

    <div v-if="candidate && candidate.contactDetail" class="row g-3">
      
      <div class="col-12 mb-2">
        <div class="alert alert-primary d-flex align-items-center" role="alert">
          <i class="bi bi-star-fill me-2"></i>
          <div>
            Preferred Contact Method: <strong>{{ candidate.contactDetail.prefered }}</strong>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100 shadow-sm border-0 bg-light">
          <div class="card-body d-flex align-items-center">
            <div class="icon-box bg-white rounded p-3 me-3 text-primary shadow-sm">
              <i class="bi bi-envelope-at fs-3"></i>
            </div>
            <div>
              <small class="text-muted text-uppercase fw-bold">Email Address</small>
              <p class="mb-0 fs-5">{{ candidate.contactDetail.email }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100 shadow-sm border-0 bg-light">
          <div class="card-body d-flex align-items-center">
            <div class="icon-box bg-white rounded p-3 me-3 text-success shadow-sm">
              <i class="bi bi-telephone-outbound fs-3"></i>
            </div>
            <div>
              <small class="text-muted text-uppercase fw-bold">Phone Number</small>
              <p class="mb-0 fs-5">{{ candidate.contactDetail.ph }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mt-4 text-center">
        <div class="btn-group shadow-sm">
          <a :href="'mailto:' + candidate.contactDetail.email" class="btn btn-primary px-4">
            <i class="bi bi-send me-2"></i>Send Email
          </a>
          <a :href="'tel:' + candidate.contactDetail.ph" class="btn btn-outline-success px-4">
            <i class="bi bi-chat-dots me-2"></i>Call Candidate
          </a>
        </div>
      </div>

    </div>

    <div v-else class="text-center p-5">
      <p class="text-muted">Contact details are currently unavailable.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactDetail',
  props: ['candidate']
}
</script>

<style scoped>
.icon-box {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-group .btn {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>