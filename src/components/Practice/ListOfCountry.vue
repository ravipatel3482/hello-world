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
                <select v-model="region" class="form-select shadow-sm" @change="handleSelectionChange()">
                  <option :value="''">All Regions</option> <option v-for="(reg, index) in uniqueregion" :key="index" :value="reg">
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
        <div  class="col-md-4 mb-4"  v-for="country in filteredCountry"   :key="country.region">
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
        filteredCountry:[],
        region:'',
        uniqueregion:[]
      }
    },
    methods: {
        handleSelectionChange() {
          // If no region is selected (null or empty string), show all countries
          if (!this.region) {
            this.filteredCountry = this.countryList;
            return;
          }
          
          // Filter the original list based on the selected region
          this.filteredCountry = this.countryList.filter(it => it.region === this.region);
          console.log("Filtered countries:", this.filteredCountry);
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
            this.filteredCountry = this.countryList,
            this.uniqueregion = [...new Set(this.filteredCountry.map(item => item.region))];
            console.log( "region =  + "  +  this.uniqueregion)
            this.loading = false
          }
          catch(err){
              console.error('API failed, using stub data:', err)
              this.countryList = Country_List
              this.filteredCountry = Country_List
              this.error =  err
          }
      },
      watch: {
        selectedId(newValue, oldValue) {
          // This runs whenever selectedId changes, even programmatically
          console.log(newValue)
          console.log(oldValue)
        }
      }   
  }
</script>

<style scoped>

</style>