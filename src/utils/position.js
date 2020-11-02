import { reactive, onMounted, onUnmounted, toRefs } from 'vue'

const usePositon = function() {
  const state = reactive({
    x: 0,
    y: 0
  })
  function update(e) {
    state.x = e.pageX
    state.y = e.pageY
  }
  onMounted(() => {
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })
  return toRefs(state)
}

export { usePositon }