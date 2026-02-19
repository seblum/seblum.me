<template>
  <div class="waxon_tm_about" id="about">
    <div class="container">
      <div class="about_inner">
        <div class="left">
          <img
            class="thumbnail"
            src="../assets/img/about/SEBA_1.png"
            alt="man with sunglass"
          />
        </div>
        <!-- End left thumbnail -->
        <div class="right">
          <div class="name">
            <!-- <h3>Sebastian Blum<span class="bg">About</span></h3> -->
            <span class="job">Hi there! 👋🏼</span>
          </div>
          <div class="text">
            <p>
              I'm Sebastian – A Data and
              <router-link to="/mlops">MLOps</router-link>
              Engineer with a background in cognitive science, working across
              cloud infrastructure, Kubernetes, data engineering, and ML
              tooling.
            </p>
            <p>
              Outside of work, you'll find me doing CrossFit, exploring new
              places, experimenting in the kitchen, or just being outside
              getting some fresh air.
            </p>
            <p>
              Want to get in touch? Just drop an email to
              <a
                href="mailto:hello@seblum.me"
                v-bind:class="EvAnMail"
                @click="EvAnMail"
              >
                hello@seblum.me
              </a>
            </p>
          </div>
        </div>
        <!-- End right content -->
      </div>
    </div>
  </div>
  <!-- End about -->
</template>

<script>
export default {
  methods: {
    EvAnMail() {
      this.$gtag.event("link-email-click", {
        event_category: "documentation",
        event_label: "Email link clicked",
        value: 1,
      });
    },
  },
};
</script>

<style scoped>
a,
a:link,
a:visited {
  color: #2d8a8a;
  background-color: transparent;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
