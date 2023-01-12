<template>


<div id="billing">
  <div class="container">
    <h2>Facturación</h2>
    <!--Searchbar-->
    <searchbar @do-search="print"/>

    <table>
            <tr> 
                <th>Código</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Concepto</th>
            </tr>

            <tr v-for="bill in bills" :key="bill._id" @click="openBill()">
                <td>{{ bill.code }}</td>
                <td>{{ bill.name }}</td>
                <td>{{ bill.total }}</td>
                <td>{{ bill.reference[0].title }}</td>
                <td class="bg-info p-2" @click.stop="deleteBill(bill._id)">
                  <i class="fa-solid fa-pen-to-square"></i>
                </td>
                <td class="bg-danger p-2" @click.stop="deleteBill(bill._id)">
                  <i class="fa-solid fa-trash"></i>
                </td>
            </tr>

        </table>

    <div class="add-bill">
        <button class="toggleBillingForm" @click="toggleBillingForm = true">General Factura</button>
    </div>
    
  </div>
<billing-form class="billing-form" v-if="toggleBillingForm" @close-form="closeBillingForm" />
<single-bill class="single-bill" v-if="toggleSingleBill" @close-single-bill="closeSingleBill" :bill="bill" />
</div>
</template>

<script>
import { computed, ref } from 'vue'
import BillingForm from '../components/Billing/BillingFormComponent'
import SingleBill from '../components/Billing/SingleBillComponent'
import Searchbar from '../components/Billing/SearchbarBillingComponent'

//Composable
import { getRequest } from '../composables/getReq.js'

export default {
    components: {
        BillingForm,
        SingleBill,
        Searchbar
    },
    setup() {
        let bill = ref({code: 1, name: "Angelica", total:38000, date: '07/07/2022' })
        let toggleBillingForm = ref(false)
        let toggleSingleBill = ref(false)
        //Getting all bills
        const bills = getRequest('http://localhost:4200/admin/billing')

        //Opening single bill block
        const openBill = (id) => {
          bill = computed(() => {
            bills.value.filter(single => single._id == id)
          })
          console.log(bill)
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
        const print = () => console.log("Hello world")

        const deleteBill = (id) => {
          bill = bills.value.filter(single => single._id == id)
          console.log(bill)
        }
       
        return { toggleBillingForm, toggleSingleBill, closeBillingForm, openBill, closeSingleBill, bills, bill, print, deleteBill }
        
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

.toggleBillingForm {
    background: #BCE742;
    border: none;
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