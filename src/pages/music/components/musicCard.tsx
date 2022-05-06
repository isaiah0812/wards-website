import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import IMusic from '../music';

export default function MusicCard(music: IMusic) {
  const { title, cover, spotify, apple, bandcamp, soundCloud, audiomack, youTube } = music

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
        <Card.Img src={cover} style={{ height: '10em', width: 'auto' }} />
        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3%', textAlign: 'left' }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Click to Listen</Card.Text>
        </Card.Body>
      </Card>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="triangle" style={{ width: '2em', height: '2em', backgroundColor: '#f00505' }} />
        <div className="streaming-service-display" style={{ width: '100%', backgroundColor: '#f00505', padding: '2em', whiteSpace: 'nowrap', overflow: 'auto', scrollbarWidth: 'thin', scrollbarColor: 'black #f00505' }}>
          {/* Spotify */}
          {spotify && 
            <iframe
              title="Spotify"
              style={{ borderRadius: 12, margin: '0px 0.75% 0px 0px', maxWidth: 480, padding: 0 }}
              src={spotify}
              width="100%"
              height="450px"
              frameBorder="0"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
          }
          
          {/* Apple Music */}
          {apple && (
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
              src={apple} />
          )}
          {/* Bandcamp */}
          {bandcamp && (
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
              src={bandcamp}
              seamless
            >
              <a href="https://isaiahbullard.bandcamp.com/album/zaes-room">{title} by WARD.</a>
            </iframe>
          )}
          {/* SoundCloud */}
          {soundCloud && (
            <iframe
              title="SoundCloud"
              width="100%" 
              height="450px"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={soundCloud}
              style={{
                margin: '0px 0.75%',
                maxWidth: 480,
                padding: 0
              }} />
          )}
          {/* Audiomack */}
          {audiomack && (
          <iframe
            title="Audiomack"
            src={audiomack}
            style={{
              border: 0,
              width: '100%',
              height: 450,
              margin: '0px 0.75%',
              maxWidth: 480,
              padding: 0
            }}
            scrolling="no"
            frameBorder="0" />
          )}
          {/* YouTube */}
          {youTube && (
            <iframe 
              style={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: '100%',
                height: 450,
                maxWidth: 480,
                margin: '0px 0.75%',
              }}
              src={youTube}
              title="YouTube"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen />
          )}
          <div style={{ display: 'inline', height: 450, color: '#f00505'}}>VA</div>
        </div>
      </div>
    </div>
  )
}