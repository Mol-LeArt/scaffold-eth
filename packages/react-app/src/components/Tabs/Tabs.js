
import React, { useState } from 'react';
import styles from './styles.module.scss';

import { Tabs } from 'decentraland-ui'
import { withRouter } from "react-router-dom";

const methods = [
  'scribe',
  'update-sale',
  'purchase',
  'gift'
];

/*
  Convert kebab-case to title case javascript
  Cf. https://www.codegrepper.com/code-examples/delphi/regex+javascript+kebab+to+title
*/
function toTitleCase(string) {
  let sentence = string.toLowerCase().split("-");
  for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(" ");
}

class TabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  pushTabHandler = (index, method) => {
    this.setState({ activeTab: index })
    this.props.history.push(this.props.match.url + '/' + method)
  }

  render() {
    return (
      <Tabs>
        {methods.map((method, index) => {
          return <Tabs.Tab
            key={index}
            onClick={() => this.pushTabHandler(index, method)}
            active={this.state.activeTab === index}
            >{toTitleCase(method)}</Tabs.Tab>
        })}
      </Tabs>
    )
  }
}

export default withRouter(TabsComponent);
