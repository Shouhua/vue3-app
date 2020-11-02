<script>
import { defineComponent, getCurrentInstance, h, withScopeId } from "vue";
const Button = defineComponent({
  name: 'Button', 
  props: ['href', 'to'],
  setup(props, context) {
    let component = "a";
    if (!props.href) {
      component = "button";
    }
    if (!context.slots.default) {
      return null;
    }
    const instance = getCurrentInstance()
    console.log('instance: ', instance)
    const scopeId = instance.type.__scopeId
    // NOTICE: instance.vnode.scopeId is *cc56, which is Hello.vue's
    // instance.type.__scopeId is WithId.vue's scope id
    console.log('scopeId: ', scopeId)
    const withId = withScopeId(scopeId)
    // return () => h(
    //   component,
    //   { ...props, ...context.attr, className: "button" },
    //   context.slots.default()
    // );
    return withId(() => h(
      component,
      { ...props, ...context.attr, className: "button" },
      context.slots.default()
    ));
}});
export default Button;
</script>

<style scoped>
.button {
  background: crimson;
}
</style>