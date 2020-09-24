
import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

import { ethers, Contract } from "ethers";

function Sell() {

  const [addressOfToken, setAddressOfToken] = useState("")
  const [tokenId, setTokenId] = useState("")
  const [buttonElement, setButtonElement] = useState("")

  const approve = async (addressOfToken, tokenId) => {
      // A Web3Provider wraps a standard Web3 provider, which is
      // what Metamask injects as window.ethereum into each page
      const provider = new ethers.providers.Web3Provider(web3.currentProvider)
    
      // The Metamask plugin also allows signing transactions to
      // send ether and pay to change state within the blockchain.
      // For this, we need the account signer...
      const signer = provider.getSigner()
    
      const abi  = [
        // Some details about the token
        "function approve(address to, uint256 tokenId) public",
      ];
    
      // Get contract
      const contractOfToken = new Contract(addressOfToken, abi, provider)
    
      // Get signer
      const signerOfToken = contractOfToken.connect(signer)
    
      // Execute transaction
      const addressOfScribe = "0x8eA6914B86fD2164EA44a16459D17f31B0B23897"
      try {
        await signerOfToken.approve(addressOfScribe, tokenId)
        buttonElement.click()
      } catch {
        buttonElement.click()
      }
    }

    return (
      <div>
        <header>
          <div
            data-dh-feature="customContract"
            data-dh-property-method-id="MPMJ"
            data-dh-property-auto-invoke="false"
            data-dh-property-contract-name="MolScribe0923"
            data-dh-property-method-name="UpdateSale"
          >
            <section>
          <aside className={clsx(styles.aside)}><section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="ethPrice"
            data-dh-property-method-id="MPMJ"
            data-dh-property-input-name="ethPrice"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="tokenAddress"
            data-dh-property-method-id="MPMJ"
            data-dh-property-input-name="tokenAddress"
            onChange={e => setAddressOfToken(e.target.value)}
            value={addressOfToken}
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="tokenId"
            data-dh-property-method-id="MPMJ"
            data-dh-property-input-name="tokenId"
            onChange={e => setTokenId(e.target.value)}
            value={tokenId}
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="forSale"
            data-dh-property-method-id="MPMJ"
            data-dh-property-input-name="forSale"
          />
          </section>
  
          <button className={clsx(styles.hidden, "button button--block button--primary")} 
                  ref={button => setButtonElement(button)}
                  data-dh-property-invoke="true" 
                  data-dh-property-method-id="MPMJ">
            update sale
          </button>

          <button className="button button--block button--primary" onClick={() => approve(addressOfToken, tokenId)}>
            update sale
          </button>
          
          </aside></section>
          </div>
        </header>
      </div>
    )
}

export default Sell;
