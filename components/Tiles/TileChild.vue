<template>
  <div :class="cls" @click="toggleModal">
    <img :src="`/${child.src}`" />
  </div>
</template>

<script setup lang="ts">
import { useModal, useInquiring } from "../../composables/modal";

interface Props {
  child: ChildPict;
}
const props = defineProps<Props>();
const modal = useModal();
const name = useInquiring();
const toggleModal = () => {
  modal.value = true;
  name.value = props.child.company;
};

const cls = props.child.size
  ? `tile box is-child ${props.child.size}`
  : `tile box is-child`;
</script>