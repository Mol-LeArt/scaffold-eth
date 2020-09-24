
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

function Gift() {
    return (
      <div>
        <header>
          <div
            data-dh-feature="customContract"
            data-dh-property-method-id="Z0Lq"
            data-dh-property-auto-invoke="false"
            data-dh-property-contract-name="MolScribe0923"
            data-dh-property-method-name="gift"
          >
            <section>
          <aside className={clsx(styles.aside)}><section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="tokenAddress"
            data-dh-property-method-id="Z0Lq"
            data-dh-property-input-name="tokenAddress"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="tokenId"
            data-dh-property-method-id="Z0Lq"
            data-dh-property-input-name="tokenId"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="communityAddress"
            data-dh-property-method-id="Z0Lq"
            data-dh-property-input-name="communityAddress"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="EthValue"
            data-dh-property-method-id="Z0Lq"
            data-dh-property-input-name="EthValue"
          />
          </section>
  
          <button className="button button--block button--primary" data-dh-property-invoke="true" data-dh-property-method-id="Z0Lq">
          gift
          </button>
          </aside></section>
          </div>
        </header>
      </div>
    )
}

export default Gift;
