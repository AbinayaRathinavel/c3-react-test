import _ from 'lodash';
let clonedState;

export const getPearsonUserList = (state, action) => {
  clonedState = _.cloneDeep(state);

  clonedState.pearsonUserDetails = [...clonedState.pearsonUserDetails, ...action.pearsonList];

  /*remove the duplicate users based ont the unique id */
  clonedState.pearsonUserDetails = removeDuplicateUser(clonedState.pearsonUserDetails);

  /*sort the users based ont the unique id */
  clonedState.pearsonUserDetails.sort((tmpUsr1,tmpUsr2) => {
    return tmpUsr1["id"] - tmpUsr2["id"];
  });

  return clonedState;
}

export const deletePearsonUser = (state, action) => {
  clonedState = _.cloneDeep(state);

  clonedState.pearsonUserDetails = clonedState.pearsonUserDetails
      .filter(pearsonUser => pearsonUser.id !== action.deletedUser)

  return clonedState;
}

function removeDuplicateUser (pearsonUserList) {
  let uniquePearsonUserList;

  uniquePearsonUserList = pearsonUserList.filter((pearsonUser, index, pearsonUserList) =>
    index === pearsonUserList.findIndex((user) => user.id === pearsonUser.id 
    )
  )

  return uniquePearsonUserList;
}
