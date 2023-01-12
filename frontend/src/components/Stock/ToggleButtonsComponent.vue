<template>

<div class="buttons">
    <button class="buy">Compras</button>
    <button class="sell">Ventas</button>

</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>

.buttons {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    margin-left: 5px;
    margin-top: 10px;
}

button {
    padding: 5px 40px !important;
    margin-left: 10px;
    color: #fff;
}
.sell {
    background: #F1F1F1;
    border: 2px solid #ccc;
    color: #333;
}

</style>