import React from 'react';
import { shallow } from 'enzyme';
import {TodoItem} from './todoItem.component';
import Pomoblock from '../pomoblock/pomoblock.component';


describe("<TodoItem />", ()=>{
    const mockProps={
        id: 1,
        name:"test Item",
        pomoCount: 5,
        livePomoBlocks: 5,
        finishedPomoBlocks: 0
    }

    const wrapper = shallow(<TodoItem item={mockProps} moveItem={()=>{}} moveBack={()=>{}} isLive={true}/>)
    it("renders TodoItem", ()=>{
        expect(wrapper).toMatchSnapshot();
    });
    it("renders exact number of pomoblocks", ()=>{
        expect(wrapper.find(Pomoblock).length).toEqual(5)
    })


    
    })





