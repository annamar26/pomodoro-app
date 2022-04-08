<template>
  <div>
    <img
      src="https://i.pinimg.com/originals/5b/ac/09/5bac099c19b6fb43a3936e260b4cb343.png"
      alt="pomodoro"
    />
    <div v-if="isShown" class="input-wrapper">
      <label for="userName" class="control-label"
        ><input
          class="form-control"
          v-model="userName"
          type="text"
          id="userName"
          name="userName"
          placeholder="Ingresa tu nombre"
          @keyup.enter="greet"
        />Ingresa tu nombre</label
      >
      <button @click="greet">Save</button>
    </div>
    <h1>{{ isShown ? 'Ingresa tu nombre' : `Hey, ${userName} ¡Concéntrate!` }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GreetingComponent',
  data() {
    return {
      userName: '',
      // msg: `Hey, ${this.userName} ¡Concéntrate!`,
      // msgOnTimeUp: `Hey, ${this.userName} ¡Tu tiempo ha terminado!`,
      // msgOnTimeSet: `Hey, ${this.userName} ¡Preparate para comenzar!`,
      isRunning: false,
      isShown: true,
    };
  },
  methods: {
    greet() {
      console.log(this.userName);
      this.isShown = false;
    },
  },
});
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
