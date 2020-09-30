import React from 'react';
import styles from './styles.module.scss';

import { Header, Page, Field, Form, Button, Radio, Segment, Row } from 'decentraland-ui'

class Scribe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };
  }

  render() {
    return (
      <Page>
        <Segment>
          <Header>Call scribe method</Header>
          <br/>
          <Form>
            <Field label="Token address" value={this.state.address} placeholder="0x..." type="address" />
            <Field label="Token id" placeholder="e.g. 1" />
            <Field label="Eth price" />
            <Field label="Starting royalties" />
            <Header sub>ON SALE</Header>
            <br/>
            <Row stacked>
              <Radio checked={true} label="Yes" />
              <Radio checked={false} label="No" />
            </Row>
            <br/><br/><br/>
            <Button primary>Scribe</Button>
          </Form>
        </Segment>
      </Page>
    );
  }
}

export default Scribe;
