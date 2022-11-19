<template>

  <div v-if="user" class="d-flex sidebar" @mouseleave="extended = false">

    <div class="navbar-icons text-center" @mouseover="extended = true">
        <ul class="nav">
            <li class="nav-item">
                <img src="../assets/img/calendar.png" />
            </li>

            <li class="nav-item">
                <img src="../assets/img/list.png"/>
            </li>
            <li class="nav-item">
                <img src="../assets/img/ready-stock.png"/>
            </li>
            <li class="nav-item">
                <img src="../assets/img/receipt.png"/>
            </li>
        </ul>
    </div>

    <div class="navbar-extended" v-show="extended">
        <ul class="nav row">
            <li class="nav-item">
                <a class="nav-link fs-5" href="/">Reservas</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fs-5" href="/tasks">Tareas</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fs-5" href="/stock">Inventario</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fs-5" href="/billing">Facturacion</a>
            </li>
        </ul>
    </div>

  </div>

</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore()

        return {
            user: computed(() => store.state.user)
        }
    }
    
};
</script>

<style scoped>

.sidebar {
    position: absolute;
    top: 0;
    height: 150vh;
    z-index: -1;
    
}

.d-flex {
    width: 23vw;
}

.navbar-icons {
    padding-top: 3rem;
    min-width: 60px;
    max-width: 60px;
    background: #E8E8E8;
}

.nav-item {
    width: 100%;
}

.nav {
    padding-top: 2rem;
}

.navbar-extended {
    padding-top: 4rem;
    padding-left: 1rem;
    background: #EFEFEF;
}

li a{
    margin-top: 35px;
    color: #333;
}

img {
    width: 24px;
    height: auto;
    margin-top: 58px;
}

</style>