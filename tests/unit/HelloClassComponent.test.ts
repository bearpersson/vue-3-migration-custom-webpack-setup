import { HelloClassComponent } from "@components";
import { shallowMount } from "@vue/test-utils";

describe("HelloClassComponent.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloClassComponent, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
