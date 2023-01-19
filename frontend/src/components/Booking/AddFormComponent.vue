<template>
  <form class="p-2 pt-3 pb-3 ms-3 me-3">
    <input class="pl-3 form-control mb-2" type="text" placeholder="Nombre">
    <input class="pl-3 form-control mb-2" type="text" placeholder="Telefono">
    <select class="form-select mb-2" name="document" id="room">
        <option value="cedula">Cedula</option>
        <option value="pasaporte">Pasaporte</option>
        <option value="licencia">Licencia de conduccion</option>
    </select>
    <input class="pl-3 mb-2 form-control" type="number" placeholder="Numero de documento">
    <select class="form-select mb-2" name="room" id="room">
        <option value="101">Habitacion 101</option>
        <option value="102">Habitacion 102</option>
        <option value="103">Habitacion 103</option>
        <option value="104">Habitacion 104</option>
    </select>
    <input class="pl-3 mb-2 form-control" type="number" placeholder="Numero de huespedes">
    <input class="pl-3 mb-2 form-control" type="file" id="formFile" accept="image/png, image/jpeg">
    <div class="d-flex mb-2">
        <input class="form-control me-2" type="date">
        <input class="form-control" type="date">
    </div>
    <textarea class="form-control" id="petitions" rows="3">Peticiones</textarea>
    <button class="mt-3">Agregar</button>
  </form>
</template>

<script>
export default {

}
</script>

<style>

form {
    background: #eee;
    box-shadow: 2px 1px 10px #666;
}

</style>