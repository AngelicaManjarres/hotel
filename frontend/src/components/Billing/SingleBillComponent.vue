<template>
  <div class="d-flex">
    <div class="single-bill-container">
        <div><strong class="close" @click="handleClose">X</strong></div>
        <div id="factura" class="mt-4 ms-4 me-4">
            <h2>Factura</h2>
            <div>
                <p>Código {{ bill.code }}</p>
                <p>Nombre: {{ bill.name }}</p>
                <p>Valor: {{ bill.total }}</p>
                <p>Concepto: </p>
                <p>Fecha de pago: {{ bill.date }}</p>
            </div>
            
        </div>
        <button @click="generatePdf">Generar PDF</button>
        
    </div>
    
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js'

export default {
    name: 'SingleBillComponent',
    props: ['bill'],
    setup(props, { emit }) {

        const handleClose = () => {
            emit('closeSingleBill')
        }

        const generatePdf = () => {
            html2pdf(document.getElementById('factura'), {
                margin: 2,
                filename: 'recibo-casa-levy.pdf'
            })
            console.log('Printing pdf')
        }

        return { handleClose, generatePdf }
    }
}
</script>

<style scoped>
.close {
    float: right;
    padding: 10px;
    cursor: pointer;
}
.single-bill-container {
    position: relative;
    width: 50%;
    background: #fff;
    margin: auto;
    box-shadow: 3px 3px 10px #666;
}

p {
    margin: 5px 0;
}

button {
    background: #A1CB2B;
    border: none;
    margin: 2rem 2rem;
}

</style>