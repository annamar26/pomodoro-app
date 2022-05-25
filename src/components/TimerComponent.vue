<template>
  <div id="clock">
    <p>
      {{ minutes < 10 ? '0' + minutes : minutes }}
      : {{ !isRunning ? '00' : seconds === 60 ? '00' : seconds < 10 ? '0' + seconds : seconds }}
    </p>
  </div>
  <section>
    <button @click="startTimer">Start</button><button>Pause</button><button>Stop</button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimerComponent',
  data() {
    return {
      minutes: 25,
      seconds: 60,

      // msg: `Hey, ${this.userName} ¡Concéntrate!`,
      // msgOnTimeUp: `Hey, ${this.userName} ¡Tu tiempo ha terminado!`,
      // msgOnTimeSet: `Hey, ${this.userName} ¡Preparate para comenzar!`,
      isRunning: false,
    };
  },
  methods: {
    startTimer() {
      this.isRunning = true;

      const timer = setInterval(() => {
        if (this.isRunning) {
          this.seconds -= 1;

          if (this.seconds === 0) {
            this.seconds = 60;
          }
          if (this.seconds === 59) {
            this.minutes -= 1;
          }
          if (this.seconds === 60 && this.minutes === 0) {
            this.isRunning = false;
          }
        }
      }, 1000);
      setTimeout(() => {
        clearInterval(timer);
        alert('stop');
      }, 1500000);
    },
  },
});
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="css"></style>
