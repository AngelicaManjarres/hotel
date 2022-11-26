<template>
<div class="container">
    <strong @click="$emit('closeForm')" class="close display-6">X</strong>
    <br>
    <h3 class="mt-4 mb-lg-4 mt-lg-2 ms-lg-1">Crea una nueva factura</h3>

    <p class="mt-4 mt-lg-2 ms-lg-1 codigo">#ABS124D</p>

    <p class="mt-4 mt-lg-2 ms-lg-1">NIT. 900-12044-4</p>

    <form class="form-group ps-2 pe-2 mt-lg-4 mt-3">
        <input class="form-control mt-3 mt-lg-2" type="text" placeholder="Recibo a nombre de">
        <input class="form-control mt-3 mt-lg-2" type="number" placeholder="Valor">
        <select name="" id="metodo-de-pago" class="form-select mt-3 mt-lg-2">
            <option value="tarjeta debido">Tardeta debido</option>
            <option value="yarjeta de crédito">Tarjeta de crédito</option>
            <option value="nequi">Nequi</option>
            <option value="daviplata">Daviplata</option>
            <option value="efectivo">Efectivo</option>
        </select>
        <input type="date" class="form-control mt-3 mt-lg-2" />

        <button type="submit" @click.prevent="createBill" class="mt-5 text-center">Crear</button>
        
        
        
    </form>
</div>
  
</template>

<script>
export default {
    name: 'BillingFormComponent',
    setup() {

    }

}
</script>

<style scoped>
div {
    padding-top: 1rem;
    height: 100vh;
    background: #EDEDED;
    position: absolute;
    top: 0;
    right: 0;
}

h3 {
    font-size: 1.4rem;
    font-weight: 400;
}

p {
    font-size: 1.4rem;
    color: #666;
}

.close {
    float: right;
    font-size: 1.5rem;
    cursor: pointer;
}

button {
    padding: 5px 10px;
    border: none;
    background: #BCE742;
}

</style>