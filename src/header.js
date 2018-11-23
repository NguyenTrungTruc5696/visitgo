import React from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap'


class Header extends React.Component {
  onClickHandle(e){
   
    alert("Hi");

  }
  onKeyUpHandle(e){
   
     alert("There");
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">VISITGO</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                HOME
             </NavItem>
              <NavItem eventKey={2} href="#">
                ABOUT
              </NavItem>

              <NavItem eventKey={2} href="#">
                SUGGESTIONS
                </NavItem>

              <NavDropdown eventKey={3} title="MENU" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>COUNTRIES</MenuItem>
                <MenuItem eventKey={3.2}>TRANSPORT</MenuItem>
                <MenuItem eventKey={3.3}>SCHEDULE</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>ADD</MenuItem>
              </NavDropdown>

 <NavItem eventKey={6}>
                
              
              <form name="test" activekey="test" className="nav navbar-form navbar-right">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit" onClick={this.onClickHandle.bind(this)} onKeyUp={this.onKeyUpHandle.bind(this)}>
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
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