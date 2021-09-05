<template>
  <div id="nav">
    <div class="nav-options">
      <router-link to="/">Home</router-link> |
      <router-link to="/locomotives">Analyze</router-link>
    </div>
    <div class="nav-actions">
      <router-link
        to="/login"
        class="
          block
          bg-purple-600
          py-2
          px-4
          uppercase
          font-extrabold
          text-white
          tracking-widest
        "
      >
        Login
      </router-link>
    </div>
  </div>
  <router-view />
</template>

<style lang="postcss">
html,
body,
#app {
  @apply h-full;
}
#app {
  @apply grid;
  grid-template-rows: min-content 1fr;
}

#nav {
  @apply p-4 flex flex-row justify-between items-center;
}

.nav-options a {
  @apply font-extrabold p-2;
}

.nav-options a.router-link-exact-active {
  @apply text-purple-600;
}
</style>
