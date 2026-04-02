<template>
  <div class="waxon_tm_about about" id="about">
    <div class="container">
      <div class="about_inner about__stack">
        <div class="about__photo">
          <img
            class="about__img"
            src="../assets/img/about/SEBA_1.png"
            alt="Sebastian Blum"
          />
        </div>
        <h2 class="about__welcome">Hi there! 👋🏼</h2>
        <div class="about__body">
          <p>
            I'm Sebastian – A Data and
            <router-link to="/work">MLOps</router-link>
            Engineer with a background in cognitive science, working across
            cloud infrastructure, Kubernetes, data engineering, and ML
            tooling.
          </p>
          <p>
            Outside of work, you'll find me doing CrossFit, exploring new
            places, experimenting in the kitchen, or just being outside
            getting some fresh air.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about.waxon_tm_about {
  float: none;
  clear: none;
  width: 100%;
  padding-top: 0;
  margin-bottom: 4rem;
  box-sizing: border-box;
}

.about :deep(.container) {
  max-width: none;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  margin: 0;
}

.about :deep(.about_inner.about__stack) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: none;
  margin: 0;
  text-align: left;
}

.about__photo {
  margin-top: 0;
}

.about__img {
  display: block;
  max-width: 520px;
  width: 100%;
  height: auto;
  margin: 0;
  border-radius: 0;
}

.about__welcome {
  margin: 1.25rem 0 0;
  padding: 0;
  border: 0;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: #111;
}

.about__body {
  margin-top: 1.5rem;
}

.about__body p {
  margin: 0 0 1rem;
  font-style: normal;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}

.about__body p:last-child {
  margin-bottom: 0;
}

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
