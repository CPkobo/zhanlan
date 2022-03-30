<template>
  <main>
    <HeaderNav />
    <HeroImage />
    <h2 class="title is-2 has-text-centered mt-5">主な出展商品</h2>
    <p class="is-size-3 has-text-centered">画像クリックで詳細表示</p>
    <GalleryBoxes :data="data" />
    <CompanyModal :class="{ 'is-active': modal }" />
    <FooterNav />
  </main>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import HeaderNav from "../components/HeaderNav.vue";
import FooterNav from "../components/FooterNav.vue";
import HeroImage from "../components/Hero/HeroImage.vue"
import GalleryBoxes from "../components/FlexGallery/GalleryBoxes.vue";
import CompanyModal from "../components/Modal/CompanyModal.vue";
// import { useCompany } from "../composables/modal";
// import { useGallery } from "../composables/galleries";

// const data = useGallery();
const company = useCompany();
const modal = useModal();
const { data } = await useLazyFetch<CompanyInfo[]>("/api/getImages", {key: 'gallery'});
const refresh = () => refreshNuxtData('gallery')
// refreshNuxtData('gallery')
// watch(data.value, (newPosts) => {
  // Because posts starts out null, you won't have access
  // to its contents immediately, but you can watch it.
// })
// refresh(true).then(() => {
//   data.value = data.value
// })
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
