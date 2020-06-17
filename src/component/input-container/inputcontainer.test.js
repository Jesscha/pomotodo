import React from "react";
import { shallow } from "enzyme";
import { InputContainer } from "./Inputcontainer.component";

describe("<InputContainer/ >", () => {
  const wrapper = shallow(<InputContainer />);
  beforeEach(() => {
    wrapper.setState({
      id: 1,
      name: "abc",
      pomoCount: 4,
    });
  });
  it("renders InpunContainer", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
