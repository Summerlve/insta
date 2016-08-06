import App from "./App";
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/Login";

// use vue-router plugin
Vue.use(VueRouter);

// init router
const router = new VueRouter();

router.map({
    "/login": {
        component: Login
    }
});

// use vue-router plugin
router.start(App, "#app");
