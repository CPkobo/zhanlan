<template>
  <div class="box is-flex-grow-0">
    <div class="img-box">
      <img
        :src="datum.imgs[index].img.url"
        :alt="datum.imgs[index].alt"
        :width="datum.imgs[index].img.width + 'px'"
        :height="datum.imgs[index].img.height + 'px'"
        @click="toggleModal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCompany } from "../../composables/modal";
import { randInt } from "../../helpers/rand"

interface Props {
  datum: CompanyInfo;
}
const props = defineProps<Props>();
// console.log(props.datum)
const company = useCompany();
const modal = useModal();
const index = randInt(0, props.datum.imgs.length - 1)
const toggleModal = () => {
  company.open(props.datum);
  modal.value = true;
};
</script>

<style scoped>
  img {
    max-width: 100%;
    height: auto;
  }
  div.img-box:hover {
    background-color: rgba(200,200,200, 0.6);
  }
</style>
