<template>
  <div>
    <div v-for="info, index in infos" :key="'bycat-' + index">
      <CategoryCard :info="info" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryCard from "./CategoryCard.vue"
interface Props {
  infos: CompanyInfo[];
}
const props = defineProps<Props>();

</script>