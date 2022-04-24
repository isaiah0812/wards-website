import React from 'react';
import { Image } from 'react-bootstrap';
import Menu from '../../components/menu';

export default function Shop() {
  return (
    <React.Fragment>
      <Menu />
      <div>
        Shop coming soon...
      </div>
      <div>
        One, <Image src="/ward_logo.png" style={{ width: '5em' }} />
      </div>
    </React.Fragment>
  );
}