<template>
  <div class="page page-analyze page-analyze-locomotives">
    <div class="p-8 flex flex-col gap-4 bg-purple-900">
      <h1 class="text-center text-3xl text-white font-extrabold tracking-wide">
        Locomotives
      </h1>
      <div class="locoList">
        <div v-for="(locomotive, id) in locomotives" :key="id">
          <h1 class="text-2xl text-white text-center font-bold">
            {{ locomotive.name }}
          </h1>
          <ul class="specList">
            <li v-for="(val, spec) in locomotive" :key="spec">
              <label>{{ spec }}:</label>
              <input v-model="locomotives[id][spec]" />
            </li>
          </ul>
        </div>
      </div>
      <div
        class="
          py-3
          text-center text-white text-xl
          font-extrabold
          tracking-wider
          bg-purple-700
          border-4 border-white
          rounded-full
        "
      >
        Add New
      </div>
    </div>
    <p>The interesting loco specs are</p>
    <ul>
      <li>Weight</li>
      <li>No of driving axles</li>
      <li>Driving wheel diameter</li>
      <li>Cylinder bore</li>
      <li>No of cylinders</li>
      <li>Fire grate area</li>
      <li>Boiler capacity</li>
      <li>Speed in mph / driving wheel rpm</li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    console.log(store);
    return {
      locomotives: store.state.analyze.locomotives,
    };
  },
};
</script>

<style lang="postcss">
.locoList {
  @apply flex flex-col gap-4;
}
.locoList > * {
  @apply p-4 bg-purple-400 flex flex-col gap-4;
}

.specList {
  @apply grid gap-2;
  grid-template-columns: repeat(auto-fill, minmax(40ch, 1fr));
}
.specList > * {
  @apply border-2 border-purple-700 flex flex-row rounded-full overflow-hidden;
}
.specList > * > label {
  @apply bg-purple-700 text-white px-4 font-bold;
}
.specList > * > input {
  @apply flex-grow text-right px-4 font-bold;
}
</style>
