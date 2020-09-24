
import React from 'react';
import styles from './styles.module.scss';

import Feature from './Feature/Feature'

const features = [
  {
    title: 'Power back to the artists',
    imageUrl: 'img/raidguild1.png',
    description: (
      <>
        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.
      </>
    ),
  },
  {
    title: 'subDAO of lex_DAO',
    imageUrl: 'img/raidguild2.png',
    description: (
      <>
        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.
      </>
    ),
  },
  {
    title: 'Web3 creative commons',
    imageUrl: 'img/logo.png',
    description: (
      <>
        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.
        
      </>
    ),
  },
];

function Features() {
  return (
    <div className="container">
      {features && features.length > 0 && (
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Features;
