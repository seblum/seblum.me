<template>
  <div class="contact-page">
    <h1 class="contact-page__title">Contact</h1>
    <p class="contact-page__lead">
      Want to get in touch? Send an email — I’d be happy to hear from you.
    </p>
    <p class="contact-page__action">
      <a
        class="contact-page__link"
        href="mailto:hello@seblum.me"
        @click="trackMailClick"
      >
        hello@seblum.me
      </a>
    </p>
  </div>
</template>

<script setup>
import { event as gtagEvent } from "vue-gtag";

function trackMailClick() {
  gtagEvent("link-email-click", {
    event_category: "documentation",
    event_label: "Email link clicked",
    value: 1,
  });
}
</script>

<style lang="scss" scoped>
/* Width + body type come from .site-main__column ([App.vue]); match home section labels */
.contact-page {
  padding: 0 0 3rem;
  text-align: left;
}

.contact-page__title {
  margin: 0 0 1rem;
  padding: 0;
  border: 0;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: #111;
}

.contact-page__lead {
  margin: 0 0 1.25rem;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}

.contact-page__action {
  margin: 0 0 2rem;
}

.contact-page__link {
  font-size: inherit;
  font-weight: 600;
  color: #2d8a8a;
  text-decoration: none;
  overflow-wrap: anywhere;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}
</style>
