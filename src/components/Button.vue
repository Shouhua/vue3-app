<script>
import { h } from "vue";
const Button = (props, context) => {
  let component = "a";
  if (!props.href) {
    component = "button";
  }
  if (!context.slots.default) {
    return null;
  }
  return h(
    component,
    { ...props, ...context.attr, className: "button" },
    context.slots.default()
  );
};
Button.props = ["href", "to"];
export default Button;
</script>

<style scoped>
.button {
  background: crimson;
}
</style>