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
html {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

/* Shell layout (global; Waxon .waxon_tm_all_wrap may set floats — override for flex) */
.site-root.site-root {
  min-height: 100vh;
}

.site-shell {
  display: flex;
  min-height: 100vh;
  align-items: stretch;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
  }
}

.site-main {
  flex: 1;
  min-width: 0;
  width: 100%;
  background: #fafafa;
  box-sizing: border-box;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-right: max(1.5rem, env(safe-area-inset-right, 0px));
  padding-left: max(0.4rem, env(safe-area-inset-left, 0px));

  @media (max-width: 767px) {
    padding-top: max(1.875rem, env(safe-area-inset-top, 0px));
    padding-bottom: max(2rem, env(safe-area-inset-bottom, 0px));
    padding-left: max(0.75rem, env(safe-area-inset-left, 0px));
    padding-right: max(1rem, env(safe-area-inset-right, 0px));
  }

  @media (max-width: 380px) {
    padding-left: max(0.55rem, env(safe-area-inset-left, 0px));
    padding-right: max(0.75rem, env(safe-area-inset-right, 0px));
  }
}

/* Single column + base prose for home, contact, etc. (avoids Waxon float/padding drift). */
.site-main__column {
  max-width: 42rem;
  margin-left: 0;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;
  font-size: 0.9rem;
  line-height: 1.55;
  font-family: inherit;
  color: #333;
}
</style>
