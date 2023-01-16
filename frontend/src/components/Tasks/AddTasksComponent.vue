<template>
  <div class="container">
  <form class="card d-flex mx-auto pt-4 pb-3 ps-2 pe-2">
    <select id="employeeName" class="fieldsForm mt-3">
      <option class="form-select">Nombre del empleado</option>
      <option  v-for="employee in employees" :key="employee._id">
        {{ employee.name }}
      </option>
    </select>
    <textarea
      class="fieldsForm mt-4"
      type="text"
      id="typeTasks"
      placeholder="Tipo de tarea" 
      v-model="description"
    ></textarea>
    <div class="text-center">
      <button class="btn btnAdd mt-4" type="submit" @click.prevent="saveTask">
        Agregar Tarea
      </button>
    </div>
  </form>
</div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      employeeId: 123456789,
      description:'',
      employees: [],
    };
  },
  methods: {
    saveTask() {
     axios.post("http://localhost:4200/admin/tasks",{employeeId:this.employeeId,description:this.description})
     .then(res=>console.log(res.data))
     .catch(err=>console.log(err))
    },
  },
  beforeMount() {
    console.log("Antes de montar el comp");
    axios
      .get("http://localhost:4200/admin/employees")
      .then((res) => (this.employees = res.data))
      .catch((err) => console.log(err));
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