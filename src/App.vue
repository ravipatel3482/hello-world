<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
  <div class="container-fluid">
    <!-- Toggle button for mobile -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
    <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Links -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <li class="nav-item">
          <RouterLink class="nav-link" to="/home">
            Home
          </RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/aboutme">
            About Me
          </RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/practice">
            Practice
          </RouterLink>
        </li>

      </ul>
    </div>
  </div>
  </nav>
  <div class="main-container">
    <section>
       <router-view></router-view>
    </section>
  </div>
 
</template>



<script>
import { onMounted, defineComponent } from 'vue'


// import HelloWorld from './components/HelloWorld.vue'
// import ListOfItems from './components/ListOfItems.vue'
onMounted(() => {
  document.title = "business";
  console.log('App mounted')
})
export default defineComponent({ 
  name: 'App',
  components: {
    },
 data() {
    return {
      greet: 'Hello',
      name: 'Ravi',
      h2id: 'heading',
      count:0,
      num : 9,
      // defaultAvatar: defaultAvatar,
      channel: '<b>Vue Mastery</b>',
      hack: `<a href="#" onclick="alert('Hacked!')">Click me</a>`,
      isDisabled: false
    }
  }, 
  methods: {
    greeting(){
      return '<b>' + this.greet + ', ' + this.name + '!' + '</b>';
    },
    GetItem() {
      return {
        items: [
          { name: 'Apple', price: '$1' },
          { name: 'Banana', price: '$0.5' },
          { name: 'Cherry', price: '$2' }
        ]
      };
    },
    getperson() {
      return {
        Persons: [
          {
            name: 'Alice Johnson',
            age: 30,
            email: 'abc@gmail.com',
            phone: '555-555-5555',
            skills: ['Java', 'Spring']
          }
        ]
      }
    },
    incrementCount() {
      this.count++;
    },
    decrementCount() {
      this.count--;   
    }
  }
})
</script>

<style>
nav { 
      padding: 20px;
      text-align: center; 
    }
.router-link-active 
    { 
      font-weight: bold;
      color: #42b883; 
    }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}

html, body {
  height: 100%;
  margin: 0;
}
.main-container {
  /* This ensures the content starts AFTER the navbar */
  margin-top: 80px; 
  
  /* Centers the content with equal side spacing */
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px; /* Standard Bootstrap container width */
  
  padding: 20px;
  min-height: 90vh;
  
}
</style>
