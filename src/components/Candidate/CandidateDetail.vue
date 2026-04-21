<template>
  <div class="container mt-4">
    
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-light p-3 rounded shadow-sm mb-3">
        <li v-for="tab in tabs" :key="tab.name" 
            class="breadcrumb-item" 
            :class="{ active: currentTab === tab.component }"
            @click="currentTab = tab.component"
            style="cursor: pointer;">
          <span :class="currentTab === tab.component ? 'fw-bold text-primary' : 'text-secondary'">
            {{ tab.name }}
          </span>
        </li>
      </ol>
    </nav>

    <div v-if="loading" class="text-center p-5">
       <div class="spinner-border text-primary"></div>
    </div>
  
    <div v-else-if="candidate" class="content-wrapper">
      <transition name="fade" mode="out-in">
          <keep-alive>
            <component 
              :is="currentTab" 
              :candidate="candidate" 
              class="card p-4 shadow-sm border-0" 
            />
        </keep-alive>
      </transition>
    </div>


    <button class="btn btn-link mt-3 text-decoration-none" @click="$router.push('/practice/looping')">
      <i class="bi bi-arrow-left"></i> Back to Candidate List
    </button>
  </div>
</template>



<script>
import { defineComponent } from 'vue'
import { candidates } from '@/stubData/candidates'
import CandidateInfo from '@/components/Candidate/CandidateInfo.vue'
import Skills from '@/components/Candidate/CandidateSkills.vue'
import Address from '@/components/Candidate/CandidateAddress.vue'
import Experience from '@/components/Candidate/CandidateExperience.vue'
import ContactDetail from '@/components/Candidate/CandidateContactDetail.vue'

export default defineComponent({
  name: 'CandidateDetail',
  components: {
    CandidateInfo, Skills, Address, Experience, ContactDetail
  },
  created() {
    this.fetchCandidatDetails()
  },
  setup() {
    
  },
  data() {
    return {
      tabs: [
        { name: 'General Info', component: 'CandidateInfo' },
        { name: 'Skills', component: 'Skills' },
        { name: 'Address', component: 'Address' },
        { name: 'Experience', component: 'Experience' },
        { name: 'Contact', component: 'ContactDetail' }
      ],
      currentTab: 'CandidateInfo',
      candidate: null,
      loading: false,
      stubMode: false
    }
  },
  methods: {
    GoBackToList() {
      this.$router.push('/practice/looping')
    },
    async fetchCandidatDetails(){
      this.loading = true

    const id = this.$route.params.cid

    try {
      const res = await fetch(`http://localhost:5000/api/candidate/${id}`)

      if (!res.ok) {
        throw new Error('API failed')
      }

      this.candidate = await res.json()
    } catch (err) {
      console.warn('API failed → using stub data')

      this.stubMode = true

      this.candidate = candidates.find(c => c.cid == id)
      console.log("this candiate " + JSON.stringify(this.candidate))
    } finally {
      this.loading = false
    }
    }
  },
  mounted() {
    
  }
})
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.breadcrumb-item+.breadcrumb-item::before {
  content: "|";
  color: #6c757d;
  /* Standard Bootstrap muted gray */
  font-weight: normal;
  padding-right: 0.5rem;
}

/* Optional: Remove the underline from the breadcrumb links */
.breadcrumb-item span {
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

/* Hover effect for your custom tabs */
.breadcrumb-item:hover span {
  color: #0d6efd;
  /* Bootstrap Primary Blue */
}

/* Active tab styling */
.breadcrumb-item.active span {
  border-bottom: 2px solid #0d6efd;
  padding-bottom: 2px;
}

.breadcrumb {
    margin-left: 0;
    margin-right: 0;
}

.card {
    /* Ensure the card takes up the full width of the container */
    width: 100%; 
    margin-left: 0;
    margin-right: 0;
}

/* This helps if you have a border on the container itself */
.container {
    max-width: 900px; /* Or whatever width you prefer for the detail view */
}
</style>