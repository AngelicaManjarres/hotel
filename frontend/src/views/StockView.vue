<template>
<div>
    <Header />
    <Sidebar />

    <div class="ms-5 ps-2 mt-4">
        <h2>Inventario</h2>
        <div class="search">
            <Search />
            <Buttons />
        </div>

        <List />
        
    </div>

    <AddButton @click="$router.push('/addStock')" />

</div>
  
</template>

<script>
import Header from '../components/HeaderComponent.vue'
import Sidebar from '../components/SidebarComponent.vue'
import Search from '../components/Stock/SearchComponent.vue'
import Buttons from '../components/Stock/ToggleButtonsComponent.vue'
import List from '../components/Stock/ListComponent.vue'
import AddButton from '../components/Tasks/AddButtonComponent.vue'

export default {
    components: {
        Header,
        Sidebar,
        Search,
        Buttons,
        List,
        AddButton
    },

}
</script>

<style scoped>

.search {
    margin-top: 1rem;
}

</style>