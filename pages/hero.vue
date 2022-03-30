<template>
  <main>
    <HeaderNav />
    <HeroImage />
    <FooterNav />
  </main>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import HeaderNav from "../components/HeaderNav.vue";
import FooterNav from "../components/FooterNav.vue";
import HeroImage from "../components/Hero/HeroImage.vue"
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
