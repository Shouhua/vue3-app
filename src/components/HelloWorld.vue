<template>
  <div v-for="item in [1,2,3]" ref="`hello${item}`"></div>
</template>

<script>
import { getCurrentInstance, h } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  render(ctx) {
    console.log('helloworld instance: ', getCurrentInstance())
    return [
      h('div', ctx.msg),
      h('div', ctx.msg),
      h('div', ctx.msg)
    ]
  }
}
</script>
