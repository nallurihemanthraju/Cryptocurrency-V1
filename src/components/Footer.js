import React from 'react'

function Footer() {
  return (
    <>
    <div className="footerStyle mt-0 bg-black" style={{width:"100%", height:"40px"}}>
            <p className='text-center text-white py-2 gap-10'> &copy; cryptocurrency 2022  &nbsp;
            <a href='https://www.facebook.com/login/'><i className="bi bi-facebook"></i></a>  &nbsp;
             <a className='hover:text-orange-700' href='https://www.instagram.com/'><i className="bi bi-instagram"></i></a>
               &nbsp; <a className='hover:text-orange-700' href='https://twitter.com/?lang=en-in'><i className="bi bi-twitter"></i></a>  &nbsp; 
               <a className='hover:text-orange-700' href='https://in.linkedin.com/'><i className="bi bi-linkedin"></i></a> </p>
        </div>
    </>
  )
}

export default Footer