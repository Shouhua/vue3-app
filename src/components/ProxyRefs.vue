<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const list = [
      { foo: 1 },
      { bar: 2 }
    ]

    function isInList(item) {
      // item here is a proxy of the original!
      // vue 3.0.0-rc.5 use proxyRefs to wrap setup result
      return list.includes(item)
    }

    return {
      list,
      isInList,
      object: {
        nestedRef: ref(3)
      }
    }
  }
}
</script>
<template>
  <div v-for="item in list">{{ isInList(item) }}</div>
  <span>{{ object.nestedRef.value }}</span>
</template>