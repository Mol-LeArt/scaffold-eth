
import React, { useState } from 'react';
import styles from './styles.module.scss';

import { Tabs } from 'decentraland-ui'

const methods = [
  'Scribe',
  'Update Sale',
  'Purchase',
  'Gift'
];

class TabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  render() {
    return (
      <Tabs>
        {methods.map((method, index) => {
          return <Tabs.Tab
            onClick={() => this.setState({ activeTab: index })}
            active={this.state.activeTab === index}
            >{method}</Tabs.Tab>
        })}
      </Tabs>
    )
  }
}

export default TabsComponent;
