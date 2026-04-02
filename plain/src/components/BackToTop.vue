<template>
  <button
    v-show="visible"
    type="button"
    class="back-top"
    aria-label="Back to top"
    @click="scrollTop"
  >
    <span class="back-top__icon" aria-hidden="true">↑</span>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(false);

function onScroll() {
  visible.value = window.scrollY > 400;
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style lang="scss" scoped>
.back-top {
  position: fixed;
  z-index: 99;
  bottom: calc(4% + env(safe-area-inset-bottom, 0px));
  right: calc(2% + env(safe-area-inset-right, 0px));
  width: max(2.4em, 44px);
  height: max(2.4em, 44px);
  min-width: 44px;
  min-height: 44px;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.back-top__icon {
  color: #000;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 20px;
  line-height: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
