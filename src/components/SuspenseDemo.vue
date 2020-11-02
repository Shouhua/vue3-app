<template>
<div class="suspense-demo">
  <button @click="loadAsyncComponent">点击加载异步组件</button>
  <button @click="handleCount">count++</button>
  <Suspense v-if="loadAsync"
    @pending="handlePending"
    @resolve="handleResolve"
    @fallback="handleFallback"
    timeout="100">
    <template #default>
      <AsyncComponent />
      <!-- <div>count: {{ count }}</div> -->
    </template>
    <template #fallback>
      <!-- <div class="load"></div> -->
      <div>count: {{ count }}</div>
    </template>
  </Suspense>
</div>
</template>
<script lang="ts">
import { defineAsyncComponent, reactive, ref } from 'vue'

export default {
  name: 'SuspenseDemo',
  components: {
    AsyncComponent: defineAsyncComponent({
      loader: () => import('./AsyncSetup.vue'),
      loadingComponent: () => 'loading async setup component',
      suspensible: true
    })
  },
  setup() {
    let loadAsync = ref(false)
    const loadAsyncComponent = () => loadAsync.value = true
    const handleFallback = () => console.log('fallback...');
    const handleResolve = () => console.log('resolve...');
    const handlePending = () => console.log('pending...');
    const handleCount = () => count.value++
    const count = ref(0)
    
    return {
      loadAsync,
      loadAsyncComponent,
      handleFallback,
      handleResolve,
      handlePending,
      handleCount,
      count
    }
  }
}
</script>
<style lang="scss">
.suspense-demo {
  width: 500px;
  height: 100px;
  padding: 20px;
  // margin: 0 auto;
  border: 1px solid #eeeeee;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

.load {
  position: absolute;
  width: 36px;
  height: 36px;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  background-image: url("../assets/images/Loading.png");
  background-size: 100%;
  animation: rotate 1.4s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>