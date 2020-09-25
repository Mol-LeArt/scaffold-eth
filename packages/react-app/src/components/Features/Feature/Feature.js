
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

function Feature({imageUrl, title, description}) {
    const imgUrl = imageUrl;
    return (
      <div className={clsx('col col--4')}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }

  export default Feature;
