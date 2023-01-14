<template>
  <div>
    <table>
        <tr class="header">
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
        </tr>
        <tr>
            <td>10/10/2022</td>
            <td>Redbull</td>
            <td>3</td>
            <td>$8000</td>
        </tr>
    </table>

    <table>
        <tr>
            <td>Total</td>
            <td>$19000</td>
            <td>09/11/2022</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
table {
    margin-top: 1rem;
    width: 95%;
}

.header {
    background: #A7A7A7;
}

th {
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    border: 1px solid #666;
    padding: 2px;
}

td {
    font-size: 14px;
    border: 1px solid #666;
    padding: 13px 5px;
}

</style>