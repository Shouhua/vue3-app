<template>
  <div class="hello">
    <Button>Test Button</Button>
    <Button href="https://google.com">Test Button</Button>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Hello",
  components: { Button},
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>