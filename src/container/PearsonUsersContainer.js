import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators  from '../actions/index';
import * as pearsonUserConstants from '../constants/PearsonUserConstants'
import { DisplayUserDetails} from '../components/DisplayUserDetails';

export class PearsonUsersContainer extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    const {
      dispatcher
    } = this.props;

    dispatcher.getUserDetails(pearsonUserConstants.url);
  }

  deleteUser(id) { 
    const {
      dispatcher
    } = this.props;

    dispatcher.deleteUserDetails(id);
  }

  render() {
    return (
      <div>
        <DisplayUserDetails 
          {...this.props}
          deleteUser = {this.deleteUser}
        />
      </div>
    );
  }
}

export const mapstateToProps = (state) => ({
  userState : state.userReducer 
})

export const mapDispatchToProps = (dispatch) => ({
  dispatcher : bindActionCreators(ActionCreators,dispatch)
})

export default connect(mapstateToProps, mapDispatchToProps)(PearsonUsersContainer)