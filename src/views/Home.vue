<template>

<div>

<h1 class="text-3xl font-bold mb-6">
⚡ H2VSENSE Store
</h1>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">

<Card v-for="p in products" :key="p.id">

<template #title>{{ p.name }}</template>

<template #content>

<p>{{ p.description }}</p>

<p class="font-bold mt-2">R$ {{ p.price }}</p>

<Button label="Ver" @click="$router.push(`/product/${p.id}`)" />

</template>

</Card>

</div>

</div>

</template>

<script lang="ts">

import Card from "primevue/card"
import Button from "primevue/button"

export default {

components:{ Card, Button },

data(){
return{
products:[
{
id:1,
name:"Sensor H2VSENSE",
price:1200,
description:"Detecção de hidrogênio com IoT"
},
{
id:2,
name:"Kit Industrial H2V",
price:3500,
description:"Sistema completo com monitoramento"
},
{
id:3,
name:"SaaS Monitoramento",
price:890,
description:"Dashboard com alertas em tempo real"
}
]
}
}

}

</script>