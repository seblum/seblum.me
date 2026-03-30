<template>
  <div class="home">
    <About />
    <SiteFooter />
  </div>
</template>

<script setup>
import About from "../components/About.vue";
import SiteFooter from "../components/Footer.vue";
</script>

<style lang="scss" scoped>
.home {
  min-height: 100%;
}
</style>
