<template>
  <main>
    <HeaderNav />
    <p @click="debug">---{{ company.state.name }}---</p>
    <CompanyModal :class="{ 'is-active': modal }" />
    <GalleryBoxes :data="data" />
    <FooterNav />
  </main>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import HeaderNav from "../components/HeaderNav.vue";
import FooterNav from "../components/FooterNav.vue";
import GalleryBoxes from "../components/FlexGallery/GalleryBoxes.vue";
import CompanyModal from "../components/Modal/CompanyModal.vue";
// import { useCompany } from "../composables/modal";
// import { useGallery } from "../composables/galleries";

const data = useGallery();
const company = useCompany();
const modal = useModal();
const debug = () => {
  console.log(company.state.value);
};
</script>

<style lang="scss">
// @import "bulma/bulma.sass";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
main {
  margin-left: 30px;
  margin-right: 30px;
}
</style>
