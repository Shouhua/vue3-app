<script lang="ts" setup="props, {attrs, emit, slots}">
import { getCurrentInstance, h } from 'vue'
// console.log('attrs: ', attrs)
const instance = getCurrentInstance()
export const scopeId = instance.vnode.scopeId
</script>
<template>
  <h1>
    Scope: {{scopeId}} This copy should be red
  </h1>
</template>