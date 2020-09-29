import React from 'react';
import styles from './styles.module.scss';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "./menu/index"

import Fullscreen from '../components/Fullscreen/Fullscreen'

function Home() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/">
          <Fullscreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Home;
