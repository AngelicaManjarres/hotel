<template>
  <div>
     <router-view />
  </div>
</template>

<script>

export default {
  components: {
    
  },
};
</script>

<style>
:root {
    --main-color: #2e4372;
    --font-color: #333333;
}

#app {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  font-family: "Akshar", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-color);
  margin: 0;
  padding: 0;
}

body {
  background: #f8f8f8;
  box-sizing: border-box;
}

button {
  padding: 10px 25px !important;
  border-radius: 0 !important;
  background: var(--main-color);
  color: #fff;
}

button:hover {
  box-shadow: 3px 3px 3px #777777;
}

</style>
