import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/tailwind.css";
import elements from "./components/elements/elements";

const app = createApp(App);

elements.forEach((el) => {
    app.component(el.name, el);
});

app.use(store).mount("#app");
