
import React from 'react';
import styles from './styles.module.scss';

import { Hero } from 'decentraland-ui'

function Header() {
    return (
      <div>
        <Hero centered>
          <Hero.Header>Mol LeArt</Hero.Header>
          <Hero.Description>creative commons for web3</Hero.Description>
        </Hero>
      </div>
    )
}

export default Header;
