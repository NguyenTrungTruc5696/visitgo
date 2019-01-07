import React from "react";
import Page from '../Component/Page';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import  "./SignUp.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
      
          this.state = {
           last: "",
           first: "",            
            email: "",
            password: ""
            
          };
        }
      
       
        validateForm() {
          return this.state.last.length > 0 && this.state.first.length > 0;
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
              <div style={{paddingBottom:"120px"}}>
              <form s onSubmit={this.handleSubmit} key={1}>
                  <FormGroup controlId="last" bsSize="large">
                    <ControlLabel>LastName</ControlLabel>
                    <FormControl
                      autoFocus
                      type="last"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="first" bsSize="large">
                    <ControlLabel>FirstName</ControlLabel>
                    <FormControl
                      value={this.state.password}
                      onChange={this.handleChange}
                      type="first"
                    />
                  </FormGroup>
                </form>
                <h5>* Please consider your email is also the username.</h5>

                <form onSubmit={this.handleSubmit} key={2}>
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
                  <h5>By creating an account you agree to VISITGO VN's <span style={{color:"green"}}>Terms of Service.</span></h5>
                  <Button color ="blue"
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                  >
                    CREATE ACCOUNT
                  </Button>
              <div></div>
                  <Button >Sign in FACEBOOK</Button>
                
                </form>
          </div>
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







