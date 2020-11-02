<script lang="ts">
/**
<template>
  <div class="slot-class">
    <div>scope id: {{ scopeId }}</div>
    <div>count: {{ count }}</div>
    <slot name="scoped" :slogan="slogan"></slot>
  </div>
</template>
 */
import { getCurrentInstance, h, onMounted, ref, withScopeId } from 'vue'
export default {
  name: 'SlotDemo',
  // render(ctx) {
  //   return h('div', {
  //     class: 'slot-class'
  //   }, [ // 这里的children会添加后缀'-s'
  //     h('div', `scope id: ${ctx.scopeId}`),
  //     h('div', `count: ${ctx.count}`),
  //     // ctx.$slots.default({slogan: ctx.slogan}),
  //     ctx.$slots.scoped({slogan: ctx.slogan})
  //   ])
  // },
  setup(props, {slots, emit, attrs}) {
    const instance = getCurrentInstance()
    console.log('slot demo instance: ', instance);
    
    const scopeId = (instance.type as any).__scopeId
    let count1 = ref(1)
    onMounted(() => {
      // console.log('subTree: ', instance.subTree);
    })
    const withId = withScopeId(scopeId)
    return withId(() => 
    h('div', {
      // class: 'slot-class'
    }, [
      h('div', `scope id: ${scopeId}`),
      h('div', `count: ${count1}`),
      // ctx.$slots.default({slogan: ctx.slogan}),
      slots.scoped({slogan: 'hello slot slogan'})
    ]))
    // return {
    //   count: ref(count1),
    //   scopeId,
    //   slogan: 'hello, scoped slot',
    //   color: 'white'
    // }
  }
}
</script>
<style scoped lang="scss" vars="{ color }">
::v-slotted(.slot-class) {
  background: lightcoral;
  color: var(--color);
}
::v-deep(.hello) {
  background: red;
}
::v-global(.world) {
  background: red;
}
</style>