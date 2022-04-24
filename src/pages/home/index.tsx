import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Menu from '../../components/menu';

export default function Home() {
  return (
    <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Image src="/ward_logo.png" style={{ width: '65%' }} />
      <Menu />
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        paddingTop: '56.25%'
      }}>
        <iframe 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
          }}
          src="https://www.youtube.com/embed/PJso1YRLR7k" 
          title="WARD. - WHAT'S LIVING ON THE ROOF?" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </div>
    </Container>
  )
}