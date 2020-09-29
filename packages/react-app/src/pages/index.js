import React from 'react';
import styles from './styles.module.scss';

import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Widget from '../components/Widget/Widget'
import Chart from '../components/Chart/Chart'
import Footer from '../components/Footer/Footer'

import Tabs from '../components/Tabs/Tabs'

function Home() {
  return (
    <div>
      <Hero/>
      <main>
        {/* <Features/> */}
        <Widget/>
        <Chart/>
        <Tabs/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
