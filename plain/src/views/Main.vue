<template>
  <div>
    <div class="waxon_tm_main">
      <h2>Sebastian Blum</h2>
    </div>

    <About />
    <SiteFooter />
  </div>
</template>

<script>
import About from "../components/About.vue";
import SiteFooter from "../components/Footer.vue";

export default {
  components: {
    About,
    SiteFooter,
  },
};
</script>

<style lang="scss" scoped>
.waxon_tm_main {
  width: 100%;
  height: auto;
  clear: both;
  float: left;
  text-align: center;
  padding: 50px 0px 20px 0px;

  h2 {
    font-size: 44px;
  }
}
</style>
