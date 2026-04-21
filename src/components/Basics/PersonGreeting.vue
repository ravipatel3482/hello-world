<template>
  <div>
  Hello {{ firstName  }} {{  LastName }}<br>
  Hello Using Computed {{ fullName }}<br>
  Hello  Using Setup Computed {{ GetFullName }}
  </div>
  <div class="text-center">
    <button class="btn btn-primary" @click="sendEvent">Submit</button>
  </div>
</template>

<script>
import { computed } from 'vue'
  export default {
    name:'PersonGreeting',
    setup(props, context) {
        const GetFullName = computed(() => {
          return `${props.firstName} ${props.LastName}`
        })
        function sendEvent() {
          context.emit('getfullName' , GetFullName)
        }
        return {
          GetFullName,
          sendEvent
        }
    },
    props:['firstName', 'LastName'],
    computed: {
      fullName() {
        return `${this.firstName} ${this.LastName}`
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>