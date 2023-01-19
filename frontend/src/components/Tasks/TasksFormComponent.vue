<template>
  <div class="container">
  <form class="card d-flex mx-auto pt-4 pb-3 ps-2 pe-2">
    <select id="employeeName" class="fieldsForm mt-3">
      <option class="form-select">Nombre del empleado</option>
    </select>
    <textarea
      class="fieldsForm mt-4"
      type="text"
      id="typeTasks"
      placeholder="Nueva tarea..."
      v-model="description"
    ></textarea>
    <div class="mx-auto mt-4">
    <button class="btn btnAdd" @click.prevent="updateTask">Actualizar Tarea</button>
  </div>
  </form>
</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    updateTask(){

    }
  },
};
</script>
<style scoped>
 form {
    width: 90% !important;
  }
.card {
  background: #f4f4f4;
  box-shadow: 0px 4px 10px #333;
}
.fieldsForm {
  margin: auto;
  background: #f4f4f4;
  width: 80%;
  border: none;
  border-bottom: 2px solid #777777;
  padding: 5px;
}
.btnAdd {
  color: white;
  background: #2e4372 !important;
  max-width: 160px;
  min-width: 150px;
  border: none;
  border-radius: 10px;
}
</style>