import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from './todoItem.component';
import Pomoblock from '../pomoblock/pomoblock.component';


describe("<TodoItem />", ()=>{
    const mockProps={
        name: "test1",
        pomoCount: 5
    }
    const wrapper = shallow(<TodoItem {...mockProps} />)
    it("renders TodoItem", ()=>{
        expect(wrapper).toMatchSnapshot();
    });
    it("renders exact number of pomoblocks", ()=>{
        expect(wrapper.find(Pomoblock).length).toEqual(5)
    })
    })





