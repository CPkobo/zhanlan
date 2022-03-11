<template>
  <!-- <p>{{ parent }}</p> -->
  <div :class="cls">
    <TileChild
      :child="child"
      v-for="(child, cx) in parent.children"
      :key="'child' + cx"
    />
  </div>
</template>

<script setup lang="ts">
import TileChild from "./TileChild.vue";
interface Props {
  parent: ParentTile;
}
const props = defineProps<Props>();
const size = props.parent.size ? props.parent.size : "";
const cls =
  props.parent.type === "is-vertical"
    ? `tile is-parent is-vertical ${size}`
    : `tile is-parent ${size}`;
</script>