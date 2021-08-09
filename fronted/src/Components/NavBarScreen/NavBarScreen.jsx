import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto" style={{margin:'10px'}} >Home</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/services"style={{margin:'10px'}}>Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact"style={{margin:'10px'}}>Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login"style={{margin:'10px'}}>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register"style={{margin:'10px'}}>Register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;