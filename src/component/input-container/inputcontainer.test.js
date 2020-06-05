import React from 'react';
import { shallow } from 'enzyme';
import InputContainer from './Inputcontainer.component';







describe("<InputContainer/ >", ()=>{
    const wrapper = shallow(<InputContainer/>)
    beforeEach(()=>{
        wrapper.setState ({
            id: 1,
            todoInput: "abc",
            pomoCount: 4
        });
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
    it("initialize state when button clicked", ()=>{
        wrapper.find('button').simulate("click")
        expect(wrapper.state().todoInput).toEqual("")
        expect(wrapper.state().pomoCount).toEqual(1)
    })

    
    })





