import { createApp } from "vue";
import { createGtag } from "vue-gtag";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/style.scss";

const app = createApp(App);

app.use(router);
app.use(
  createGtag({
    tagId: "G-E5LD5KD037",
    pageTracker: {
      router,
    },
  })
);

app.mount("#app");
