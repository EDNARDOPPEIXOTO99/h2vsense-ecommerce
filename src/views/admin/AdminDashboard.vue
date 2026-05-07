<template>

<div>

<h1 class="text-2xl font-bold mb-4">
Admin Dashboard
</h1>

<DataTable :value="products">

<Column field="name" header="Produto" />
<Column field="price" header="Preço" />

</DataTable>

</div>

</template>

<script lang="ts">

import DataTable from "primevue/datatable"
import Column from "primevue/column"

export default {

components:{ DataTable, Column },

data(){
return{
products:[
{ name:"Sensor H2", price:1200 },
{ name:"Kit IoT", price:3500 }
]
}
}

}

</script>