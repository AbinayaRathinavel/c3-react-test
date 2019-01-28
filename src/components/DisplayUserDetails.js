import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';

export class DisplayUserDetails extends Component {
  constructor(props) {
    super(props);

    this.displayUserDetails = this.displayUserDetails.bind(this);
  }
  
  displayUserDetails(pearsonUserList) {
    if(pearsonUserList.length>0) {
      return (
        pearsonUserList.map(pearsonUsers => {
          const {
            deleteUser
          } = this.props;
          const {
            id,
            first_name,
            last_name,
            avatar            
          } = pearsonUsers;
          const fullName = `${first_name} ${last_name}`;

          return(
            <Col xs={6} md={4} key={id}>
              <img src={avatar} alt="avatar image" />
              <div className = "container-box">
                <div className = "inner-box">
                  <p className = "usertext">
                    {fullName}
                    <span className = "delete">
                      <a onClick = {() => deleteUser(id)}>Delete</a>
                    </span>
                  </p>
                </div>
              </div>
            </Col>
          )
        })
      )
    }
  }

  render() {
    const {
      userState
    } = this.props;
    const {
      pearsonUserDetails
    } = userState
    return (
      <div className="container">
        <label className = "headerFont">Pearson User Management</label>
        <Grid>
          <Row >
            <Col xs={12} >
              <Row>
                {this.displayUserDetails(pearsonUserDetails)}
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default DisplayUserDetails;