<template>
  <div class="container-fluid">
    <div class="row">
      <nav class="col-md-3 col-lg-2 bg-light border-end d-none d-md-block" 
           style="min-height: 100vh; padding-top: 20px;">
        <div class="position-sticky">
          <ul class="nav flex-column">             
            <li class="nav-item">
               <RouterLink to="/Practice" class="nav-link">Hello World</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/Practice/databinding" class="nav-link">Databinding</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/Practice/attribute-binding" class="nav-link">Attribute Binding</RouterLink>
            </li>
             <li class="nav-item">
              <RouterLink to="/Practice/condition" class="nav-link">Condition Rendering</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/Practice/Looping" class="nav-link">Looping</RouterLink>
            </li>
          </ul>
        </div>
      </nav>

      <main class="col-md-9 col-lg-10 px-md-4">
        <div style="border: 1px solid #ccc; min-height: 100vh; border-radius: 8px; padding: 20px;">
           <router-view />
        </div>       
      </main>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Practice',
  component: {
    
  },
})
</script>

<style scoped>

</style>