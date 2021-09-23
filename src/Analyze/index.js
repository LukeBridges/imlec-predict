import { AnalyzeStoreModule } from "./Store";

export function registerAnalyzeModule(app, store, router) {
  store.registerModule("analyze", AnalyzeStoreModule);
  router.addRoute({
    path: "/analyze",
    name: "Analyze",
    component: () =>
      import(/* webpackChunkName: "analyze" */ "./Pages/Analyze.vue"),
  });
}
