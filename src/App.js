import React from "react";
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import PearsonUsersContainer  from './container/PearsonUsersContainer';

const store = configStore();

export const App = () => {
  return(
    <Provider store = {store}>
      <PearsonUsersContainer />
    </Provider>
  )}