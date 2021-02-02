<template>
  <div id="app">
    <the-header></the-header>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "app",
  components: {
    TheHeader,
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
  overflow-x: hidden;
}
#app {
  font-family: Georgia, Times, "Times New Roman", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a:hover {
  text-decoration: none;
}

button {
  margin: 2px !important;
}
</style>
