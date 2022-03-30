<template>
  <div class="is-flex is-flex-wrap-wrap is-flex-direction-row is-flex-grow-0">
    <GalleryImage
      v-for="(datum, gx) in data.contents"
      :key="'img-' + gx"
      :datum="datum"
    />
  </div>
</template>

<script setup lang="ts">
import GalleryImage from "./GalleryImage.vue";
// interface Props {
//   data: GalleryData[];
// }
// const props = defineProps<Props>();

const { data } = await useFetch<{ contents: CompanyInfo[]}>("/api/getImages");
</script>