
import React from 'react';
import styles from './styles.module.scss';

import { Page, Center, Header, Button } from 'decentraland-ui'
import { Link } from "react-router-dom";

function fullscreen(props) {
    return (
      <Page isFullscreen>
        <Center>
          <Header size="huge">Mol LeArt</Header>
          <p>creative commons for web3</p>
          <br/>
          <Link to={props.link}>
            <Button>Getting started</Button>
          </Link>
        </Center>
      </Page>
    )
}

export default fullscreen;
