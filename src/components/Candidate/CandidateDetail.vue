<template>
  <div class="container mt-3" style="border: 1px solid black;padding-bottom: 5px;">

    <span v-if="stubMode" class="badge bg-warning mb-2">
      Stub Data Mode
    </span>

    <div v-if="loading">Loading...</div>

    <div v-else-if="candidate" class="card p-3">
      <h3>{{ candidate.fname }} {{ candidate.lname }}</h3>
      <h4>{{ 'About: ' +  candidate.summary }}</h4>
      <p>{{ candidate.email }}</p>
      <p>{{ candidate.ph }}</p>
       
      <div>
        <span
          v-for="s in candidate.skills"
          :key="s"
          class="badge bg-primary me-1"
        >
          {{ s }}
        </span>
      </div>
    </div>

  </div>
  <!-- <button class="btn btn-primary mt-2" @click="GoBackToList">
   Back To List
  </button> -->
  <button class="btn btn-primary mt-2" @click="$router.push('/practice/looping')">
   Back To List
  </button>
</template>



<script>
import { defineComponent } from 'vue'
import { candidates } from '@/stubData/candidates'

export default defineComponent({
  name:'CandidateDetail',
  setup() {
    
  },
  data() {
    return {
      candidate: null,
      loading: false,
      stubMode: false
    }
  },
  methods:{
    GoBackToList() {
      this.$router.push('/practice/looping')
    }
  },

  async mounted() {
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
    } finally {
      this.loading = false
    }
  }
})
</script>
<style scoped>

</style>