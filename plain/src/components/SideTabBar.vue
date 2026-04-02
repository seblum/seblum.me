<template>
  <aside class="side" aria-label="Site">
    <div class="side__brand">
      <div class="side__title">Sebastian Blum</div>
      <div class="side__tagline">MLOps engineer</div>
    </div>
    <nav class="side__nav" aria-label="Primary">
      <router-link
        class="side__tab"
        to="/"
        active-class="side__tab--active"
      >
        Home
      </router-link>
      <router-link
        class="side__tab"
        to="/contact"
        active-class="side__tab--active"
      >
        Contact
      </router-link>
    </nav>
    <div class="side__social" aria-label="Social profiles">
      <a
        v-for="(social, i) in socialList"
        :key="i"
        class="side__social-link"
        :href="social.link"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="social.name"
        @click="trackSocialClick"
      >
        <img
          class="side__social-icon"
          :src="social.icon"
          alt=""
          width="15"
          height="15"
        />
      </a>
    </div>
  </aside>
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
.side {
  flex-shrink: 0;
  width: 276px;
  box-sizing: border-box;
  padding-top: max(3rem, env(safe-area-inset-top, 0px));
  padding-right: max(1.35rem, env(safe-area-inset-right, 0px));
  padding-bottom: 1.75rem;
  padding-left: max(2.5rem, env(safe-area-inset-left, 0px));
  border-right: 1px solid #ececec;
  background: #fff;
}

.side__brand {
  padding-bottom: 1.25rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid #e8e8e8;
}

.side__title {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #111;
  line-height: 1.25;
}

.side__tagline {
  margin-top: 0.35rem;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #666;
  line-height: 1.3;
}

.side__nav {
  display: flex;
  flex-direction: column;
  gap: 0.08rem;
}

.side__tab {
  display: block;
  padding: 0.45rem 0;
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  color: #444;
  text-decoration: none;
  border-radius: 0;
  transition: color 0.12s ease;

  &:hover {
    color: #111;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  &--active {
    color: #111;
    font-weight: 600;
  }
}

.side__social {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 0.08rem;
  margin-top: 1.25rem;
  padding-top: 1.1rem;
  border-top: 1px solid #eee;
}

.side__social-link {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  /* ~44px minimum tap target (WCAG / Apple HIG) */
  min-width: 2.5rem;
  min-height: 2.5rem;
  margin: 0;
  padding: 0;
  color: #666;
  opacity: 0.85;
  text-decoration: none;
  box-sizing: border-box;
  transition:
    opacity 0.15s ease,
    color 0.15s ease;

  &:hover {
    opacity: 1;
    color: #111;
  }
}

.side__social-icon {
  display: block;
  width: 15px;
  height: 15px;
}

@media (max-width: 767px) {
  .side {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ececec;
    padding-top: max(1.875rem, env(safe-area-inset-top, 0px));
    padding-right: max(1rem, env(safe-area-inset-right, 0px));
    padding-bottom: 1.1rem;
    padding-left: max(1.5rem, env(safe-area-inset-left, 0px));
  }

  .side__brand {
    padding-bottom: 0.85rem;
    margin-bottom: 0.85rem;
  }

  .side__title {
    font-size: 1.3rem;
  }

  .side__tagline {
    font-size: 0.78rem;
  }

  .side__nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.12rem;
  }

  .side__tab {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0.35rem 0.05rem 0.35rem 0;
    box-sizing: border-box;
    font-size: 0.875rem;
    letter-spacing: -0.03em;
  }

  .side__social {
    margin-top: 1rem;
    padding-top: 0.85rem;
  }
}

@media (max-width: 380px) {
  .side {
    padding-left: max(1rem, env(safe-area-inset-left, 0px));
    padding-right: max(0.75rem, env(safe-area-inset-right, 0px));
  }
}
</style>
