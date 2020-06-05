import React from 'react';
import { shallow } from 'enzyme';
import {TodoContainer} from './todoContainer.component';


describe("<TodoContainer/ >", ()=>{
    const wrapper = shallow(<TodoContainer todoItems={[]}  />)


    it("renders InpunContainer", ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    



    
    })





