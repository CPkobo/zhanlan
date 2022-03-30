<template>
  <main>
    <HeaderNav />
    <Individual :info="info" />
    <FooterNav />
  </main>
</template>

<script setup>
import Individual from "../../components/Company/Individual.vue"
const route = useRoute()
const order = typeof route.params.order === 'string'
  ? route.params.order
  : route.params.order.join("")
const { data: info } = await useFetch(`/api/getIndividual?index=${order}`)
</script>