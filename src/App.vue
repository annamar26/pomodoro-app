<template>
  <GreetingComponent msg="Welcome to Your Vue.js + TypeScript App" />
  <TimerComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GreetingComponent from './components/GreetingComponent.vue';
import TimerComponent from './components/TimerComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    GreetingComponent,
    TimerComponent,
  },
});
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
