import React from 'react'
import { Link } from 'react-router-dom';

function Feature1() {
  return (
    <div className='bg-black'>
      
      <div>
      <h1 className='mt-3 text-white text-4xl ml-[500px]'>Bitcoin</h1>
      <br/>
      <h1 className='ml-5 text-3xl text-red-800'>What is Bitcoin ?</h1>
      <br/>
      <div className='columns-2 mb-2'>
        <p className='text-justify text-3xl ml-9 text-white'>Bitcoin is a decentralized digital currency that you can buy, sell and exchange directly, without an intermediary like a bank. Bitcoin's creator, Satoshi Nakamoto, originally described the need for “an electronic payment system based on cryptographic proof instead of trust.”</p>
        <img className='ml-32 w-80  h-44 drop-shadow-xl' src='https://m.economictimes.com/thumb/msid-92425568,width-1599,height-1080,resizemode-4,imgsize-305360/crypto-price-today-polygon-soars-24-avalanche-18-ethereum-bitcon-gain-up-to-7.jpg' alt='demartaccout'/>
      </div>
      <div className='columns-2 mb-2'>
        <img  className='ml-10 mt-11 rounded-2xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTG5SXUiIA_E_piLmSRyeAraIHjimTFpB4ifecB2mx0p3TmByyale-1eh5Gc7H1sVs5s&usqp=CAU' alt='BUYBITCOIN'/>
        <h1 className='ml-2 mt-16 text-lg text-white'>STEPS TO BUY BITCOIN</h1>
        <li className='text-lg text-white'>Choose a Crypto Exchange. To buy Bitcoin or any cryptocurrency, you'll need a crypto exchange where buyers and sellers meet to exchange dollars for coins. ..</li>
        <li className='text-lg text-white'>Decide on a Payment Option. ...</li>
        <li className='text-lg text-white'>Place an Order. ... </li>
        <li className='text-lg text-white'>Select a Safe Storage Option</li>
      </div>
      </div>
      <div>
        <Link to="/createaccount" className='ml-96 bg-yellow-300 border-2 '>CreateAccount</Link>
      
      {/* <Link className='mt-4 border-2 bg-green-400 rounded-lg ml-[550px]'>Create Account</Link> */}
      </div>
      
      
    </div>
  )
}

export default Feature1;