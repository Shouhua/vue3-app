<template>
  <p>Standalone Comp</p>  
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'
export default {
  setup() {
    onBeforeMount(() => { debugger; console.log('standalone comp before mount');})
    onMounted(() => { console.log('standalone comp mounted');})
    onBeforeUpdate(() => { console.log('standalone comp before update');})
    onUpdated(() => { console.log('standalone comp updated');})
  }
}
</script>

<style>

</style>