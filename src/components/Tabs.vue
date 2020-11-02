<template>
  <div>
    <p>Active Tab value: {{ activeTab }}</p>
    <ul>
      <template v-for="tab in tabs" :key="tab.key">
        <li>
          <a href="#" @click.stop.prevent="activeTab = tab.key">{{
            tab.title
          }}</a>
        </li>
      </template>
    </ul>
    <div>
      <slot :name="activeTab"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    tabs: Array,
  },
  data() {
    return {
      activeTab: this.$props.tabs[0].key,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
