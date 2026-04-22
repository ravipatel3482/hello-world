<template>
    <!-- <span v-if="stubMode" style="color: red;">
        Stubed Mode(Using Stubed Data not real Data)
    </span> -->
    <br>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <!-- <div class="input-group">
          <input
            type="text"
            class="form-control me-5"
            v-model="region"
            ref="lastNameref"
            @input="filterCandidateByLastName"
            placeholder="Enter last name to search..."
          /> 
          <button class="btn btn-primary" type="button" @click="AddCandidate()">
            AddCandidate
          </button>
        </div> -->
          <div class="row g-0 align-items-center h-100 pt-2">
              <div class="col-auto pe-3">
                <label class="form-label mb-0 fw-bold">Select Region</label>
              </div>
              <div class="col">
                <select v-model="region" class="form-select shadow-sm">
                  <option :value="''">All Regions</option> <option v-for="reg in uniqueregion" :key="reg" :value="reg">
                    {{ reg }}
                  </option>
                </select>
              </div>
        </div>
      </div>
    </div>
    <div class="container mt-4 position-relative">
      <div class="row" v-if="loading">Loading...
      </div>
      <div class="row" v-else>
        <div  class="col-md-4 mb-4"  v-for="country in countryList"   :key="country.name.common">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
                {{ country.name.common}} 
              </h5>
              <p class="card-text mb-1">
                <strong>currencies:</strong> {{ JSON.stringify(country.currencies) }}
              </p>
              <p class="card-text mb-2">
                <strong>capital:</strong> {{ country.capital[0] }}
              </p>
               <p class="card-text mb-2">
                <strong>region:</strong> {{ country?.region }}
               </p>             
            </div>
            <div class="card-footer text-end">
              <button class="btn btn-sm btn-outline-primary me-2">
                View
              </button>
              <button class="btn btn-sm btn-outline-secondary">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Country_List from '@/stubData/countryList.js'
  export default {
    name:'ListOfCountry',
    data() {
      return {
        countryList:[],
        loading:false,
        region:'',
        uniqueregion:[]
      }
    },
    methods: {
       
    },
    computed: {
      filteredCountry() {
        if (!this.region) {
          return this.countryList
        }
        return this.countryList.filter(c => c.region === this.region)
      }
    },
    
     async mounted(){ 
      this.loading = true
       try 
         {
            //  api call
            const response = await fetch('https://restcountries.com/v3.1/all?fields=capital,currencies,region,name')
            if (!response.ok) {
              throw new Error('API failed')
            }
             
            this.countryList = await response.json()
            console.log(this.countryList)
           
            this.uniqueregion = [...new Set(this.countryList.map(item => item.region))];
            console.log( "region =  + "  +  this.uniqueregion)
            this.loading = false
          }
          catch(err){
              console.error('API failed, using stub data:', err)
              this.countryList = Country_List
              this.error =  err
          }
      }
    
  }
</script>

<style scoped>

</style>