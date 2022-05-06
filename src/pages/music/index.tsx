import React from 'react';
import { Container } from 'react-bootstrap';
import Menu from '../../components/menu';
import MusicCard from './components/musicCard';
import IMusic from './music';
import music from './music.json';

export default function Music() {
  return (
    <React.Fragment>
      <Menu />
      <h1 style={{ marginTop: '0.5%' }}>Music</h1>
      <Container fluid style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {music.map((project: IMusic) => 
          <MusicCard
            title={project.title}
            cover={project.cover}
            spotify={project.spotify}
            apple={project.apple}
            bandcamp={project.bandcamp}
            soundCloud={project.soundCloud}
            audiomack={project.audiomack}
            youTube={project.youTube} />
        )}
      </Container>
    </React.Fragment>
  );
}