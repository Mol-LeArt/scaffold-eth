
import React from 'react';
import styles from './styles.module.scss';

import { Hero } from 'decentraland-ui'

function Header() {
    return (
      <div className="story">
        <Hero centered>
          <Hero.Header>Mol LeArt</Hero.Header>
          <Hero.Description>DAO managed creative commons</Hero.Description>
          <Hero.Content className={styles.heroImage}>
            <img src="img/hero.png"/>
          </Hero.Content>
        </Hero>
      </div>
    )
}

export default Header;
