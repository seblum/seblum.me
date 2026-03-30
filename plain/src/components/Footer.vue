<template>
  <footer class="ft">
    <div class="ft__inner">
      <a
        v-for="(social, i) in socialList"
        :key="i"
        class="ft__link"
        :href="social.link"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="social.name"
        @click="trackSocialClick"
      >
        <img
          class="ft__icon"
          :src="social.icon"
          alt=""
          width="20"
          height="20"
        />
      </a>
    </div>
  </footer>
</template>

<script setup>
import { event as gtagEvent } from "vue-gtag";
import iconGithub from "../assets/img/svg/social/github.svg";
import iconLinkedin from "../assets/img/svg/social/linkedin.svg";

const socialList = [
  { icon: iconGithub, link: "https://github.com/seblum", name: "GitHub" },
  {
    icon: iconLinkedin,
    link: "https://www.linkedin.com/in/sebastian-blum-7a7246184/",
    name: "LinkedIn",
  },
];

function trackSocialClick() {
  gtagEvent("link-socials-click", {
    event_category: "documentation",
    event_label: "Socials link button clicked",
    value: 1,
  });
}
</script>

<style lang="scss" scoped>
.ft {
  margin-top: auto;
  padding: 1.75rem 1.5rem 2rem;
}

.ft__inner {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.65rem;
  transform: translateX(-1.25rem);
}

.ft__link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #666;
  opacity: 0.85;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 1;
    color: #111;
  }
}

.ft__icon {
  display: block;
  width: 20px;
  height: 20px;
}
</style>
