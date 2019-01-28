import * as ActionTypes from './actionTypes';
import axios from 'axios';

export const getUserDetails = (url) => {
  return dispatch => {
    axios.get(url)
      .then(response =>
        dispatch(fetchUserDetails(response.data.data))
    )
  }
}

export const fetchUserDetails = (pearsonList) => {
  return({
    type: ActionTypes.GET_USER_DETAILS,
    pearsonList
  })
}

export const deleteUserDetails = (deletedUser) => {
  return({
    type: ActionTypes.DELETE_USER_DETAILS,
    deletedUser
  })
}