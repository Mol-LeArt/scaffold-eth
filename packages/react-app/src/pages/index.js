import React from 'react';
import styles from './styles.module.scss';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Fullscreen from '../components/Fullscreen/Fullscreen'
import Menu from "./menu/index"

function Home() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/menu/" component={Menu}/>
        <Route path="/" exact render={(props) => (
          <Fullscreen {...props} link="/menu/scribe"/>
        )}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Home;
