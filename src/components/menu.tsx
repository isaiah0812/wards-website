import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

type MenuItemProps = {
  to: string,
  text: string
}
const MenuItem = (props: MenuItemProps): JSX.Element => {
  const [hovering, setHovering] = useState(false);

  const hover = () => setHovering(true);
  const leave = () => setHovering(false);

  return (
    <Link to={props.to} 
      onMouseEnter={hover}
      onMouseLeave={leave}
      onClick={() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
      }}
      style={{
        color: 'white',
        margin: '1em',
        fontFamily: 'Noto Sans Mono, monospace',
        textDecoration: hovering ? 'underline' : 'none'
      }}
    >
      {props.text}
    </Link>
  )
}

export default function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <Container fluid style= {{ display: 'flex', justifyContent: 'center' }}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"><FontAwesomeIcon icon={faBars} /></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <MenuItem to="/" text="home" />
            <MenuItem to="/bio" text="bio" />
            <MenuItem to="/contact" text="contact" />
            <MenuItem to="/music" text="music" />
            <MenuItem to="/radio" text="radio" />
            <MenuItem to="/shop" text="shop" />
            <MenuItem to="/tour" text="tour" />
            <MenuItem to="/videos" text="videos" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}