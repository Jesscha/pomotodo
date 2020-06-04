import React from 'react';
import { shallow } from 'enzyme';
import InputContainer from './Inputcontainer.component';


it("renders InpunContainer", ()=>{
    const wrapper = shallow(<InputContainer/>)
    expect(wrapper).toMatchSnapshot();
});
  