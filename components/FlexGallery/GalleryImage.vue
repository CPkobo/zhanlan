<template>
  <img class="box m-2" :src="datum.src" @click="toggleModal" />
</template>

<script setup lang="ts">
import { useCompany } from "../../composables/modal";

interface Props {
  datum: GalleryData;
}
const props = defineProps<Props>();
const company = useCompany();
const modal = useModal();
const toggleModal = () => {
  console.log(14);
  company.open(props.datum.company);
  modal.value = true;
};
</script>
