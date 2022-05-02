import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

export default function MusicCard() {
  const [bgColor, setBgColor] = useState('black');
  const [border, setBorder] = useState('2px solid transparent');
  const [width, setWidth] = useState('30em');
  const [height, setHeight] = useState('calc(10em + 4px)');

  const hover = () => {
    setBgColor('#121212');
    setBorder('2px solid #242424');
  }

  const leave = () => {
    setBgColor('black');
    setBorder('2px solid transparent');
  }

  const handleClick = () => {
    setWidth(
      width === '30em'
        ? '100%'
        : '30em'
    );
    setHeight(
      height === 'calc(10em + 4px)'
        ? 'calc(16em + 472px)'
        : 'calc(10em + 4px)'
    )
  }

  return (
    <div style={{ 
      margin: '1% 0%', 
      width: width, 
      height: height,
      overflow: 'hidden',
      display: 'flex', 
      alignItems: 'center',
      flexDirection: 'column',
      transition: 'width 1s, height 1s',
    }}>
      <Card
        onClick={handleClick}
        onMouseEnter={hover} 
        onMouseLeave={leave} 
        style={{ 
          width: '100%',
          maxWidth: '30em',
          backgroundColor: bgColor,
          border: border,
          display: 'flex', 
          flexDirection: 'row',
          cursor: 'pointer',
          transition: 'background-color 0.3s, border 0.3s'
        }}
      >
        <Card.Img src="/wlotr_cover.jpg" style={{ height: '10em', width: 'auto' }} />
        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3%', textAlign: 'left' }}>
          <Card.Title>WHAT'S LIVING ON THE ROOF</Card.Title>
          <Card.Text>Click to Listen</Card.Text>
        </Card.Body>
      </Card>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="triangle" style={{ width: '2em', height: '2em', backgroundColor: '#f00505' }} />
        <div className="streaming-service-display" style={{ width: '100%', backgroundColor: '#f00505', padding: '2em', whiteSpace: 'nowrap', overflow: 'auto', scrollbarWidth: 'thin', scrollbarColor: 'black #f00505' }}>
          {/* Spotify */}
          <iframe
            title="Spotify"
            style={{ borderRadius: 12, margin: '0px 0.75%', maxWidth: 480, padding: 0 }}
            src="https://open.spotify.com/embed/album/0SvPs6xRhvS9KIIyEtBnbv?utm_source=generator"
            width="100%"
            height="450px"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
          {/* Apple Music */}
          <iframe
            title="Apple Music"
            allow="autoplay *; encrypted-media *; fullscreen *"
            frameBorder="0"
            style={{
              width: '100%',
              maxWidth: '30em',
              height: '450px',
              overflow: 'hidden',
              background: 'transparent',
              borderRadius: 0,
              margin: '0px 0.75%',
              scrollbarWidth: 'none',
              padding: 0
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
            src="https://embed.music.apple.com/us/album/zaes-room/1550432322" />
          {/* SoundCloud */}
          <iframe
            title="SoundCloud"
            width="100%" 
            height="450px"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1196761027&color=%23f00505&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true"
            style={{
              margin: '0px 0.75%',
              maxWidth: 480,
              padding: 0
            }} />
          {/* Bandcamp */}
          <iframe
            title="Bandcamp"
            style={{
              border: 0,
              width: '100%',
              height: 450,
              margin: '0px 0.75%',
              maxWidth: 480,
              padding: 0
            }} 
            src="https://bandcamp.com/EmbeddedPlayer/album=2941431868/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" 
            seamless
          >
            <a href="https://isaiahbullard.bandcamp.com/album/zaes-room">Zae&#39;s Room by Isaiah Bullard</a>
          </iframe>
        </div>
      </div>
    </div>
  )
}