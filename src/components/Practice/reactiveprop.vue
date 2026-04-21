<template>
  <div>
    property from Data object {{d_fname }} {{ d_lname }}

    <br>
    property from ref object {{ c_fristname }} {{ c_lastname }}
    <br>
    Greeting for ref objct {{ greeting }}
    <br>
    property from reactive object {{ fname }} {{ lname }}
    <br>
    greeting for reactive object {{ greetingforreactiveobject }}
    <br>
    <button @click="SaveData">ChangeName</button>
    
    <div v-if="IsSuccess" style="color: green;">
     Name chnaged successfully 
    </div>
  </div>
</template>

<script>
import { reactive, ref, computed, toRefs } from 'vue';
export default {
  name: 'Reactiveprop',
  setup() {
    const c_fristname = ref('Niki')
    const c_lastname = ref('patel')
    const greeting = computed(() => { return `Hello ${c_fristname.value} ${c_lastname.value}`;
    });
    const user = reactive({
      fname: 'test',
      lname: 'test'
    })
    const IsSuccess = ref(false);
    const greetingforreactiveobject = computed(() => {return `hello ${user.fname} ${user.lname}`})

    const SaveData = () => {
      console.log("Data Saved Successfully");
      IsSuccess.value = true; // Use .value inside setup
      
      setTimeout(() => {
        IsSuccess.value = false;
        user.fname = 'robin'
        user.lname = 'Patel'
      }, 3000);
    };

    return toRefs({
      ...toRefs(user),
      c_fristname,
      c_lastname,      
      greeting,
      greetingforreactiveobject,
      IsSuccess,
      SaveData
    })
  },
  data() {
    return {
      d_fname: 'ravi',
      d_lname: 'patel'
    }
  },
  methods: {
  }
}
</script>

<style scoped></style>