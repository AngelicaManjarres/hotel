<template>
  <div  class="circle">
    <div class="btn-circle"><router-link class="link1" to="addTasks">+</router-link></div>
  </div>
</template>

<script>
</script>
<style scoped>
.btn-circle {
    color: #fff;
    font-size: 35px;
    margin: 0;
    padding: 0;
}
.circle{
    width: 50px;
    height: 50px;
    position:fixed;
    bottom: 10px;
    right: 10px;
    border-radius: 50%;
    background: #2e4372 !important;
    display: flex;
    justify-content: center;
}
.link1{
  text-decoration: none;
  color: white;
}
</style>