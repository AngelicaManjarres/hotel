<template>
  <div class="search">
        <form @submit.prevent="sendSearch">
            <div class="search-word">
                <input type="text" placeholder="Buscar" v-model="search">
                <img src="../../assets/img/search.svg">
            </div>
        </form>        
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'SearchbarComponent',
    setup(props, { emit }) {

        const search = ref('')

        const sendSearch = () => {
            emit('doSearch', search.value)
        }


        return { search, sendSearch }
    }

}
</script>

<style scoped>

form {
    width: 90%;
    margin: 0 auto;
}

input, img {
    border: none;
    padding: 2px 5px;
}

input {
    width: 95%;
}

.search-word {
    border: 1px solid #999;
}






@media (max-width: 800px) {
  input {
    width: 90%;
    padding: 10px;
  }
}

</style>