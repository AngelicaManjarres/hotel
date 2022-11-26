import axios from 'axios'
import { onBeforeMount, ref } from 'vue'

export function getRequest(uri) {
    let res = ref([])

    onBeforeMount(() => {
        axios.get(uri)
        .then(bills => {
            res.value = bills.data
        })
    })

    return res
}