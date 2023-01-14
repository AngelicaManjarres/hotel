<!--Login Angelica-->
<template>
  <div>
    <div class="login text-center">
      <!-- Las imagenes deben ser recortadas y actualizadas -->
      <img class="logo-hero" src="../assets/img/Logo-White-Clip.jpg" alt="Foto-Hero">

      <LoginFormComponent></LoginFormComponent>

    </div>
  </div>
</template>

<script>

import LoginFormComponent from "../components/Login/LoginFormComponent";

export default {
  name: "HomeView",
  components: {
    LoginFormComponent
  }
};
</script>

<style scoped>

.logo-hero {
  width: 320px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

@media (max-width: 650px) {
  .logo-hero {
    width: 250px;
  }
  
}

</style>
