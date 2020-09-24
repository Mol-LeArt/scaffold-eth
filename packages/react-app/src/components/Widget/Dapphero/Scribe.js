
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

import { useGlobalState } from '../../../store/state';

function Scribe() {
  const [value, update] = useGlobalState('startingRoyalities');
    return (
      <div>
        <header>
          <div
            data-dh-feature="customContract"
            data-dh-property-method-id="kNQd"
            data-dh-property-auto-invoke="false"
            data-dh-property-contract-name="MolScribe0923"
            data-dh-property-method-name="scribe"
          >
            <section>
          <aside className={clsx(styles.aside)}><section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="tokenAddress"
            data-dh-property-method-id="kNQd"
            data-dh-property-input-name="tokenAddress"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="tokenId"
            data-dh-property-method-id="kNQd"
            data-dh-property-input-name="tokenId"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="ethPrice"
            data-dh-property-method-id="kNQd"
            data-dh-property-input-name="ethPrice"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="startingRoyalties(8~20)"
            data-dh-property-method-id="kNQd"
            data-dh-property-input-name="startingRoyalties"
            value={value}
            onChange={e => update(e.target.value)}
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="forSale"
            data-dh-property-method-id="kNQd"
            data-dh-property-input-name="forSale"
          />
          </section>
  
          <button className="button button--block button--primary" data-dh-property-invoke="true" data-dh-property-method-id="kNQd">
          scribe
          </button>
          </aside></section>
          </div>
        </header>
      </div>
    )
}

export default Scribe;
