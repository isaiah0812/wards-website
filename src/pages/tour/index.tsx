import React from 'react';
import { Image } from 'react-bootstrap';
import Menu from '../../components/menu';

export default function Tour() {
  return (
    <React.Fragment>
      <Menu />
      <div>
        Tour dates coming soon...
      </div>
      <div>
        One, <Image src="/ward_logo.png" style={{ width: '5em' }} />
      </div>
    </React.Fragment>
  );
}