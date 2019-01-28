import { configure, mount } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import DisplayUserDetails from './DisplayUserDetails';
import mockstate from '../constants/testUserData.json';

configure ({adapter : new Adapter()})

describe('DisplayUserDetails', () => {

  const wrapper  = mount(<DisplayUserDetails 
    userState = {{pearsonUserDetails : mockstate}}
    deleteUser = {jest.fn()}
   />);

   it('check for the initial render of the component', () => {
     expect(wrapper).toBe.exisit;
   });

  it("renders a label", () => {
    const label = wrapper.find("label");
    expect(label.text()).toEqual("Pearson User Management");
  });

  it('check displayUserDetails method is rendered correctly', () => {
    const DisplayUserDetailsMock = jest.spyOn(DisplayUserDetails.prototype, 'displayUserDetails');
    const wrapper  = mount(<DisplayUserDetails userState = {{pearsonUserDetails : mockstate}}/>);
    expect(DisplayUserDetailsMock).toHaveBeenCalled();
  });

});
