<template>
  <div class="is-flex is-flex-wrap-wrap is-flex-direction-row is-flex-grow-0">
    <GalleryImage
      v-for="(datum, gx) in data"
      :key="'galimg-' + gx"
      :datum="datum"
    />
  </div>
</template>

<script setup lang="ts">
import GalleryImage from "./GalleryImage.vue";
interface Props {
  data: CompanyInfo[];
}
const props = defineProps<Props>();

// const refresh = () => refreshNuxtData('gallery')
</script>