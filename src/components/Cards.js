import React from 'react'
import {Link} from 'react-router-dom'
import "./Cards.css"
const Cards = () => {
  return (
    <div>
        <div className='flex flex-row gap-8 jestify-between items-center px-3 mx-20 mt-6 no-underline'>
        
            <div className='cardDiv p-2 border-4 border-white mt-2 shodow-box bg-yellow rounded-2xl ml-6 w-auto h-50 '>
            <Link to="/feature1" className=' no-underline' >
              <img className='w-96 h-36 ' src='https://m.economictimes.com/thumb/msid-92425568,width-1599,height-1080,resizemode-4,imgsize-305360/crypto-price-today-polygon-soars-24-avalanche-18-ethereum-bitcon-gain-up-to-7.jpg' alt='BYCYCLE'/>
            <p className='text-lg font-extrabold text-center text-amber-800'>BIT COIN</p>
            <p className='text-lg font-semibold '>Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer bitcoin network</p>
            </Link>
            </div>

        <Link to="/feature2"  
        className='cardDiv p-2 border-4 no-underline border-white mt-2 shodow-box  rounded-2xl ml-6 w-auto h-50'>
        <img className='w-96 h-36'  src='https://public.bnbstatic.com/image/cms/blog/20210123/35f08548-e0c1-4724-8860-4afadd267f19.jpg' alt='featureimg'/>
        <p className='text-lg font-extrabold text-center text-amber-800'>Ethereum</p>
        <p className='text-lg  font-semibold '>Ethereum is a technology that's home to digital money, global payments, and applications.</p>
            </Link>

        <Link to="/feature3" 
        className='cardDiv p-2 border-4 no-underline border-white mt-2 shodow-box  rounded-2xl ml-6'>
        <img className='w-96 h-36'   src='https://cryptoslate.com/wp-content/uploads/2017/09/tether-social.jpg' alt='featureimg'/>
        <p className='text-lg font-extrabold text-center text-amber-800'>Tether</p>
        <p className='text-lg font-semibold'>Tether, is an asset-backed cryptocurrency stablecoin. It was launched by the company </p>
        </Link>
        <Link to="/feature4" 
        className='cardDiv p-2 border-4 no-underline border-white mt-2 shodow-box  rounded-2xl ml-6'>
        <img className='w-96 h-40'   src='https://image.shutterstock.com/image-illustration/binance-coin-stacked-on-pile-260nw-1385269550.jpg' alt='featureimg'/>
        <p className='text-lg font-extrabold text-center text-amber-800'>binance coin</p>
        <p className='text-lg font-semibold'>We can order requried  item through online we get item for resinable prize</p>
        </Link>

      
        </div>
        <div className="flex justify-center items-center" style={{height:"48px",width:"100%"}}>
          {/* <Link to="/contact" className='bg-blue-500 rounded-lg px-3 py-1 mt-4 hover:bg-orange-400 '>Contact us</Link> */}
        </div>
        <div className='strightline'>
          
        </div>
       </div>
  )
}

export default Cards

