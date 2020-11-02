<script lang="ts">
import { h, createBlock, openBlock, setBlockTracking, ref, withDirectives, Fragment, createVNode, toDisplayString } from 'vue'

export default {
  render(_ctx, _cache) {
    const once = _cache[1] || ( setBlockTracking(-1), _cache[1] = h("div", _ctx.count), setBlockTracking(1), _cache[1])
    // const once = createVNode('div', null, toDisplayString(_ctx.count), 1)
    // return (openBlock(), createBlock(Fragment, null, [ h('button', {onClick: _ctx.handleClick}, 'Change'), once], 64)) 
    return [
      h('button', {onClick: _ctx.handleClick}, 'change'),
      // once
      h('div', null, _ctx.count)
    ]
  },
  setup() {
    const count = ref(1)
    const handleClick = () => {
      count.value++
      console.log('count: ', count.value);
      
    }
    return {
      count,
      handleClick
    }
  }
}
</script>