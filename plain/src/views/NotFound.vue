<template>
  <div class="nf">
    <p class="nf__code">404</p>
    <h1 class="nf__title">Page not found</h1>
    <p class="nf__hint">
      The page you are looking for could not be found.
    </p>
    <router-link class="nf__link" to="/">Back to home</router-link>
  </div>
</template>

<style lang="scss" scoped>
.nf {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1.5rem;
}

.nf__code {
  margin: 0 0 0.5rem;
  font-size: clamp(2.5rem, 10vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
  color: #ddd;
}

.nf__title {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111;
}

.nf__hint {
  margin: 0 0 1.5rem;
  max-width: 22rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #666;
}

.nf__link {
  font-size: 0.9375rem;
  font-weight: 500;
  color: #0d9488;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}
</style>
