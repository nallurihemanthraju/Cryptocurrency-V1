import React from 'react'
import Cards from './Cards'
import "./Home.css"
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'



function Home() {
  return (
    <div >
        <div className='bodyContainer'>
          <div className='background'>
            <img className='' src='' alt='backgroundimage'/>
          
             <h1 className='text-2xl  font-extrabold text-blue-300 hover:text-light text-center'>Cryptocurrency Block Header Works</h1>
            </div>
            <div className='m-3/5 h-24 m-auto  mt-5 border-4 border-gray-300 shadow-box rounded-3xl flex items-center content-center   ' style={{hight:"100px",width:"90%",margenTop:"6px"}}>
                <p className="p-4 m-2 text-xl font-semibold mt-7 text-white" style={{fontSize:"1rem",padding:"0rem 1rem",margin:"1rem 0rem"}}>
                Cryptocurrency is a digital or virtual coin secured by cryptography, which makes it next to impossible to counterfeit. They have their own store values, and are ...
                The use of encryption technologies means that cryptocurrencies function both as a currency and as a virtual accounting system. To use cryptocurrencies, you need a cryptocurrency wallet.Cryptocurrency does not exist in physical form (like paper money) and is typically not issued by a central authority.
                </p>
            </div>
            <Cards/>
            <div className='m-3/5 h-24 m-auto  mt-5 border-4 border-gray-300 shadow-box rounded-3xl flex items-center content-center   ' style={{hight:"100px",width:"90%",margenTop:"6px"}}>
                <p className="p-4 m-2 text-xl font-semibold mt-7 text-white" style={{fontSize:"1rem",padding:"0rem 1rem",margin:"1rem 0rem"}}>
                Cryptocurrency is a digital or virtual coin secured by cryptography, which makes it next to impossible to counterfeit. They have their own store values, and are ...</p>
            </div>
            
          </div>
          
          
    </div>
  )
}

export default Home