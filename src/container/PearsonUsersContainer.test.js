import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PearsonUsersContainer } from './PearsonUsersContainer';

configure ({adapter : new Adapter()})

describe('PearsonUsersContainer', () => { 
  const wrapper = shallow(<PearsonUsersContainer dispatcher={{
    getUserDetails : jest.fn(),
    deleteUserDetails : jest.fn()
  }} />); 

  it('check if the Displayuserdetails method rendered', () => {
    expect(wrapper.find('DisplayUserDetails').length).toEqual(1);
  });

  it('should call deleteUserDetails action method on calling deleteUser method', () => {
    const deleteUserMock = wrapper.instance().props.dispatcher.deleteUserDetails;

    wrapper.instance().deleteUser(5);
    expect(deleteUserMock).toHaveBeenCalled();
  });

});
