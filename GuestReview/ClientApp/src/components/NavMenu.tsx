import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export const NavMenu = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const mobile:boolean = window.screen.width < 500;


  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  }

    return (
      <header>
        <div>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className={mobile ? "text-light" : "text-dark"} to="/">Leave a Review</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className={mobile ? "text-light" : "text-dark"} to="/reviews-list">View Reviews</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
        </div>
      </header>
    );  
}
