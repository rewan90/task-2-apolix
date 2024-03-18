import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import 'bootstrap/dist/css/bootstrap.css'
// import "bootstrap"
// import "foundation-sites/dist/css/foundation.min.css";
// import "foundation-sites";
import { register } from "swiper/element/bundle";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

("font-awesome-icon", FontAwesomeIcon);
import "./assets/main.css";

const app = createApp(App);
register();

app.use(router);

app.mount("#app");
