<template>
  <div class="sidebar d-flex" @mouseleave="extended = false">

    <div class="navbar-icons text-center" @mouseover="extended = true">

      <ul class="nav">
        <li class="nav-item"><img src="../assets/img/calendar.png" /></li>

        <li class="nav-item"><img src="../assets/img/list.png" /></li>
        
        <li class="nav-item"><img src="../assets/img/ready-stock.png" /></li>

        <li class="nav-item"><img src="../assets/img/receipt.png" /></li>
      </ul>

    </div>

    <div class="navbar-extended" v-if="extended">

      <ul class="nav row">
        <a class="nav-link fs-5" href="/"><li class="nav-item">Reservas</li></a>

        <a class="nav-link fs-5" href="/tasks"><li class="nav-item">Tareas</li></a>

        <a class="nav-link fs-5" href="/stock"><li class="nav-item">Inventario</li></a>

        <a class="nav-link fs-5" href="/billing"><li class="nav-item">Facturacion</li></a>

      </ul>

    </div>

  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    let extended = ref(false)

    return { extended }
  },
};
</script>

<style scoped>
.sidebar {
  height: 100vh;
  position: absolute;
}

.nav li {
  width: 100%;
}

.navbar-icons {
  width: 50px;
  background: #E8E8E8;
}
a {
  width: 80%;
}

.navbar-extended {
  padding-top: 3rem;
  padding-left: 1rem;
  background: #efefef;
  width: 210px;

}

.navbar-extended li {
  color: #333333;
  padding-left: 10px;
  margin-bottom: 35px;

}

img {
  width: 22px;
  height: auto;
  margin-top: 58px;
}
</style>