import React from 'react';
import styles from './styles.module.scss';

import { Page, Field, Form, Button, Radio} from 'decentraland-ui'

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
        <Form>
          <Field label="Token address" value={this.state.address} type="address" />
          <Field label="Token id" />
          <Field label="Eth price" />
          <Field label="Starting royalties" />
          <Field
            label="Label"
            value="Input value"
            action="submit"
            onAction={() => alert('Action triggered!')}
          />
          <Radio toggle label="ON SALE" />
          <br/><br/><br/>
          <Button primary>Scribe</Button>
        </Form>
      </Page>
    );
  }
}

export default Scribe;
