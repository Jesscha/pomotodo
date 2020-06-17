import React from 'react';
import { shallow } from 'enzyme';
import {BlockAcheivedContainer} from './blockAcheivedContainer.component';
import Pomoblock from '../pomoblock/pomoblock.component';


describe("<BlockAcheivedContainer />", ()=>{
    const wrapper = shallow(<BlockAcheivedContainer  achievedBlocks={3}/>)
   


    it("renders BlockAcheivedContainer", ()=>{
        expect(wrapper).toMatchSnapshot();
    });     
    })





