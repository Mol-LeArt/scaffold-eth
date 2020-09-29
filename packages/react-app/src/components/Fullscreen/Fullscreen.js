
import React from 'react';
import styles from './styles.module.scss';

import { Page, Center, Header, Button } from 'decentraland-ui'

function fullscreen() {
    return (
      <Page isFullscreen>
        <Center>
          <Header size="huge">Mol LeArt</Header>
          <p>creative commons for web3</p>
          <br/>
          <Button>Getting started</Button>
        </Center>
      </Page>
    )
}

export default fullscreen;
