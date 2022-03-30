<template>
  <main>
    <HeaderNav />
    <CategoryWrap :infos="infos" />
    <FooterNav />
  </main>
</template>

<script setup>
import CategoryWrap from "../../components/Company/CategoryWrap.vue"
const route = useRoute()
const catname = typeof route.params.catname === 'string'
  ? route.params.catname
  : route.params.catname.join("")
const { data: infos } = await useFetch(`/api/getByCategory?catname=${catname}`)
</script>