<template>
    <div>
        <h3 class="ms-5 mb-3">Editar Tarea</h3>
        <EditTasks></EditTasks>
    </div>
</template>
<script> 
import EditTasks from "@/components/Tasks/TasksFormComponent.vue"    
export default{
    data(){
        return{

        }
    },
    components:{
        EditTasks,
    }
}
</script>