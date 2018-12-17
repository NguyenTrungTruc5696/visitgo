import React from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap'
import Login from './Pages/Login';

class Header extends React.Component {
  onClickHandle(e){
  
  }
  onKeyUpHandle(e){
   
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">VISITGO VN</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/">
                HOME
             </NavItem>
              <NavItem eventKey={2} href="/about">
                ABOUT
              </NavItem>

              <NavItem eventKey={2} href="/suggestions">
                SUGGESTIONS
                </NavItem>

              <NavDropdown eventKey={3} title="ADD" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>COUNTRIES</MenuItem>
                <MenuItem eventKey={3.2}>TRANSPORT</MenuItem>
                <MenuItem eventKey={3.3}>SCHEDULE</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>ADD</MenuItem>
              </NavDropdown>


            </Nav>
            
            <Nav pullRight>
            <NavItem eventKey={6} className="search-form">
              <Navbar.Form>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Where are you going" aria-label="Search" />
                      <div className="input-group-btn">
                        <button className="btn btn-default" type="submit" onClick={this.onClickHandle.bind(this)} onKeyUp={this.onKeyUpHandle.bind(this)}>
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                    </Navbar.Form>
                  </NavItem>
              <NavItem eventKey={1} href="/signin">
                SIGN IN
      </NavItem>
              <NavItem eventKey={2} href="#">
                SIGN UP
      </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
export default Header;