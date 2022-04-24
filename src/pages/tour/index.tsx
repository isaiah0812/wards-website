import React from 'react';
import { Image } from 'react-bootstrap';
import Menu from '../../components/menu';

export default function Tour() {
  return (
    <React.Fragment>
      <Menu />
      <Image src="/ward_logo.png" style={{ width: '100%', maxWidth: 1200 }} />
    </React.Fragment>
  );
}