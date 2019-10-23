import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
function NavBar(props) {
  const path = props.location.pathname;
  const [title = '', subtitle = ''] = path.split('/').filter(item => !!item);

  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Peliculas con REACT</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link> <NavLink to='/category/top_rated' activeClassName='active'>Mejor valoradas</NavLink></Nav.Link>
      <Nav.Link><NavLink to='/category/upcoming' activeClassName='active'>Próximas</NavLink></Nav.Link>
      <Nav.Link><NavLink to='/category/popular' activeClassName='active'>Popular</NavLink></Nav.Link>
    </Nav>
  </Navbar>
  );
}

export default withRouter(NavBar);