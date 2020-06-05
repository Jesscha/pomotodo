import React from 'react';
import { shallow } from 'enzyme';
import {InputContainer} from './Inputcontainer.component';
import configureStore from 'redux-mock-store' 


describe("<InputContainer/ >", ()=>{
    const wrapper = shallow(<InputContainer/>)
    beforeEach(()=>{
        wrapper.setState ({
            id: 1,
            name: "abc",
            pomoCount: 4
        });
        const mockStore = configureStore([]);
    });
    it("renders InpunContainer", ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    it("each input shows each state", ()=>{
        const todoInput = wrapper.find('#todo-input');
        const pomoCount = wrapper.find('#pomo-count');
        expect(todoInput.prop('value')).toEqual("abc");
        expect(pomoCount.prop('value')).toEqual(4);
    })
    })





