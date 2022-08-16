import React from 'react';

function About() {
  return (
    <div>
      <div>
        <h1 className='mt-3 ml-96 text-blue-600 text-2xl '>We pioneered the discount broking model in India.</h1>
        <h1 className='mt-1 ml-96 text-blue-600 text-2xl'>Now, we are breaking ground with our technology.</h1>
        <br/>
        <img className='ml-3 h-72 w-full' src='https://www.softwaretestinghelp.com/wp-content/qa/uploads/2021/12/Types-Of-Cryptocurrencies.png  ' alt='AboutIMG'/>
        <div className='columns-3'>
                    <p className='mx-6 text-justify'>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.

                    Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India in terms of active retail clients.

                    Over 9+ million clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.

                    In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.

                    Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.

                    And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
            </div>
            <div>
              <h1 className='ml-[500px] mt-4 text-red-400 text-2xl'>People at top of Stock Market</h1>
            </div>
            <div>
              <div className='columns-2 '>
                <img className='inline-block ml-36 h-44 w-44 rounded-full ring-2 ring-white' src='https://c.ndtvimg.com/2021-06/jaheqne8_rakesh-jhunjhunwala-bloonberg_625x300_24_June_21.jpg?im=Resize=(1230,900)' alt='person1'/>
                {/* <h1 className='text-1xl text-justify mx-5 '>1.Rakesh Jhunjhunwala</h1> */}
                <p className='text-1xl text-justify mx-5'><span className='ml-2 text-blue-700 text-2xl'>Rakesh Jhunjhunwala </span>is an Indian billionaire business magnate, stock trader and investor. He manages his own portfolio as a partner in his asset management firm, Rare Enterprises. Jhunjhunwala grew up in a Rajasthani family, in Bombay, where his father worked as a Commissioner of Income Tax.</p>
              </div>
              <br/>
              <div className='columns-2'>
                <img className=' inline-block ml-36 h-44 w-44 rounded-full ring-2 ring-white' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Benjamin_Graham_%281894-1976%29_portrait_on_23_March_1950.jpg/330px-Benjamin_Graham_%281894-1976%29_portrait_on_23_March_1950.jpg' alt='person2'/>
                <p className='text-1xl text-justify '><span className='ml-2 text-blue-600 text-2xl'>Benjamin Graham </span>was an influential investor whose research in securities laid the groundwork for in-depth fundamental valuation used in stock analysis today by all market participants. His famous book, "The Intelligent Investor," has gained recognition as the foundational work in value investing.</p>
              </div>
              <div className='columns-2'>
                <img className='inline-block ml-36 h-44 w-44 rounded-full ring-2 ring-white' src='https://valuestockguide.com/wp-content/uploads/war/ren/_bu/ffe/tt_/ku_/vis/it-/201/711/100/1-5/a04/fcb/a2c/a15/Warren_Buffett_KU_Visit-2017111001-5a04fcba2ca15.jpg' alt='person3'/>
                <p><span className='ml-2 text-blue-600 text-2xl'>Buffett </span>might be the most famous investor of all. Known as the "Oracle of Omaha," he worked for and learned from Graham until the value investing pioneer retired. Buffett then proceeded to establish his own investing partnership to focus on buying stakes in quality companies at fair prices.</p>
              </div>
            </div>
      </div>
    </div>
  )
}

export default About