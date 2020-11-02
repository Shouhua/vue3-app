<template>
<div>
    <h1>Vue 3</h1>
    <tabs
      :tabs="[
        { title: 'Tab 1', key: 'tab-one' },
        { title: 'Tab 2', key: 'tab-two' },
      ]"
    >
      <template v-slot:tab-one>Tab 1 Content</template>
      <template v-slot:tab-two>Tab 2 Content</template>
    </tabs>
  </div>
<!-- <div class="app conatiner"> -->
  <!-- <Standalone />
  <p>App</p> -->
  <!-- <update-demo @vnodeMounted="handleVnodeMounted" :msg="msg">
    <template v-slot v-if="showSlot">
      {{count}}
    </template> 
  </update-demo>
  <button class="rounded font-bold hover:bg-blue-700 hover:text-white px-4 py-2 border cursor-pointer" @click="showSlot=!showSlot;count++">Toggle Slot</button> -->
  <!-- <button @click="toggle">Toggle msg</button>
  <div>
    <input type="text" v-model="name">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-4 py-2" @click="add">添加</button>
  </div>
  <ul>
    <li v-for="(item, i) in list" :key="item">
      <input type="checkbox"> {{item.name}}
    </li>
  </ul> -->
</template>

<script>
import { getCurrentInstance, onMounted, onBeforeUpdate, onUpdated, reactive, ref, watchEffect, defineAsyncComponent } from "vue";
import { usePositon } from "./utils/position";

// import HelloWorld from './components/HelloWorld.vue'
// import RenderDemo from './components/RenderDemo.vue'
// import SlotDemo from './components/SlotDemo.vue'
// import AntdRender from './components/AntdRender.vue'
// import JsxDemo from './components/jsxDemo'
// import SuspenseDemo from './components/SuspenseDemo.vue'
// import ScopedStyle from './components/ScopedStyle.vue'
// import FallthroughDemo from './components/FallthroughDemo.vue'
// import ProxyRefs from './components/ProxyRefs.vue'
// import TransitionDemo from './components/TransitionDemo.vue'
// import AsyncDemo from './components/AsyncDemo.vue'
// import OnceDemo from './components/OnceDemo.vue'
// import Hello from './components/Hello.vue'
// import ThisDemo from './components/ThisDemo.vue'
// import FragmentDirective from './components/FragmentDirective.vue'
// import UpdateDemo from "./components/UpdateDemo.vue"
import Tabs from './components/Tabs.vue'

export default {
  name: "App",
  components: {
    // HelloWorld,
    // RenderDemo,
    // SlotDemo,
    // AntdRender,
    // JsxDemo,
    // SuspenseDemo,
    // // ScopedStyle,
    // FallthroughDemo,
    // ProxyRefs,
    // TransitionDemo,
    // OnceDemo,
    // AsyncDemo,
    // Hello,
    // ThisDemo,
    // FragmentDirective,
    // UpdateDemo,
    Standalone: defineAsyncComponent(() => import('./components/Standalone.vue')),
    Tabs
  },
  setup() {
    const { x, y } = usePositon();
    // const name = ref("lily");
    const ck = ref("1");
    const inputValue = ref("");
    const slogan = "parent comp slogan";
    const handleClick = () => console.log("scoped style clicked");
    const handleOuterClick = () => console.log("outter comp clicked");

    const instance = getCurrentInstance();

    // onMounted(() => {
      // console.log('app mounted: ', this);
      // console.log('instance: ', instance.proxy);
      // console.log('instance: ', instance.proxy.$name);
    //   console.log('app mounted');
    // });

    // onBeforeUpdate(() => console.log('app before update'))
    // onUpdated(() => console.log('app updated'))

    const $name = ref("hello, app");

    const handleClickMe = () => {
      console.log(instance.proxy);
      // console.log('handle click me on app: ', instance.proxy.$name);
    };

    const handleVnodeMounted = () =>
      console.log("fragment directive vnode mounted");
    let msg = ref("Vue");
    const toggle = () => {
      msg.value = msg.value === "Vue" ? "World" : "Vue";
    };

    let name = ref('')
    let newId = ref(3)
    let list = reactive([
      { id: 1, name: '李斯' },
      { id: 2, name: '吕不韦' },
      { id: 3, name: '嬴政' }
    ])

    return {
      showSlot: ref('true'),
      add() {
         //注意这里是unshift
          list.unshift({ id: ++this.newId, name: this.name })
          name = ''
        },
      name, newId,
      list,
      changeList: () => {
        list[1] = list[2];
        list[2] = list[1];
      },
      handleVnodeMounted,
      // $name,
      handleClickMe,
      count: ref(1),
      ck,
      x,
      y,
      slogan,
      handleClick,
      handleOuterClick,
      msg,
      toggle,
    };
  },
};
</script>
<style lang="scss">
// .hello {
//   color: red;
// }
// .white-color {
//   color: white;
// }
</style>
