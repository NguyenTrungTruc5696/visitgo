import React from "react";
import Page from '../Component/Page';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import  "./SignUp.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
      
          this.state = {
            lastname: "",
            firstname: "",
            email: "",
            password: ""
          };
        }
        validateForm() {
            return this.state.lastname.length > 0 && this.state.firstname.length > 0;
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
              <form onSubmit={this.handleSubmit} key={2}>
                  <FormGroup controlId="lastname" bsSize="large">
                    <ControlLabel>Lastname</ControlLabel>
                    <FormControl
                      autoFocus
                      type="lastname"
                      value={this.state.lastname}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="firstname" bsSize="large">
                    <ControlLabel>Firstname</ControlLabel>
                    <FormControl
                      value={this.state.firstname}
                      onChange={this.handleChange}
                      type="firstname"
                    />
         /></form>           
        validateForm() {
         this.state.email.length > 0 && this.state.password.length > 0;
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
                  SignUp
                </Button>
            
                <Button>Sign in FACEBOOK</Button>
              </form>
        
          )
      
          return content;
        }
      
        render() {
          return (
            <div className="SignUp">
                  <Page content={this.buildContent()}></Page>
                  
              
            </div>
            
          );
        }
      }
export default SignUp;







