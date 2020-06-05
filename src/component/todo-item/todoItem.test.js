import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from './todoItem.component';

TodoItem
describe("<TodoItem />", ()=>{
    const wrapper = shallow(<TodoItem />)
   


    it("renders TodoItem", ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    

    
    })





