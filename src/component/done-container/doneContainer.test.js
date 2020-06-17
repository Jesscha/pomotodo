import React from 'react';
import { shallow } from 'enzyme';
import {DoneContainer} from './doneContainer.component';




describe("<DoneContainer />", ()=>{
    const wrapper = shallow(<DoneContainer doneItems={[]} pageDown={jest.fn()} pageUp={jest.fn()} />)
   


    it("renders DoneContainer", ()=>{
        expect(wrapper).toMatchSnapshot();
    }); 

    

    
    })





