<template>
  <div class="clearfix">
    <div class="home-nav d-flex">
      <div class="container-fluid d-flex justify-content-between px-4">
        <div class="row header-left">
          <!-- Las imagenes deben ser recortadas y actualizadas -->
          <img class="img-fluid" src="../assets/img/Logo-Dark-Clip.jpg" alt="Logo" />
        </div>

        <div v-if="user" class="header-user d-flex mt-2">
          <div class="text-light">
            <p class="m-0">Nombre: {{ user.username }}</p>
            <p class="m-0">Role: {{ user.role }}</p>
          </div>
          <div class="mt-2">
            <img class="ms-3 img-fluid" src="../assets/img/user.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup() {
    const store = useStore()

    return { user: computed(() => store.state.user) }
  }
};
</script>

<style scoped>
.home-nav {
  width: 100%;
  background: #1f2d4a;
  padding: 5px;
}

.header-left img {
  width: 180px;
}

/* Media query*/
@media (max-width: 650px) {
  .header-left img {
    width: 150px;
  }
  .header-user p {
    font-size: 14px;
  }
}
</style>