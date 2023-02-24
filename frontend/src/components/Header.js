import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Navbar, Nav , NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';



const Header = ({color}) => {

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
  
    dispatch(logout())
  }


  return (
    <header>
      <Navbar  id='mynav' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand>Giveaway Portal</Navbar.Brand>
          </LinkContainer>
 
          <i style={{color}} className="fa-solid fa-gift fa-2x"></i>
          
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
            
            <Nav className='ml-auto'>

            <LinkContainer to='/'>
                <Nav.Link><i className='fas fa-shopping-home'></i> Home
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} >
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item id='userinfodropdown'>Profile</NavDropdown.Item>
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
    </header>
  )
}

Header.defaultProps = {
  color: '#f8e825',
}

export default Header