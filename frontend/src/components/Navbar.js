import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';

function NavBar() {

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
  
    dispatch(logout())
  }


  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Giveaway Portal</Navbar.Brand>
        </LinkContainer>

        <LinkContainer to='/'>
                <Nav.Link><i className='fas fa-shopping-home'></i> Home
                </Nav.Link>
              </LinkContainer>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            {userInfo ? (

              <NavDropdown title={userInfo.name}  id="collasible-nav-dropdown">
              <LinkContainer to='/profile'>
               <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
              </NavDropdown>

            ) : (

              
                <LinkContainer to='/login'>
                  <Nav.Link><i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>

            )}
   
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;