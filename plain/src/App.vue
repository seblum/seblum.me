<template>
  <div id="app" class="waxon_tm_all_wrap">
    <div class="waxon_tm_preloader">
      <div class="spinner_wrap">
        <div class="spinner"></div>
      </div>
    </div>
    <router-view />
    <BackToTop />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import BackToTop from "./components/BackToTop.vue";

function markLoaded() {
  document.body.classList.add("loaded");
}

onMounted(() => {
  if (document.readyState === "complete") {
    markLoaded();
  } else {
    window.addEventListener("load", markLoaded, { once: true });
  }
});
</script>
