import { getFirestore } from "firebase/firestore";

const firestore = getFirestore();

export const AnalyzeStoreModule = {
  namespaced: true,
  state: () => ({
    locomotives: {
      test: {
        name: "Trainy McTrainface",
        operator: "John Smith",
        weight: 900,
        numAxles: 4,
        wheelDiameter: 45,
        cylinderBore: 3.5,
        numCylinders: 4,
        fireGrateArea: 20,
        boilerCapacity: 32,
      },
    },
  }),
  mutations: {},
  actions: {
    loadLocomotives() {
      console.log(firestore);
    },
  },
  getters: {},
};
