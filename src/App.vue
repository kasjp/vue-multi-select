<script setup lang="ts">
import KMultiSelect from "@/components/KMultiSelect.vue";
import { reactive } from "vue";

const currencies = reactive({
  EUR: false,
  PLN: false,
  GEL: false,
  DKK: false,
  CZK: false,
  GBP: false,
  SEK: false,
  USD: false,
  RUB: false
});
</script>

<template>
  <div class="flex justify-center items-center sm:h-full">
    <k-multi-select
      class="w-2xl"
      :model-value="currencies"
      @update:model-value="console.log"
    />
  </div>
</template>
<style>
html,
body,
body > div#app,
main {
  width: 100%;
  height: 100%;
}
html {
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
