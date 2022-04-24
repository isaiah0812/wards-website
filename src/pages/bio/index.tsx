import React from 'react';
import { Image } from 'react-bootstrap';
import Menu from '../../components/menu';
import './bio.css';

export default function Bio() {
  return (
    <React.Fragment>
      <Menu />
      <h1 style={{ marginTop: '0.5%' }}>Bio</h1>
      <div className="bio" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2%' }}>
        <Image src="sxsw_1.jpg" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Consectetur libero
          id faucibus nisl. Montes nascetur ridiculus mus mauris vitae ultricies
          leo integer. Semper auctor neque vitae tempus quam pellentesque nec.
          Sociis natoque penatibus et magnis dis parturient montes nascetur.
          Scelerisque in dictum non consectetur a erat nam. Quis risus sed
          vulputate odio ut enim. Pellentesque massa placerat duis ultricies
          lacus. A lacus vestibulum sed arcu non. Purus non enim praesent
          elementum facilisis leo vel fringilla.
        </p>

        <Image src="sxsw_2.jpg" />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Consectetur
        adipiscing elit pellentesque habitant morbi tristique. Euismod
        elementum nisi quis eleifend. Eget gravida cum sociis natoque penatibus
        et magnis dis. Ullamcorper a lacus vestibulum sed. Faucibus interdum
        posuere lorem ipsum dolor sit. In vitae turpis massa sed elementum
        tempus egestas sed sed. Arcu vitae elementum curabitur vitae nunc sed.
        Mollis nunc sed id semper risus in hendrerit gravida. Eget magna
        fermentum iaculis eu non diam. Nibh cras pulvinar mattis nunc sed
        blandit libero volutpat. Vestibulum sed arcu non odio euismod. Quam
        vulputate dignissim suspendisse in est ante in nibh mauris. Ut sem nulla
        pharetra diam sit amet. Hac habitasse platea dictumst vestibulum rhoncus
        est. Amet aliquam id diam maecenas ultricies. Vulputate ut pharetra sit
        amet. Elementum tempus egestas sed sed. Volutpat blandit aliquam etiam
        erat velit scelerisque in. Pulvinar sapien et ligula ullamcorper
        malesuada proin libero nunc consequat.
        </p>

        <Image src="ward_1.jpg" />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed
        augue lacus viverra vitae. Commodo sed egestas egestas fringilla
        phasellus faucibus scelerisque. Interdum consectetur libero id faucibus
        nisl tincidunt eget nullam. Amet consectetur adipiscing elit ut
        aliquam. Mauris cursus mattis molestie a iaculis. Elementum nibh tellus
        molestie nunc non blandit massa enim nec. Enim nulla aliquet porttitor
        lacus luctus accumsan tortor posuere ac. Rhoncus aenean vel elit
        scelerisque mauris. A arcu cursus vitae congue mauris rhoncus aenean.
        Mauris in aliquam sem fringilla. Mauris ultrices eros in cursus turpis
        massa tincidunt. Tempus iaculis urna id volutpat lacus laoreet non
        curabitur.
        </p>
        <Image src="ward_logo.png" />
      </div>
    </React.Fragment>
  );
}