<template>
  <div class="container mt-5">
    <div class="card shadow-sm">
      <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center">
        <h4 class="mb-0">{{ id > 0 ? 'Edit Candidate' : 'Add Candidate' }}</h4>
        <button class="btn btn-sm btn-outline-light" @click="$router.push('/practice/looping')">
          Back to List
        </button>
      </div>
      
      <div class="card-body">
        <div v-if="loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status"></div>
          <p class="mt-2">Loading candidate data...</p>
        </div>

        <form v-else @submit.prevent="saveCandidate">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label">First Name</label>
              <input type="text" v-model="form.fname" class="form-control" required>
            </div>

            <div class="col-md-6">
              <label class="form-label">Last Name</label>
              <input type="text" v-model="form.lname" class="form-control" required>
            </div>

            <div class="col-md-6">
              <label class="form-label">Email</label>
              <input type="email" v-model="form.email" class="form-control" required>
            </div>

            <div class="col-md-6">
              <label class="form-label">Phone</label>
              <input type="text" v-model="form.ph" class="form-control">
            </div>

            <div class="col-12">
              <label class="form-label">Skills (separated by commas)</label>
              <input type="text" :value="form.skills.join(', ')" 
                @input="e => form.skills = e.target.value.split(',').map(s => s.trim())" 
                class="form-control" placeholder="e.g. Vue, C#, Azure">
            </div>
          </div>

          <div class="mt-4 pt-3 text-end">
            <button type="button" class="btn btn-secondary me-2" @click="$router.push('/practice/looping')">Cancel</button>
            <button type="submit" class="btn btn-primary">
              {{ id > 0 ? 'Update Candidate' : 'Create Candidate' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { candidates } from '@/stubData/candidates'

export default defineComponent({
  name: 'CandidateAddup',
  data() {
    return {
      loading: false,
      id: 0,
      form: {
        cid: 0,
        fname: '',
        lname: '',
        email: '',
        ph: '',
        skills: []
      }
    }
  },
  async mounted() {
    this.loading = true;
    // Get ID from route params
    const paramId = this.$route.params.cid;
    
    if (paramId && paramId !== '0') {
      this.id = parseInt(paramId);
      await this.loadCandidateData();
    }
    
    this.loading = false;
  },
  methods: {
    async loadCandidateData() {
      try {
        const res = await fetch(`http://localhost:5000/api/candidate/${this.id}`)
         if (!res.ok) {
             throw new Error('API failed')
         }
        const candidate = await res.json()        
        if (candidate) {
          // Clone the object so we don't mutate the original stub directly
          this.form = { ...candidate };
        } else {
          console.error("Candidate not found in api call data");
        }
      } catch (error) {
        console.error("Error loading data:", error);
        const candidate = candidates.find(c => c.cid === this.id);
        this.form = { ...candidate };
      }
    },
    saveCandidate() {
      this.loading = true;
      
      if (this.id > 0) {
        console.log("Updating existing candidate:", this.form);
        // TODO
        // API call: await axios.put(...)
      } else {
        console.log("Creating new candidate:", this.form);
        // TODO
        // API call: await axios.post(...)
      }

      // Simulate network delay then redirect
      setTimeout(() => {
        this.loading = false;
        this.$router.push('/practice/looping');
      }, 500);
    }
  }
})
</script>