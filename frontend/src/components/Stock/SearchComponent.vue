<template>
<div class="searchbar pe-3">

    <input class="w-100" type="text" placeholder="Buscar">
    <select class="w-100">
        <option value="">Mas reciente</option>
        <option value="">Valor</option>
        <option value="">Cantidad</option>
    </select>

</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>

input, select {
    margin-bottom: 10px;
    border: 0.5px solid #666;
}

</style>