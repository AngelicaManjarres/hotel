<template>
<div id="billing">
  <div class="container">
    <h2>Facturación</h2>
    <!--Searchbar-->
    <searchbar-component @do-search="print"/>

    <table>
            <tr> 
                <th>Código</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Concepto</th>
            </tr>

            <tr v-for="bill in bills" :key="bill._id" @click="openSingleBill(bill._id)">
                <td>{{ bill.code }}</td>
                <td>{{ bill.name }}</td>
                <td>{{ bill.total }}</td>
                <td>{{ bill.reference[0].title }}</td>
            </tr>

        </table>

    <div class="add-bill">
        <button @click="toggleBillingForm = true">General Factura</button>
    </div>
    
  </div>
<billing-form-component class="billing-form" v-if="toggleBillingForm" @close-form="closeBillingForm" />
<single-bill-component class="single-bill" v-if="toggleSingleBill" @close-single-bill="closeSingleBill" :bill="bill" />
</div>
</template>

<script>
import { computed, ref } from 'vue'
import BillingFormComponent from '../components/Billing/BillingFormComponent'
import SingleBillComponent from '../components/Billing/SingleBillComponent'
import SearchbarComponent from '../components/Billing/SearchbarBillingComponent'

//Composable
import { getRequest } from '../composables/getReq.js'

export default {
    components: {
        BillingFormComponent,
        SingleBillComponent,
        SearchbarComponent
    },
    setup() {
        let bill = ref([])
        let toggleBillingForm = ref(false)
        let toggleSingleBill = ref(false)

        //Getting all bills
        const bills = getRequest('http://localhost:4200/admin/billing')


        //Opening single bill block
        const openSingleBill = (id) => {
            toggleSingleBill.value = true
        }

        //Closing single bill block
        const closeSingleBill = () => {
            toggleSingleBill.value = false
        }

        //Closing the form for adding a new bill
        const closeBillingForm = () => {
            toggleBillingForm.value = false
            console.log(toggleBillingForm.value)
        }


        //Search bar functionality
        const print = (word) => console.log(word) 
       
  
        return { toggleBillingForm, toggleSingleBill, closeBillingForm, openSingleBill, closeSingleBill, bills, bill, print }
        
    }
}
</script>

<style scoped>
h2 {
  font-size: 1.7rem;
  margin: 2rem 4rem;
}

/* Tabla de resultados */
table {
    width: 90%;
    margin: 2rem auto;
}
th {
    font-weight: 600;
    padding-left: 10px;
}
td {
    background: #D9D9D9;
    border: 2px solid #fff;
    padding: 2px 5px;
    text-align: center;
    cursor: pointer;
}


/*Billing form*/
.billing-form {
    width: 35%;
}

/*Single bill */
.single-bill {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5)
}



/* Genera factura */
.add-bill {
    text-align: right;
}

button {
    background: #BCE742;
    border: none;
}

/* Media Qeuries */
@media (max-width: 800px) {
  input {
    width: 90%;
    padding: 10px;
  }
  table {
    width: 98%;
    margin: 3rem auto;
  }
  td {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  h2 {
    text-align: center;
    font-size: 2rem;
  }
  .billing-form {
    width: 75vw;
  }
}
</style>