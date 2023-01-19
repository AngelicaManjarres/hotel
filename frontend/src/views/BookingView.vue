<template>
<div>
<Header />
<Sidebar />
    
  <div class="mt-3 ms-5 p-3">
    <h2>Reservas</h2>
    <div>
      <Calendar />
    </div>
  </div>
  <AddButton @click="$router.push('/addBooking')" />
</div>
</template>

<script>
import Header from '../components/HeaderComponent.vue'
import Sidebar from '../components/SidebarComponent.vue'
import Calendar from '../components/Booking/CalendarComponent.vue'
import AddButton from '../components/Tasks/AddButtonComponent.vue'

export default {
    components: {
        Header,
        Sidebar,
        Calendar,
        AddButton
    }
}
</script>

<style scoped>

</style>