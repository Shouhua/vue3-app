<script lang="ts">
import { defineAsyncComponent, h } from 'vue'

export default defineAsyncComponent({
  loader: () => new Promise(r => {
      setTimeout(() => r(() => 'hello, async component') , 3000);
    }),
  loadingComponent: () => 'loading'
})
</script>