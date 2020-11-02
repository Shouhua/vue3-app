<script lang='ts'>
import { h, openBlock, createBlock, createVNode, Fragment,
  getCurrentInstance, useCssModule, ref, useCssVars, renderSlot } from 'vue'

import { useScopeId } from '../utils/useScopeId'

export default {
  name: 'HelloWorldRender',
  props: {
    msg: String
  },
  data() {
    return {
    }
  },
  // render(ctx, _cache, $props, $setup, $data, $options) {
  //   return h('div', {class: ctx.useHello ? ctx.klass : ''}, [
  //     h('h2', null, ctx.msg),
  //     h('h2', null, ctx.message1),
  //     h('button', {onClick: ctx.handleClick}, 'Click Me'),
  //     renderSlot(ctx.$slots, 'default', {count: ctx.count}, () => [h('div', null, 'fallback')])
  //   ])
  // },
  setup(props, {emit, attrs, slots}) {
    const $style = useCssModule()
    useCssVars((ctx) => {
      return {
        colorr: 'blue'
      }
    }, false)
    // console.log('$style: ', $style)
    const instance = getCurrentInstance()
    // console.log(instance)
    // console.log('data: ', instance.data)
    let count = ref(0)
    const handleClick = () => { 
      console.log('button clicked')
      count.value++
    }
    let klass = $style.hello
    const withId = useScopeId()
    const useHello = true
    const message1 = 'hello, world!'
    // return {
    //   withId,
    //   count,
    //   klass,
    //   handleClick,
    //   useHello: true 
    // }
    const render = () => h('div', {class: useHello ? klass : ''}, [
      h('div', null, props.msg),
      h('div', null, message1),
      h('button', {class: 'bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4', onClick: handleClick}, 'Click Me'),
      renderSlot(slots, 'default', {count: count.value}, () => [h('div', null, 'fallback')])
    ])
    return withId ? withId(render) : render
    // return render
  }
}
</script>
<style module scoped>
.hello {
  background: azure;
  color: var(--colorr);
}
.world {
  font-family: 'Courier New', Courier, monospace;
}
</style>