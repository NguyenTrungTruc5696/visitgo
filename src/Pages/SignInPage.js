import React from "react";
import Page from '../Component/Page';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import  "./SignIn.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  buildContent() {
    let content = [];

    content.push(
      <form onSubmit={this.handleSubmit} key={1}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button color ="blue"
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            SignIn
          </Button>
        </form>
    )

    return content;
  }

  render() {
    return (
      <div className="SignIn">
            <Page content={this.buildContent()}></Page>
            
        
      </div>
    );
  }
}
export default SignIn;

