import userReducer from './userReducer';
import mockstate from '../constants/testUserData.json';

describe('user reducer testing', () => {

  it('check for the get user details method', () => {
    let  cloneUserState = { pearsonUserDetails : []};
    const action = {
      type: 'GET_USER_DETAILS',
      pearsonList: [{
        id:7,
        first_name: "XXX",
        last_name: "YYY",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      }]
    };
    cloneUserState.pearsonUserDetails = mockstate.pearsonUserDetails.slice();
    cloneUserState.pearsonUserDetails = [...cloneUserState.pearsonUserDetails , ...action.pearsonList];
    expect(userReducer(mockstate,action)).toEqual(cloneUserState);
  });

  it('check for the delete user details method', () => {
    let  deleteUserState = { pearsonUserDetails : []};
    const action = {
      type: 'DELETE_USER_DETAILS',
      deletedUser: 5
    };

    deleteUserState.pearsonUserDetails = mockstate.pearsonUserDetails.slice();
    deleteUserState.pearsonUserDetails = deleteUserState.pearsonUserDetails
                                            .filter(deleteUser => deleteUser.id !== action.deletedUser);

    expect(userReducer(mockstate,action)).toEqual(deleteUserState);
  });

  it('check for the duplicate user details', () => {
    let  duplicateUserState = { pearsonUserDetails : []};
    const action = {
      type: 'GET_USER_DETAILS',
      pearsonList: [{
        id:4,
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      }]
    };
    duplicateUserState.pearsonUserDetails = mockstate.pearsonUserDetails.slice();
    expect(userReducer(mockstate,action)).toEqual(duplicateUserState);
  });

  it('check for sorting the user based on id', () => {
    let  sortedUserState = { pearsonUserDetails : []};
    const action = {
      type: 'GET_USER_DETAILS',
      pearsonList: [{
        id:1,
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      }]
    };
    sortedUserState.pearsonUserDetails = mockstate.pearsonUserDetails.slice();
    sortedUserState.pearsonUserDetails = [...action.pearsonList, ...sortedUserState.pearsonUserDetails];
    expect(userReducer(mockstate,action)).toEqual(sortedUserState);
  });

 /* //negative test case for sorting
  it('check for sorting the user based on id', () => {
    let  sortedUserState = { pearsonUserDetails : []};
    const action = {
      type: 'GET_USER_DETAILS',
      pearsonList: [{
        id:1,
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      }]
    };
    sortedUserState.pearsonUserDetails = mockstate.pearsonUserDetails.slice();
    sortedUserState.pearsonUserDetails = [...sortedUserState.pearsonUserDetails, ...action.pearsonList];
    expect(userReducer(mockstate,action)).toEqual(sortedUserState);
  }); */

})