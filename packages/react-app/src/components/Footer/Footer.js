
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

function Footer() {
    return (
      <footer>
        <div className={clsx(styles.lpfooter, 'text--center')}>
          <a target='_blank' href="https://frosty-hawking-4be71a.netlify.app/docs/">
            About
          </a>
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
