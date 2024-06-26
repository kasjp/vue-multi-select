<script setup lang="ts">
import type { ModelRef } from "vue";

defineProps<{ label?: string }>();
const model: ModelRef<boolean> = defineModel<boolean>({ required: true });
</script>

<template>
  <label
    class="flex items-center gap-2 w-full py-2 px-1 text-7 font-500 cursor-pointer bg-primary hover:bg-primary-hover active:bg-primary-active select-none box-border"
    :class="{ checked: model }"
  >
    <input
      v-model="model"
      class="flex justify-center items-center pointer-events-none"
      type="checkbox"
      name="checkbox"
    />
    <slot>{{ label }}</slot>
  </label>
</template>

<style scoped lang="scss">
$color-border: #a3a3a3;
$color-text: #104371;
label {
  color: $color-text;
  border: 2px solid $color-border;
  transition: all 200ms ease;
  input[type="checkbox"] {
    appearance: none;
    background-color: transparent;
    border: 2px solid $color-border;
    width: 0.75em;
    height: 0.75em;
    border-radius: 0.25em;
    &::before {
      content: "X";
      color: #ff0200;
      font-size: 0.65em;
      font-weight: bold;
      transform: scale(0);
      transition: transform 150ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
  }
  &.checked {
    background-color: #fff;
    input[type="checkbox"]::before {
      transform: scale(1);
    }
  }
}
</style>
