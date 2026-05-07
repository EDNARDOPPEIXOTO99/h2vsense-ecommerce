<template>

<div>

<h1 class="text-2xl font-bold">
Produto {{ $route.params.id }}
</h1>

<p class="mt-4">
Detalhes técnicos do sistema H2VSENSE 🚀
</p>

<Button label="Adicionar ao Carrinho" />

</div>

</template>

<script lang="ts">
import Button from "primevue/button"

export default {
components:{ Button }
}
</script>