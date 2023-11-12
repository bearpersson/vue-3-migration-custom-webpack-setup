import { shallowMount } from "@vue/test-utils";
import HelloClassComponent from "@components/HelloClassComponent.vue";

describe("HelloClassComponent.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloClassComponent, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
