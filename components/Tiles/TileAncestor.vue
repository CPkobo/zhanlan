<template>
  <div class="tile is-ancestor">
    <div
      :class="`tile ${size}`"
      v-for="(parent, px) in ancestor.parents"
      :key="'par' + px"
    >
      <TileParent :parent="parent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TileParent from "./TileParent.vue";
interface Props {
  ancestor: AncestorTile;
}
const props = defineProps<Props>();
const size = props.ancestor.size ? props.ancestor.size : "";
</script>