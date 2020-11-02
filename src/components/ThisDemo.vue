<script>
import { defineComponent, h } from "vue";

export default {
  props: {
    msg: String
  },
  render() {
    console.log('render this: ', this);
    return (console.log('render return this: ', this), h('div', { dataHello: 'world'}, this.setupMsg))
  },
  setup() {
    console.log('setup this: ', this);
    return (console.log('setup return this: ', this), {
      setupMsg: 'setup msg'
    })
  }
}
</script>