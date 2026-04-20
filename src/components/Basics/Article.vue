<template>
  <div> 
    <br>
    <h1>Article Component</h1>
    <h2>{{ title }} </h2>
    <h2>Likes - {{  like }}</h2>
    <h2>isPublished - {{  isPublished }}</h2>
  </div>
</template>

<script>
  export default {
    name:'Article',
    props:{
       title:{
            type:String,
            reruired:true,
            default:'default Title'
       },
       like:Number,
       isPublished:Boolean
    }
  }
</script>

<style scoped>

</style>