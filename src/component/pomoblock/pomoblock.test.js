import React from 'react';
import { shallow } from 'enzyme';
import Pomoblock from './pomoblock.component';

describe("<Pomoblock />", ()=>{
    const wrapper = shallow(<Pomoblock />)
   


    it("renders Pomoblock", ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    

    
    })





