import React from 'react';
import { shallow } from 'enzyme';
import InputContainer from './component/input-container/Inputcontainer.component'
import App from './App';


it("renders InpunContainer", ()=>{
    const wrapper = shallow(<App/>);
    expect(wrapper.find(InputContainer).length).toEqual(1);
});
