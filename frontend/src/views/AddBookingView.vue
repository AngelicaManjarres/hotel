<template>
<div>
    <Header />
    <Sidebar />
    <div class="ms-5">
        <h2 class="mt-3">Agregar reserva</h2>
        <AddForm class="mt-3"/>
    </div>
    
</div>
</template>

<script>
import Header from '../components/HeaderComponent.vue'
import Sidebar from '../components/SidebarComponent.vue'
import AddForm from '../components/Booking/AddFormComponent.vue'

export default {
    components: {
        Header,
        Sidebar,
        AddForm
    }
}
</script>

<style scoped>
div {
    text-align: center;
}

</style>