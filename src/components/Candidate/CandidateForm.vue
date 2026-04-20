<template>
  <div class="container mt-5 pb-5">
    <div class="card shadow border-0">
      <div class="card-header bg-dark text-white py-3 d-flex justify-content-between align-items-center">
        <h4 class="mb-0 fw-light">
          <i class="bi bi-person-plus me-2"></i>
          {{ id > 0 ? 'Edit Candidate Profile' : 'Create New Candidate' }}
        </h4>
        <button class="btn btn-sm btn-outline-light px-3" @click="$router.push('/practice/looping')">
          <i class="bi bi-arrow-left me-1"></i> Back to List
        </button>
      </div>
      
      <div class="card-body p-4">

        <div v-if="loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status"></div>
          <p class="mt-3 text-muted">Fetching candidate records...</p>
        </div>

        <form v-else @submit.prevent="saveCandidate">
          <div class="row g-4">
            
            <div class="col-md-6">
              <label class="form-label fw-bold">First Name</label>
              <input type="text" v-model.trim="form.fname" class="form-control" placeholder="John" required>
            </div>

            <div class="col-md-6">
              <label class="form-label fw-bold">Last Name</label>
              <input type="text" v-model="form.lname" class="form-control" placeholder="Doe" required>
            </div>
            <!-- Lazy Modifier is added in case for remote validation for avalibility-->
            <div class="col-md-6">
              <label class="form-label fw-bold">Email Address</label>
              <input type="email" v-model.trim.lazy="form.email" class="form-control" placeholder="john.doe@example.com" required>
            </div>

            <div class="col-md-6">
              <label class="form-label fw-bold">Phone Number</label>
              <input type="text" v-model="form.ph" class="form-control" placeholder="+1 (555) 000-0000">
            </div> 

            <div class="col-md-6">
              <div class="row g-0 align-items-center h-100 pt-2">
                <div class="col-auto">
                  <label class="form-label mb-0 fw-bold me-3">Gender</label>
                </div>
                <div class="col-8 d-flex gap-4"> 
                  <div class="form-check mb-0">
                    <input class="form-check-input" type="radio" :value="GenderEnum.MALE" v-model="form.gender" id="g-male">
                    <label class="form-check-label" for="g-male">Male</label>
                  </div>
                  <div class="form-check mb-0">
                    <input class="form-check-input" type="radio" :value="GenderEnum.FEMALE" v-model="form.gender" id="g-female">
                    <label class="form-check-label" for="g-female">Female</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="row g-0 align-items-center h-100 pt-2">
                <div class="col-auto pe-3">
                  <label class="form-label mb-0 fw-bold">Work Auth</label>
                </div>
                <div class="col">
                  <select v-model="form.workAuth" class="form-select shadow-sm">
                    <option :value="null">Select Status</option>
                    <option v-for="(val, key) in AuthEnum" :key="key" :value="val">
                      {{ val }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            
            <div class="row g-4 mb-3">
                  <div class="col-md-6">
                  <div class="row g-0 align-items-start h-100">
                    <div class="col-auto pe-3">
                      <label class="form-label fw-bold mt-1">Work Model</label>
                    </div>
                    <div class="col">
                      <select v-model="form.workModels" class="form-select" multiple style="height: 100px;">
                        <option v-for="(val, key) in WorkModelEnum" :key="key" :value="val">
                          {{ val }}
                        </option>
                      </select>
                      <small class="text-muted">Hold Ctrl/Cmd to select multiple</small>
                    </div>
                  </div>
                </div>

               <div class="col-md-6">
                  <div class="row g-0 align-items-start">
                    <div class="col-auto pe-3">
                      <label class="form-label fw-bold mt-1" style="min-width: 100px;">Skills</label>
                    </div>
                    <div class="col">
                      <div class="d-flex flex-wrap gap-x-4 gap-y-2 border rounded p-3 bg-light shadow-sm" style="min-height: 120px;">
                        <div v-for="(val, key) in SkillsEnum" :key="key" class="form-check me-3">
                          <input 
                            class="form-check-input" 
                            type="checkbox" 
                            :id="'skill-' + key" 
                            :value="val" 
                            v-model="form.primarySkills"
                          >
                          <label class="form-check-label" :for="'skill-' + key">
                            {{ val }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>

            </div>

            <div class="col-12">
              <label class="form-label fw-bold">Technical Skills</label>
              <input type="text" 
                :value="form.skills.join(', ')" 
                @input="e => form.skills = e.target.value.split(',').map(s => s.trim())" 
                class="form-control" 
                placeholder="e.g. Vue.js, C#, SQL Server, Azure">
              <div class="form-text">Separate skills with commas.</div>
            </div>

            <div class="col-12">
              <label class="form-label fw-bold">Professional Summary</label>
              <textarea v-model="form.summary" rows="4"
                 class="form-control" 
                 placeholder="Briefly describe your professional background and key achievements...">
              </textarea>
            </div>

          </div>
          <div class="mt-5 pt-3 border-top d-flex justify-content-end">
            <button type="button" class="btn btn-light border me-2 px-4" @click="$router.push('/practice/looping')">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary px-5 shadow-sm">
              {{ id > 0 ? 'Save Changes' : 'Create Candidate' }}
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
import { GenderEnum,AuthEnum, WorkModelEnum,SkillsEnum } from '@/enum/appenum'
export default defineComponent({
  name: 'CandidateAddup',
  data() {
    return {
      GenderEnum,
      AuthEnum,
      WorkModelEnum,
      SkillsEnum,
      loading: false,
      id: 0,
      originalForm: null,
      form: {
        cid: 0,
        fname: '',
        lname: '',
        email: '',
        ph: '',
        skills: [],
        summary:'',
        gender:null,
        workAuth:"SelectVisaStatus",
        workModels: [], // Array for multiselect
        primarySkills: [] // Array for multiselect
      },
      
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
  beforeUnmount() {
     window.removeEventListener('beforeunload', this.preventNav);
  },
  methods: {
    preventNav(event) {
      if (!this.isDirty) return;
      event.preventDefault();
      event.returnValue = ''; // Required for Chrome
    },
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
          this.originalForm = JSON.stringify(candidate);
        } else {
          console.error("Candidate not found in api call data");
        }
      } catch (error) {
        console.error("Error loading data:", error);
        const candidate = candidates.find(c => c.cid === this.id);
        this.form = { ...candidate };
        this.originalForm = JSON.stringify(candidate);
      }
    },
    async saveCandidate() {
          this.loading = true;
          const apiUrl = `http://localhost:5000/api/candidate`;

          try {
            if (this.id > 0) {
             await fetch(`${apiUrl}/${this.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.form)
              });
              this.originalForm = JSON.stringify(this.form);
              console.log("API Update Successful");
            } else {
              const res = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.form)
              });
              const newData = await res.json();
              this.form.cid = newData.id; // Assume API returns the new ID
              console.log("API Create Successful");
              this.originalForm = JSON.stringify(this.form);
            }
            
            // Redirect on success
            this.$router.push('/Practice/Looping');

          } catch (error) {
            console.warn("API Failed, falling back to Stub Data:", error);
            this.handleStubFallback();
          } finally {
            this.loading = false;
          }
    },
    handleStubFallback() {
       if (this.id > 0) {
        const index = candidates.findIndex(c => c.cid === parseInt(this.id));
        if (index !== -1) {
          candidates[index] = { ...this.form, cid: parseInt(this.id) };
          console.log("Stub Data Updated");
      }
      } else {
        const newId = candidates.length > 0 
          ? Math.max(...candidates.map(c => c.cid)) + 1 
          : 1;
        const newRecord = { ...this.form, cid: newId };
        candidates.push(newRecord);
        console.log("Added to Stub Data:", newRecord);
      }
      this.$router.push('/Practice/Looping');
    }    
  },
  computed: {
      isDirty() {
        if (!this.originalForm) return false;
        // Compare current form string to original snapshot string
        return JSON.stringify(this.form) !== this.originalForm;
      }
  },
  beforeRouteLeave(to, from, next) 
  {
      if (this.isDirty) {
        const answer = window.confirm(
          'You have unsaved changes! Are you sure you want to leave?'
        );
        
        if (answer) {
          next(); // User clicked OK, let them leave
        } else {
          next(false); // User clicked Cancel, stay on the page
        }
      } else {
        next(); // Form isn't dirty, let them leave immediately
      }
  }
})
</script>