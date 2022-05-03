import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const [width, setWidth] = useState('3em');

  const hover = () => setWidth('100%');
  const leave = () => setWidth('3em');
  return (
    <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: 'max-content', border: '1px solid blue' }}>
        <div onMouseEnter={hover} onMouseLeave={leave} style={{ overflow: 'hidden', whiteSpace: 'nowrap', padding: '1em', width: width, border: '1px solid red', transition: 'width 0.5s' }}>
          <FontAwesomeIcon icon={faReddit} style={{ width: '1em', height: 'auto', marginRight: '1em' }} />Reddit
        </div>
      </div>
    </Container>
  )
}