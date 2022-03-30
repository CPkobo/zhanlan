<template>
  <div class="card is-fullwidth m-3">
    <header class="card-header">
    <p class="card-header-title">
      <NuxtLink :to="'/individual/' + info.index">{{info.name}}</NuxtLink>
    </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p>{{info.summary}}</p>
        <a :href="info.website" target="_blank" v-if="info.website.startsWith('http')">Webサイト</a>
        <div class="is-flex is-flex-wrap-wrap is-flex-direction-row is-flex-grow-0">
          <div class="box is-flex-grow-0">
            <div class="img-box">
              <img
                v-for="img, idx in info.imgs"
                :key="info.index + '-idvimg-' + idx"
                :src="img.img.url"
                :alt="img.alt"
                :width="img.img.width"
                :height="img.img.height"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  info: CompanyInfo;
}
const props = defineProps<Props>();

</script>