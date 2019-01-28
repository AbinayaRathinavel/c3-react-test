import * as userHelper from './helper/userHelper';
import * as ActionTypes from '../actions/actionTypes';

/* initial state provided */
const initialState = {
  pearsonUserDetails: [
    {
      id: 4,
      first_name: "Eve",
      last_name: "Holt",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    },
    {
      id: 5,
      first_name: "Charles",
      last_name: "Morris",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    },
    {
      id: 6,
      first_name: "Tracey",
      last_name: "Ramos",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
    }
  ]
};

const userReducer = (state=initialState , action) => {
  switch(action.type) {
    case ActionTypes.GET_USER_DETAILS:
      return userHelper.getPearsonUserList(state, action);
    case ActionTypes.DELETE_USER_DETAILS:
      return userHelper.deletePearsonUser(state, action);
    default:
      return state;
  }
}

export default userReducer;