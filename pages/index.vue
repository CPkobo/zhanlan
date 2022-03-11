<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <main>
    <HeaderNav />

    <TileMock />
    <div v-for="(datum, dx) in data" :key="'data' + dx">
      <TileAncestor :ancestor="datum" />
    </div>
    <CompanyModal :class="{ 'is-active': modal }" />
    <FooterNav />
  </main>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import HeaderNav from "../components/HeaderNav.vue";
import FooterNav from "../components/FooterNav.vue";
import TileAncestor from "../components/Tiles/TileAncestor.vue";
import TileMock from "../components/Tiles/TileMock.vue";
import CompanyModal from "../components/Modal/CompanyModal.vue";
import { useData } from "../composables/datas";
import { useModal } from "../composables/modal";
// import HelloWorld from "./components/HelloWorld.vue";

const data = useData();
const modal = useModal();
// console.log(data.value);
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
