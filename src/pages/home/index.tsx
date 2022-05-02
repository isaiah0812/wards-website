import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Menu from '../../components/menu';
import WardVideo from '../../components/wardVideo';

export default function Home() {
  return (
    <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Image src="/ward_logo.png" style={{ width: '65%' }} />
      <Menu />
      <WardVideo name="WARD. - WHAT'S LIVING ON THE ROOF?" youTubeId="PJso1YRLR7k" />
    </Container>
  )
}