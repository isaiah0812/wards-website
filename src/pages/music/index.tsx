import React from 'react';
import { Container } from 'react-bootstrap';
import Menu from '../../components/menu';
import MusicCard from './components/musicCard';

export default function Music() {
  return (
    <React.Fragment>
      <Menu />
      <h1 style={{ marginTop: '0.5%' }}>Music</h1>
      <Container fluid style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <MusicCard />
      </Container>
    </React.Fragment>
  );
}