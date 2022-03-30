<template>
  <section class="section content">
    <h1 class="title is-1">{{info.name}}</h1>
    <div class="is-size-3" v-html="info.description"></div>
    <a :href="info.website" target="_blank" v-if="info.website.startsWith('http')">Webサイト</a>
    <div class="is-flex is-flex-wrap-wrap is-flex-direction-row is-flex-grow-0">
      <div class="box is-flex-grow-0">
        <div class="img-box">
          <img
            v-for="img, idx in info.imgs"
            :key="'idvimg-' + idx"
            :src="img.img.url"
            :alt="img.alt"
            :width="img.img.width"
            :height="img.img.height"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  info: CompanyInfo;
}
const props = defineProps<Props>();

</script>