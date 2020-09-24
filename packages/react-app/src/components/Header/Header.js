
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Header() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
      <header className={clsx('hero hero--primary', styles.hero)}>
        <img className={clsx('hero__image', styles.heroImage)} src={useBaseUrl("img/hero.png")}/>
        <div className="container" style={{ position: "relative"}}>
          <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
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
