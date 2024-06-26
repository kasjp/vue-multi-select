## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Example

```vue
<script setup lang="ts">
import { KMultiSelect } from "vue-multi-select";
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
  <div class="flex justify-center items-center h-full">
    <k-multi-select style="width:700px" :model-value="currencies" />
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
```
