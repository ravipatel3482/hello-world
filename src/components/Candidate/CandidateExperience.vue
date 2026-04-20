<template>
  <div>
    <h4 class="text-primary mb-3">Professional Experience</h4>
    
    <div class="card mb-3 bg-light border-0">
      <div class="card-body">
        <h5 class="fw-bold">{{ candidate.experience.currentRole }}</h5>
        <p class="text-muted">{{ candidate.experience.company }} | {{ candidate.experience.totalYears }} Total</p>
      </div>
    </div>

    <h6 class="fw-bold mt-4">Work History</h6>
    <ul class="list-group list-group-flush mb-4">
      <li v-for="(job, index) in candidate.experience.history" :key="index" class="list-group-item">
        <div class="d-flex justify-content-between">
          <strong>{{ job.title }}</strong>
          <span class="badge bg-secondary">{{ job.duration }}</span>
        </div>
        <small class="text-muted">{{ job.company }} - {{ job.location }}</small>
      </li>
    </ul>

    <h6 class="fw-bold mt-4">Notable Projects</h6>
    <div class="row g-2">
      <div v-for="(project, pIndex) in candidate.experience.notableProjects" :key="pIndex" class="col-md-6">
        <div class="p-2 border rounded bg-white h-100">
          <div class="fw-bold text-info">{{ project.name }}</div>
          <small>Role: {{ project.role }}</small><br>
          <small class="text-muted">Tech: {{ project.tech }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Experience',
    props: ['candidate']
  }
</script>

<style scoped>

</style>