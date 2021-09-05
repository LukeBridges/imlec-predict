import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseAuth = getAuth();

export const AuthStoreModule = {
  namespaced: true,
  state: () => ({
    currentUser: null,
  }),
  mutations: {
    setUser: (state, user) => {
      state.currentUser = user;
    },
  },
  actions: {
    login: (context, { email, password }) => {
      return signInWithEmailAndPassword(firebaseAuth, email, password).then(
        () => {
          context.commit("setUser", firebaseAuth.currentUser);
        }
      );
    },
  },
  getters: {},
};
