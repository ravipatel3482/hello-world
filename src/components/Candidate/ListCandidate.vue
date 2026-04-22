<template>
    <span v-if="stubMode" style="color: red;">
        Stubed Mode(Using Stubed Data not real Data)
    </span>
    <br>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="input-group">
          <input
            type="text"
            class="form-control me-5"
            v-model="lastName"
            ref="lastNameref"
            placeholder="Enter last name to search..."
          />
          <button class="btn btn-primary" type="button" @click="AddCandidate()">
            AddCandidate
          </button>
        </div>
      </div>
    </div>
    <div class="container mt-4 position-relative">
      <div class="row" v-if="loading">Loading...
      </div>
      <div class="row" v-else>
        <div  class="col-md-4 mb-4"  v-for="c in filterCandidateByLastName"   :key="c.cid">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                {{ c.fname }} {{ c.lname }}
              </h5>
              <p class="card-text mb-1">
                <strong>Email:</strong> {{ c.email }}
              </p>
              <p class="card-text mb-2">
                <strong>Phone:</strong> {{ c.ph }}
              </p>
              <div>
                <strong>Skills:</strong>
                <div class="mt-2">
                  <span
                    v-for="(skill, index) in c.skills"
                    :key="index"
                    class="badge bg-primary me-1 mb-1"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
            <div class="card-footer text-end">
              <button class="btn btn-sm btn-outline-primary me-2"  @click="LoadCandidate(c.cid)">
                View
              </button>
              <button class="btn btn-sm btn-outline-secondary"  @click="EditCandidate(c.cid)">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { candidates } from '@/stubData/candidates';
export default defineComponent({
  name:'CandidateList',
  data() {
   return {
      CandidateList: [],
      loading: false,
      lastName:'',
      error: null,
      stubMode:false,
      isEdit:false,
      filterdListOfCandidate:[]
    }
  },
  methods: {
    
    LoadCandidate(cid) {
       this.$router.push(`/Practice/Looping/view/${cid}`)
    },
    EditCandidate(cid) {
      this.isEdit = true
      this.$router.push(`/Practice/Looping/edit/${cid}`)
    },
    AddCandidate() {
      this.$router.push(`/Practice/Looping/add`)
    }
  },
  computed:{
    filterCandidateByLastName() {
       const name = this.lastName.toLowerCase().trim()
       if (!name) {
          return  this.CandidateList
          
       }

         return this.CandidateList.filter(c =>
          c.lname.toLowerCase().includes(name)
        )
    },
  },
   async mounted(){  
    this.$refs.lastNameref.focus() 
    this.$refs.lastNameref.style.backgroundColor = 'yellow';
    this.loading = true
    try 
    {
       //  api call
       const response = await fetch('http://localhost:5000/api/candidates')
       if (!response.ok) {
        throw new Error('API failed')
       }
       this.CandidateList = await response.json()
       this.filterdListOfCandidate = this.candidates
    }
    catch(err){
        console.error('API failed, using stub data:', err)
        this.CandidateList = candidates
        this.filterdListOfCandidate = candidates
        this.error =  err
    }
    finally{
      this.loading = false
      this.stubMode = true
    }
  }
})
</script>
