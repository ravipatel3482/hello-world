<template>
  <div>
    <h1 :id="headerID">Attribute Binding</h1>
    <h2 class="underline"> under line text </h2>
    <h3 :class="status"> danger line text </h3>
    <h4 :class="success"> Data Saved Successfully</h4>
    <p>This is the content for Attribute Binding.</p>
    <a :href="url" :title="title">Visit Example.com</a>
    <br>
    <img :src="imageSrc" :alt="imageAlt">
    <br>
    <button :disabled="isDisabled">Click Me</button>
    <br>
    <div :class="{ active: isActive, error: hasError }">This div has dynamic classes.</div>
  </div>
</template>
<script>
export default {
  name: 'AttributeBinding',
  data(){
    return {
      headerID: 'main-header',
      isActive: true,
      hasError: false,
      isDisabled: false,
      url: 'https://www.example.com',
      title: 'Example Link',
      imageSrc: 'https://via.placeholder.com/150',
      imageAlt: 'Placeholder Image',
      status:'Danger',
      success:'Success'
    }
  }
}
</script>
<style scoped>
  .underline {
    text-decoration: underline;
  }
  .Danger {
    color: red;
  }
  .Danger:hover {
    color: darkred;
  }
  .Success {
    color: green;
  }
</style>