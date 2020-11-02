import { RenderFunction, VNode, withScopeId } from "vue";

import { getCurrentInstance } from 'vue'

export function useScopeId(): <T extends Function>(fn: T) => T {
  const instance = getCurrentInstance()
  if (!instance) {
    console.warn(`useScopeId is called without current active component instance.`)
    return
  }

  let scopeId: string
  if(scopeId = (instance.type as any).__scopeId) {
    const withId = withScopeId(scopeId)
    return withId
  }
  return 
}