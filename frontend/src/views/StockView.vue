<template>
<div>
    <Header />
    <Sidebar />

    <div class="stock">
        <h2>Inventario</h2>
        <div class="search">
            <Search />
            <Buttons />
        </div>
        
    </div>

</div>
  
</template>

<script>
import Header from '../components/HeaderComponent.vue'
import Sidebar from '../components/SidebarComponent.vue'
import Search from '../components/Stock/SearchComponent.vue'
import Buttons from '../components/Stock/ToggleButtonsComponent.vue'

export default {
    components: {
        Header,
        Sidebar,
        Search,
        Buttons
    }

}
</script>

<style scoped>

.stock {
  margin-top: 2rem;
  margin-left: 4rem;
}

.search {
    margin-top: 1rem;
}

</style>