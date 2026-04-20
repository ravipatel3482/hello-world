<template>
  <div class="p-3">
      <h5 class="mb-3">Parent Container</h5>
      
     <div v-for="(name, i) in namearray" :key="name" class="mb-2">
        <Child 
          :Name="name" 
          :index="i" 
          @update-last-name="handleLastNameUpdate"
        />
     </div>
      
      <Article title="hello" :like="20" :isPublished="true"></Article>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Child from '@/components/Basics/child.vue'
import Article from '@/components/Basics/Article.vue'
  export default  defineComponent  ({
    name:'Parent',
    props:['Name'],
    components:{
      Child,
      Article
    },
    data(){
      return{
        namearray:["Ravi" , "Niki"]
      }
    },
    methods: {
        handleLastNameUpdate(receivedValue) {
          this.namearray[receivedValue.index] = this.namearray[receivedValue.index] + " " + receivedValue.LastName
          this.namearray = [...this.namearray];
          console.log(receivedValue)
        }
    },
    watch:{

    },
    computed: {

    },
    async mounted() {

    }
  })
</script>

<style scoped>

</style>