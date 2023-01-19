<template>
    <div>
        <Header />
        <Sidebar />

        <div class="mt-4 ms-5 ps-3">
            <h2>Detalles de reserva</h2>
            <div class="mt-4 p-3 details">
                <h4>Julian Torres</h4>
                <p>Habitacion: Habitacion 104</p>
                <p>Fecha: 02/23/23 - 02/26/23</p>
                <p>Estado de pago: -</p>
                <p>Metodo de pago: -</p>
                <img src="imagen">
                <div class="mt-3">
                    <button @click="$router.push('/addBooking')" class="btn btn-info">Editar reserva</button>
                    <button class="btn btn-success mt-2">Eliminar reserva</button>
                </div>
                
            </div>
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

.details {
    background: #f0f0f0;
    width: 90%;
}

</style>