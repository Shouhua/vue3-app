<script lang="ts">
import { h, mergeProps } from 'vue'
export default {
  emits: {
    click: null
  },
  // inheritAttrs: false,
  // render() {
  //   return [
  //     h('div', 'element 1'),
  //     h('div', 'element 2'),
  //   ]
  // },
  setup(props, {attrs}) {
    console.log('attrs: ', attrs)
    const handleClick = () => console.log('inner comp clicked');
    
    return {
      handleClick
    }
  }
}
</script>
<style lang="scss" scoped>
::v-slotted(.attr-fallthrough) {
  background: lightskyblue;
}
.attr-fallthrough {
  background: lightskyblue;
}
</style>
<template>
  <div class="attr-fallthrough" @click="handleClick">element 1</div>
  <!-- <div>element 2</div> -->
</template>