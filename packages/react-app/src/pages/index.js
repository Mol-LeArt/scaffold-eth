import React from 'react';
import styles from './styles.module.scss';

import { BrowserRouter } from "react-router-dom";

import Fullscreen from '../components/Fullscreen/Fullscreen'

function Home() {
  return (
    <BrowserRouter>
      <Fullscreen/>
    </BrowserRouter>
  );
}

export default Home;
