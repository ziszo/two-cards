<template>
  <div id="app" class="flex-center">
    <!-- <transition name="slide">
      <router-view />
    </transition> -->
    <FirstCard />
    <SecondCard />
  </div>
</template>

<script>
import FirstCard from "./views/FirstCard.vue";
import SecondCard from "./views/SecondCard.vue";

export default {
  components: {
    FirstCard,
    SecondCard,
  },
};
</script>

<style lang="scss">
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10px;
  box-sizing: border-box;
}

.card-container {
  width: 100%;
  height: 100%;
}
.card {
  width: 100%;
  padding: 20px;
  box-shadow: 0 2px 5px black;
  box-sizing: border-box;
  user-select: none;
}

.v-btn {
  background: #1097ba;
  color: white;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  border: none;
}

.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/*
  Fade Transition
*/
.fade-leave-active,
.fade-enter-active {
  transition: 0.3s;
}
.fade-enter {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-leave-active,
.slide-enter-active {
  transition: 0.3s;
}
.slide-enter {
  transform: translate(0, 100%);
}
.slide-leave-to {
  transform: translate(0, 100%);
}
</style>
