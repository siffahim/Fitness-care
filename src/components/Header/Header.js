import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const active = {
    background: '#a6c311',
    color: '#fff'
  }
  return (
    <Navbar bg="white" expand="lg" className='header' sticky='top' style={{ padding: '10px 12px' }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src='image/logo-2.png'
            width='190px'
            className="d-inline-block align-top"
            alt="Fitnesscare"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className='link' activeStyle={active} to="/home">Home</NavLink>
            <NavLink className='link' activeStyle={active} to="/services">Service</NavLink>
            <NavLink className='link' activeStyle={active} to="/blogs">Blog</NavLink>
            <NavLink className='link' activeStyle={active} to="/link">Link</NavLink>
            <NavLink className='link' activeStyle={active} to="/about">About Us</NavLink>

          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='btn-reguler'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;