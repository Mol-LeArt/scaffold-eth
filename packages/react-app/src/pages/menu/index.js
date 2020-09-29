import React from 'react';
import styles from './styles.module.scss';

import Tabs from '../../components/Tabs/Tabs'
import Widget from '../../components/Widget/Widget'
import Chart from '../../components/Chart/Chart'
import Footer from '../../components/Footer/Footer'

function menu() {
  return (
    <div>
      <Tabs/>
        {/* <Features/> */}
        {/* <Widget/> */}
        {/* <Chart/> */}
      <Footer/>
    </div>
  );
}

export default menu;
