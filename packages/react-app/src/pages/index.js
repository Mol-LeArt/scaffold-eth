import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.scss';

import Header from '../components/Header/Header'
import Features from '../components/Features/Features'
import Widget from '../components/Widget/Widget'
import Chart from '../components/Chart/Chart'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Header/>
      <main>
        {/* <Features/> */}
        <Widget/>
        <Chart/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
