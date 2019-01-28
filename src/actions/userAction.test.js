import * as UserAction from './userAction';

const { fetchUserDetails, deleteUserDetails } = UserAction;
const deletedUser = 5;
const pearsonList = {};

describe('Test for UserActions', () => {

  it('checking get user details method', () => {
    const returnVal = {
      type: 'GET_USER_DETAILS',
      pearsonList
    }
    expect(fetchUserDetails(pearsonList)).toEqual(returnVal);
  })

  it('checking delete user method', () => {
    const returnVal ={
      type: 'DELETE_USER_DETAILS',
      deletedUser
    }
    expect(deleteUserDetails(deletedUser)).toEqual(returnVal);
  })

})