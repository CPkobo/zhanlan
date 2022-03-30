<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <h1 class="title block">{{ state.name }}</h1>
        <!-- <h2 class="subtitle block">詳細情報</h2> -->
      </header>
      <section class="modal-card-body">
        <div class="content">
          <span class="tag is-black is-pulled-right">{{ state.category }}</span>
          <p>{{ state.summary }}</p>
          <p>
            <a :href="state.website">{{ state.website }}</a>
          </p>
          <div class="field">
            <label class="label">来場申し込み</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div class="field">
            <label class="label">商談予約</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div class="field">
            <label class="label">コメント</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <button class="button is-fullwidth is-success mb-3">送信</button>
          <button class="button is-fullwidth is-danger" @click="closeModal">
            キャンセル
          </button>
        </div>
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="closeModal"
        >
          ×
        </button>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useCompany } from "../../composables/modal";
const { state, close } = useCompany();
const modal = useModal();
const closeModal = () => {
  close();
  modal.value = false;
};
</script>