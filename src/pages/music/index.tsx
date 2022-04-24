import React from 'react';
import Image from 'react-bootstrap/Image';
import Menu from '../../components/menu';
// import { Link } from 'react-router-dom';

export default function Music() {
  return (
    <React.Fragment>
      <Menu />
      <Image src="/ward_logo.png" style={{ width: '100%', maxWidth: 1200 }} />
    </React.Fragment>
  );
}