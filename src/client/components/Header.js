import React from 'react';
import {
  Navbar, Nav, Container
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


// Manually collapse the navbar because react-bootstap sucks
function collapseNavbar(event) {
  // First check that the responsive button
  // is visible. Triggering the click when the
  // navbar hasn't contracted will make the
  // navbar flicker.
  let navbarToggleButton = document.querySelector('#app > div > div > nav > button');
  if (window.getComputedStyle(navbarToggleButton).display !== 'none') {
    navbarToggleButton.click();
  }
}

const Header = () => (
  <div>
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Container>
          <Nav className="ml-auto mr-auto justify-content-md-center">
            <Nav.Item><NavLink to="/" exact className="header__link" activeClassName="is-active" onClick={collapseNavbar}>home</NavLink></Nav.Item>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Header;
