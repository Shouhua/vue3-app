<script>
/**
<template>
  <div ref='el' class="hello">
    <p>Hello, {{ msg }}</p>
  </div>
    <p>Hello, {{ msg }}</p>
</template>
 */
import { h, ref, onBeforeMount } from 'vue'

export default {
  props: {
    msg: String
  },
  render(proxy) {
    const v = h('div', 'heskdfjalskdjllo')
    const r = h('div', {ref: 'el', class: 'hello'}, 
      [h('button', {onClick: this.handleClick}, `Hello, ${this.$props.msg}`),
      v,v, this.$slots['default']? this.$slots.default():null])
    return r
  },
  setup() {
    onBeforeMount(() => { debugger;console.log('update demo comp before mounted');})
    const abc = ref('heloooooooo')
    return {
      el: abc,
      handleClick: () => {
        console.log('abc: ', abc) 
        abc.value = 'hello'
      }
    }
  }
}
</script>

<style>

</style>