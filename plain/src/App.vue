<template>
  <div id="app" class="waxon_tm_all_wrap site-root">
    <div class="waxon_tm_preloader">
      <div class="spinner_wrap">
        <div class="spinner"></div>
      </div>
    </div>
    <div class="site-shell">
      <SideTabBar />
      <main class="site-main">
        <div class="site-main__column">
          <router-view />
        </div>
      </main>
    </div>
    <BackToTop />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import SideTabBar from "./components/SideTabBar.vue";
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

<style lang="scss">
/* Shell layout (global; Waxon .waxon_tm_all_wrap may set floats — override for flex) */
.site-root.site-root {
  min-height: 100vh;
}

.site-shell {
  display: flex;
  min-height: 100vh;
  align-items: stretch;
}

.site-main {
  flex: 1;
  min-width: 0;
  background: #fafafa;
  padding: 2rem 1.5rem 3rem 0.65rem;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 1.25rem 1rem 2rem 0.5rem;
  }
}

/* Single column + base prose for home, contact, etc. (avoids Waxon float/padding drift). */
.site-main__column {
  max-width: 42rem;
  margin-left: 0;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;
  font-size: 0.8125rem;
  line-height: 1.55;
  font-family: inherit;
  color: #333;
}
</style>
