import React from 'react';
import styles from './styles.module.scss';

import { Switch, Route, withRouter } from "react-router-dom";

import Tabs from '../../components/Tabs/Tabs'
import Footer from '../../components/Footer/Footer'
import Scribe from "./scribe/index"
import UpdateSale from "./update-sale/index"
import Purchase from "./purchase/index"
import Gift from "./gift/index"

function menu(props) {
  return (
    <div>
      <Tabs/>
      <Switch>
        <Route path={props.match.url + '/' + 'scribe'} component={Scribe}/>
        <Route path={props.match.url + '/' + 'update-sale'} component={UpdateSale}/>
        <Route path={props.match.url + '/' + 'purchase'} component={Purchase}/>
        <Route path={props.match.url + '/' + 'gift'} component={Gift}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default withRouter(menu);
