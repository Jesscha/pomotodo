import React from 'react';
import { shallow } from 'enzyme';
import {TodoContainer} from './todoContainer.component';
import TodoItem from '../todo-item/todoItem.component';


describe("<TodoContainer/ >", ()=>{
    const mockProps = [
        {
        id: 1,
        name: "test1",
        pomoCount: 3
        },
        {
        id: 2,
        name: "test2",
        pomoCount: 2
        },
    ]
    const wrapper = shallow(<TodoContainer todoItems={mockProps}  />)


    it("renders InpunContainer", ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    it("renders given number of todo Items", ()=>{
        expect(wrapper.find(TodoItem).length).toEqual(2);
    });
    })





