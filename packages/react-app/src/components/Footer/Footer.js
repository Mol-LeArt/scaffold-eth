
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Footer() {
    return (
      <footer>
        <div className={clsx(styles.lpfooter, 'text--center')}>
          <Link to={useBaseUrl('docs/')}>
            About
          </Link>
          <a target='_blank' href="https://twitter.com/MolLeArt">
            Twitter
          </a>
          <a target='_blank' href="https://discord.gg/hxgBHZP">
            Discord
          </a>
          <a target='_blank' href="https://github.com/Mol-LeArt">
            Github
          </a>
        </div>
      </footer>
    )
}

export default Footer;
