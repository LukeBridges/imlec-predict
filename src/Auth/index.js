import { AuthStoreModule } from "./Store/";

export function registerAuthModule(app, store, router) {
  store.registerModule("auth", AuthStoreModule);
  router.addRoute({
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "auth" */ "./Pages/Login.vue"),
  });
}
