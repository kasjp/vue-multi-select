import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MultiSelect from "../KMultiSelect.vue";
import KCheckbox from "@/core/components/KCheckbox.vue";
import KChip from "@/core/components/KChip.vue";
describe("MultiSelect", () => {
  const wrapper = mount(MultiSelect, {
    props: {
      modelValue: {
        EUR: false,
        PLN: false,
        GEL: false,
        DKK: false,
        CZK: false,
        GBP: false,
        SEK: false,
        USD: false,
        RUB: false
      }
    }
  });
  wrapper.setProps({
    "onUpdate:modelValue": (e) => wrapper.setProps({ modelValue: e })
  });
  it("renders properly", () => {
    expect(wrapper.find("label").text()).toEqual("EUR");
    expect(wrapper.findAll("label").pop()!.text()).toEqual("RUB");
  });
  it("updates selection list correctly", async () => {
    const allLabels = wrapper.findAllComponents(KCheckbox);
    const randomLabel =
      allLabels[Math.ceil(Math.random() * allLabels.length - 1)];
    await randomLabel.setValue(true);
    expect(wrapper.props().modelValue[randomLabel.text()]).toEqual(true);
    const chip = wrapper.findComponent(KChip);
    expect(chip.text()).toEqual(randomLabel.text());
    await chip.setValue(false);
    expect(wrapper.props().modelValue[randomLabel.text()]).toEqual(false);
  });
});
