import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto" style={{ margin: "10px" }}>
          Home
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/services" style={{ margin: "10px" }}>
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" style={{ margin: "10px" }}>
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login" style={{ margin: "10px" }}>
                {localStorage.getItem("userInfo")
                  ? JSON.parse(localStorage.getItem("userInfo")).name
                  : "Login"}
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/register" style={{ margin: "10px" }}>
                Register
              </NavLink>
            </NavItem>
            {localStorage.getItem("token") && (
              <>
                <NavItem>
                  <NavLink
                    href="#!"
                    style={{ margin: "10px" }}
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("userInfo");
                      window.location = "/login";
                    }}
                  >
                    Logout
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/orderhistory" style={{ margin: "10px" }}>
                    My Orders
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
