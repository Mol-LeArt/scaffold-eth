
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

function Header() {
    return (
      <header className={clsx('hero hero--primary', styles.hero)}>
        <img className={clsx('hero__image', styles.heroImage)} src="img/hero.png"/>
        <div className="container" style={{ position: "relative"}}>
          <h1 className={clsx('hero__title', styles.heroTitle)}>Mol LeArt</h1>
        </div>
        <div style={{ position: "absolute", top: 0, right: 0, padding: 10 }}>
          <button className="button button--secondary" data-dh-feature="network" data-dh-property-enable="true">
              Connect your account
          </button>
        </div>
      </header>
    )
}

export default Header;
