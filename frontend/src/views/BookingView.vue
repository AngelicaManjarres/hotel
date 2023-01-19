<template>
<div>
<Header />
<Sidebar />
    
  <div class="booking">
    <h2>Reservas</h2>
  </div>
</div>
</template>

<script>
import Header from '../components/HeaderComponent.vue'
import Sidebar from '../components/SidebarComponent.vue'

export default {
    components: {
        Header,
        Sidebar
    }
}
</script>

<style scoped>
.booking {
    margin-top: 2rem;
    margin-left: 4rem;
}
</style>