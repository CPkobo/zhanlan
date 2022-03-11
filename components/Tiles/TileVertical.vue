<template>
  <div class="tile is-ancestor">
    <div class="tile">
      <TileParent
        :parent="parent"
        v-for="(parent, px) in ancestor.parents"
        :key="'par' + px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TileParent from "./TileParent.vue";
interface Props {
  ancestor: AncestorTile;
}
const props = defineProps<Props>();
console.log(props.ancestor);
</script>