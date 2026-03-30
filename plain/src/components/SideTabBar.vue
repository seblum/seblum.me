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
  </aside>
</template>

<style lang="scss" scoped>
.side {
  flex-shrink: 0;
  width: 276px;
  padding: 1.75rem 1.35rem;
  border-right: 1px solid #ececec;
  background: #fff;
}

.side__brand {
  padding-bottom: 1.25rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid #e8e8e8;
}

.side__title {
  font-size: 1.3125rem;
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
  gap: 0.4rem;
}

.side__tab {
  display: block;
  padding: 0.55rem 0.75rem;
  margin: 0 -0.75rem;
  font-size: 1rem;
  font-weight: 500;
  color: #444;
  text-decoration: none;
  border-radius: 4px;
  transition:
    background 0.12s ease,
    color 0.12s ease;

  &:hover {
    color: #111;
    background: #f5f5f5;
  }

  &--active {
    color: #111;
    background: #f0f0f0;
    font-weight: 600;
  }
}

@media (max-width: 767px) {
  .side {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ececec;
    padding: 1rem 1rem 1.1rem;
  }

  .side__brand {
    padding-bottom: 0.85rem;
    margin-bottom: 0.85rem;
  }

  .side__title {
    font-size: 1.15rem;
  }

  .side__tagline {
    font-size: 0.78rem;
  }

  .side__nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .side__tab {
    margin: 0;
    padding: 0.45rem 0.75rem;
    border-radius: 6px;
  }
}
</style>
