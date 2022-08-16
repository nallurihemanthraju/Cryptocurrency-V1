import React from 'react'

function Feature2() {
  return (
    <>
    <div className=''>
    <h1 className='ml-[40%] mt-4 text-5xl'> Ethereum</h1>
      <div className='border-2 ml-44 rounded-lg mr-4 border-black bg-slate-400'><div> 
      <h1 className='ml-6 text-3xl text-red-500'>What is Ethereum ?</h1>
      <li>Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether  is the native cryptocurrency of the platform. Among cryptocurrencies, Ether is second only to Bitcoin in market capitalization</li>
      <li>Ethereum was conceived in 2013 by programmer Vitalik Buterin.</li>
      <li>Additional founders of Ethereum included Gavin Wood, Charles Hoskinson, Anthony Di Iorio and Joseph Lubin</li>
      <p></p>
      </div>
      </div>
      <br/>
      <br/>
      <div className='columns-2 mb-2'>
        <img className='ml-3 h-[300px] w-96 rounded-2xl mt-6' src='https://www.forbes.com/advisor/wp-content/uploads/2021/03/ethereum-1.jpeg' alt='Etherum'/>
        <div className='text-xl mt-[300px]'>
        <li className='mt-4'>Initial release date: 30 July 2015</li>
        <li>Written in: Solidity</li>
        <li>Software used: EVM 1 Bytecode</li>
        <li>License: Open-source licenses</li>
        <li>Original author: Vitalik Buterin, Bitso, Gemini, Yieldstreet, Ethereum Switzerland GmbH</li>
        <li>Platforms: x86-64, ARM architecture family</li>
        <li>Developer: Vitalik Buterin, Bitso, Gemini, Yieldstreet, Ethereum Switzerland GmbH</li>
        </div>
      </div>
      <div className='columns-2 mb-2'>
        <div className='ml-4'>
          <h1 className='text-2xl'>Crypto (short for cryptocurrency) is a new form of digital money powered by cryptography.</h1>
          <li className='mt-2 text-lg'>It all started in 2008 with Bitcoin. You could use it to send funds to anyone anywhere globally. What made crypto different from normal bank transfers or other financial services like Paypal or Alipay is that there was no middle man for the first time.</li>
          <br/>
          <br/>
          <br/>
          <li className='mt-2 text-lg'>Wait, what is a middle man?</li>
          <br/>
          <br/>
          <li className='mt-2 text-lg'>A middle-man is a central authority like a bank or government that intervenes in a transaction between the sender and recipient. They have the power to surveill, censor or revert transactions and they can share the sensitive data they collect about you with third parties. They also often dictate which financial services you have access to.</li>
          <br/>
          <br/>
          <li className='mt-2 text-lg'>Things are different with crypto. Transactions directly connect sender and recipient without having to deal with any central authority. Nobody else will have access to your funds and nobody can tell you what services you can use. This is possible because of the blockchain technology upon which cryptocurrencies operate.</li>
          </div>
          <div>
            <img src='https://ethereum.org/static/0feeac3f7182fbfa52ee3aa146840325/3217f/wallet.webp' alt='wallet'/>
          </div>
      </div>
    </div>
    </>
  )
}

export default Feature2