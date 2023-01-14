<template>
<div>
    <Header />
    <Sidebar />

    <div class="add-stock">
        <h2>Agregar inventario</h2>

        <form>
            <input type="text" placeholder="Codigo">
            <input type="text" placeholder="Nombre">
            <input type="text" placeholder="Marca">
            <input type="number" placeholder="Cantidad">
            <input type="number" placeholder="Precio">
            <div>
                <label for="date">Fecha de compra:</label>
                <input id="date" type="date">
            </div>
            <button>Agregar</button>
            
        </form>

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

.add-stock {
  margin-top: 2rem;
  margin-left: 4rem;
  font-size: 15px;
  text-align: center;
}

form {
    width: 80vw;
    background: #F0F0F0;
    padding: 5%;
}

input {
    width:100%;
    margin-bottom: 10px;
    padding: 6px 2px;
    color: #888;
    font-weight: 600;
}

button {
    margin-top: 10px;
}

</style>