<script setup lang="ts">
import KCheckbox from "@/core/components/KCheckbox.vue";
import KChip from "@/core/components/KChip.vue";
import type { TMultiSelectObject } from "@/core/types/TMultiSelectObject";
import { reactive, type ModelRef } from "vue";

const model: ModelRef<TMultiSelectObject> = defineModel<TMultiSelectObject>({
  required: true
});

const emits = defineEmits<{
  (e: "update:modelValue", model: TMultiSelectObject): void;
}>();

//Init pre-selected from model
const selectedValuesList = reactive(
  Object.entries(model.value)
    .filter(([_key, value]) => value)
    .map(([key, _value]) => key)
);

//Populate selected values in order which they were selected
function handleSelect(currency: string, value: boolean) {
  if (!value && selectedValuesList.includes(currency)) {
    selectedValuesList.splice(selectedValuesList.indexOf(currency), 1);
  } else if (value) {
    selectedValuesList.push(currency);
  }
  emits("update:modelValue", model.value);
}
</script>
<template>
  <div
    class="multi-select-wrapper flex flex-col gap-12 p-7 pt-10 bg-white box-border"
  >
    <div class="selected grid sm:grid-cols-3 gap-y-7 gap-4">
      <k-chip
        v-for="label in selectedValuesList"
        :key="label + '_selected'"
        v-model="model[label]"
        :label="label"
        @update:model-value="handleSelect(label, false)"
      >
        {{ label }}
      </k-chip>
    </div>
    <div class="grid sm:grid-cols-3 gap-y-7 gap-x-4">
      <k-checkbox
        v-for="label in Object.keys(model)"
        :key="label"
        v-model="model[label]"
        :label="label"
        @update:model-value="handleSelect(label, $event)"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.multi-select-wrapper {
  border-radius: 0.5em;
  border: 2px solid #a3a3a3;
  box-shadow: 5px 7px 13px 0px #cdcdcd;
}
</style>
