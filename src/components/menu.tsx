import React, { useState } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        textDecoration: hovering ? 'underline' : 'none'
      }}
    >
      {props.text}
    </Link>
  )
}

// const ExternalMenuItem = (props: MenuItemProps): JSX.Element => {
//   const [hovering, setHovering] = useState(false);

//   const hover = () => setHovering(true);
//   const leave = () => setHovering(false);

//   return (
//     <a href={props.to} 
//       onMouseEnter={hover}
//       onMouseLeave={leave}
//       style={{
//         color: 'white',
//         margin: '1em',
//         textDecoration: hovering ? 'underline' : 'none'
//       }}
//     >
//       {props.text}
//     </a>
//   )
// }

export default function Menu() {
  return (
    <Navbar collapseOnSelect expand="md" sticky="top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} onToggle={() => console.log("toggled")}>
      <Container fluid style= {{ display: 'flex', justifyContent: 'center' }}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"><Image src="/ward_logo.png" style={{ width: '4em' }} /></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <MenuItem to="/" text="home" />
            <MenuItem to="/bio" text="bio" />
            <MenuItem to="/contact" text="contact" />
            <MenuItem to="/music" text="music" />
            {/* <Navbar.Brand href="/"><Image src="/ward_logo.png" style={{ width: '4em', margin: '0px 1em' }} /></Navbar.Brand> */}
            <MenuItem to="/radio" text="radio" />
            <MenuItem to="/shop" text="shop" />
            <MenuItem to="/tour" text="tour" />
            <MenuItem to="/videos" text="videos" />
            {/**
             * It didn't make sense to have this link here if it wasn't going
             * to be a fully implemented page on the site, and it is an
             * external link. External Links belong in the footer, and in
             * other places on the site, not in the main menu.
             */}
            {/* <ExternalMenuItem to="https://www.reddit.com/r/wardandfriends/" text="forum" /> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}