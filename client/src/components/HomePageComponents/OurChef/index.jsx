import React from 'react'

const OurChef = () => {
  return (
    <div className=' flex flex-col lg:flex-row section gap-5 lg:gap-16 items-center'>
        <div className=' w-full lg:w-1/2'>
            <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg" alt="" className=' w-full' />
        </div>
        <div className='w-full lg:w-1/2 p-10'>   
            <h3 className=' text-gray-400 py-3'>ABOUT TASTY</h3>
            <h2 className=' text-3xl'>Our chef cooks the most delicious food for you</h2>
            <p className=' py-3 text-gray-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className='text-gray-400'>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
        </div>
    </div>
  )
}

export default OurChef