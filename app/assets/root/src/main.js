import App from "./App";
import Vue from "vue";
import VueRouter from "vue-router";
import Editor from "./components/Editor";
import Setting from "./components/Setting";

// use vue-router plugin
Vue.use(VueRouter);

// init router
const router = new VueRouter();

router.map({
    "/editor": {
        component: Editor
    },
    "/setting": {
        component: Setting
    }
});

// use vue-router plugin
router.start(App, "body");

// use /editor default
router.go("/editor");
