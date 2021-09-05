<template>
  <div class="flex justify-center items-center bg-purple-300">
    <form
      class="
        flex-grow
        max-w-sm
        m-8
        p-8
        flex flex-col
        gap-8
        bg-white
        text-center
      "
      @submit.prevent="submit"
    >
      <h1 class="text-3xl font-extrabold border-b border-w- border-purle-900">
        Login
      </h1>
      <p v-if="loginInfo.error" class="py-2 px-4 bg-red-600 text-white">
        {{ loginInfo.error }}
      </p>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="loginInfo.email" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="loginInfo.password" />
      </div>
      <button
        type="submit"
        class="
          px-4
          py-2
          text-xl
          bg-purple-600
          text-white
          font-extrabold
          uppercase
          tracking-widest
        "
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const loginInfo = new ref({ email: "", password: "", error: null });
    const router = useRouter();

    return {
      loginInfo,
      submit: () => {
        store
          .dispatch("auth/login", loginInfo.value)
          .then(() => {
            router.push("/");
          })
          .catch((error) => {
            loginInfo.value.email = "";
            loginInfo.value.password = "";
            loginInfo.value.error = error.code;
          });
      },
    };
  },
};
</script>

<style lang="postcss">
.form-group {
  @apply flex flex-row;
}

.form-group input {
  @apply flex-grow ml-4 border;
}
</style>
