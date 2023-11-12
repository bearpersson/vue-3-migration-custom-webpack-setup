<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorldWithACustomName msg="Welcome to Your Vue.js + TypeScript App" />
    <HelloClassComponent msg="This is a class component" />
  </div>
</template>

<script lang="ts">
import {
  HelloWorld as HelloWorldWithACustomName,
  HelloClassComponent,
} from "@components";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorldWithACustomName,
    HelloClassComponent,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
