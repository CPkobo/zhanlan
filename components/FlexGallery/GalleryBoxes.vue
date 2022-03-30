<template>
  <div class="is-flex is-flex-wrap-wrap">
    <p>mock</p>
    <!-- <GalleryImage
      v-for="(datum, gx) in data"
      :key="'img-' + gx"
      :datum="datum"
    /> -->
  </div>
</template>

<script setup lang="ts">
import GalleryImage from "./GalleryImage.vue";
// interface Props {
//   data: GalleryData[];
// }
// const props = defineProps<Props>();

const { data: images } = await useFetch("/api/getCards");
console.log('fe')
console.log(images.value)
</script>