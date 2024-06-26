<script setup lang="ts">
import type { ModelRef } from "vue";

defineProps<{ label?: string }>();
const model: ModelRef<boolean> = defineModel<boolean>({ required: true });
</script>

<template>
  <div
    class="flex justify-center items-center gap-2 w-full py-2 px-1 text-7 font-500 bg-primary select-none text-black pos-relative box-border b-rounded"
    :class="{ checked: model }"
  >
    <input
      v-model="model"
      class="flex justify-center items-center cursor-pointer"
      type="checkbox"
      name="checkbox"
    />
    <slot>{{ label }}</slot>
  </div>
</template>

<style scoped lang="scss">
$color-border: #a3a3a3;
$color-close-primary: #333;
$color-close-alternate: #fff;
input[type="checkbox"] {
  position: absolute;
  top: -0.5em;
  right: -0.5em;
  appearance: none;
  background-color: $color-close-primary;
  border: 3px solid $color-close-alternate;
  width: 1em;
  height: 1em;
  border-radius: 1em;
  &::before {
    content: "X";
    color: $color-close-alternate;
    font-size: 0.6em;
  }
  &:hover {
    border: 2px solid $color-close-primary;
    background-color: $color-close-alternate;

    &::before {
      color: $color-close-primary;
    }
  }
}
</style>
