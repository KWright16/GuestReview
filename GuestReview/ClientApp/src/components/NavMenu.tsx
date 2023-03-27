import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export const NavMenu = () => {
  const displayName = NavMenu.name;
  const [collapsed, setCollapsed] = useState<boolean>(true);


  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  }

    return (
      <header>
        <div id="navImg">
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          {/* <NavbarBrand tag={Link} to="/">GuestReview</NavbarBrand> */}
          {/* <img
            // id="navImg"
            src={'../../AdobeStock_223842331.jpeg'}
            alt="Nature background"
            loading="lazy"
          /> */}
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Leave a Review</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/reviews-list">View Reviews</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
        </div>
      </header>
    );  
}
