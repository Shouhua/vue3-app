<script lang="ts">
import { ref, h, withDirectives, resolveDirective } from 'vue'
import { Input } from 'ant-design-vue'

export default {
  render(ctx) {
    const directive_focus = resolveDirective("focus")
    return h('div', {
      class: 'antd-area'
    }, [
     withDirectives(h(Input, { 
      class: 'input',
      placeholder: "Basic usage",
      value: ctx.inputValue,
      'onUpdate:value': ($event) => ctx.inputValue = $event
      }), [[directive_focus]]),
      h('span', [ctx.inputValue])
    ])
  },
  setup() {
    let inputValue = ref('hello')
    return {
      inputValue
    }
  }
}
</script>
<style lang="scss">
.antd-area {
  width: 300px;
  background: lightblue;

  .input {
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>