
<script lang="ts">
/** suspense plus vue-router
<Suspense>
  <template #default>
    <router-view />
  </template>
  <template #fallback>
    <span>I'm a loading screen, I'm waiting the view to be ready!</span>
  </template>
</Suspense>
 */
import { h } from 'vue'
const sleep = (t) => new Promise(r => setTimeout(r, t))
export default {
  displayName: 'AsyncComponent',
  async setup() {
    await sleep(10000)
    return () => h('h3', 'this is async template')
  }
}
</script>