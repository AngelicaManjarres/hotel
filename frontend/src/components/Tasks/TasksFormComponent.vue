<template>
  <div class="container">
    <strong @click="$emit('closeForm')" class="close display-6">X</strong>
    <br />
    <h3>Editar Tarea</h3>
    <form class="mx-auto p-5">
      <select id="employeeName" class="fieldsForm mt-3">
        <option>Sutanito</option>
      </select>
      <textarea
        class="fieldsForm mt-3"
        type="text"
        id="typeTasks"
        placeholder="Tipo de tarea"
        v-model="description"
      ></textarea>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.close {
  float: right;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>