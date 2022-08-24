import React from 'react'
import Navbar from './components/Navbar'
import ImageHeader from './components/ImageHeader'
import Image from 'next/image'
import bible_svg from '../public/bible_svg.svg'
import brown_cross from '../public/brown_cross.svg'
import cross_ribbon from '../public/cross_ribbon.svg'
import goblet from '../public/goblet.svg'
import three_crosses from '../public/three_crosses.svg'
import wine from '../public/wine.svg'
import { useEffect, useState, useRef } from 'react'

const WeBelive = () => {


  
  return (
    <div>
    <Navbar />
    <h1 className='text-center font-sans text-7xl font-extrabold tracking-widest mb-20'>Church Beliefs & Tenets</h1>
    <div className='w-4/5 bg-gradient-to-b from-amber-700 to-amber-900 h-72 drop-shadow-lg relative'>
    <div className='absolute -right-64'><Image src={three_crosses} height={287} /></div>
      <div className='text-4xl font-bold italic text-white text-center align-middle flex h-full justify-center items-center'>
        <p className='w-3/5 h-min'>Unity of the God-head, and the persons therein (Father, Son and Holy Spirit)</p>
      </div>
    </div>
    <div className='w-4/5 bg-gradient-to-b from-amber-700 to-amber-900 h-72 drop-shadow-lg mt-20 ml-[20%]'>
    <div className='absolute -left-64'><Image src={cross_ribbon} height={287} /></div>
      <div className='text-4xl font-bold italic text-white text-center align-middle flex h-full justify-center items-center'>
        <p className='w-3/5 h-min'>The Virgin Birth, Sinless Life, Atoning Death, Physical Triumphant Resurrection, Ascension, and the abiding intercession of our Lord Jesus Christ</p>
      </div>
    </div>
    <div className='w-4/5 bg-gradient-to-b from-amber-700 to-amber-900 h-72 drop-shadow-lg relative mt-20'>
    <div className='absolute -right-64'><Image src={goblet} height={287} /></div>
      <div className='text-4xl font-bold italic text-white text-center align-middle flex h-full justify-center items-center'>
        <p className='w-3/5 h-min'>Jesus Christ second coming and Millennia reign.</p>
      </div>
    </div>
    <div className='w-4/5 bg-gradient-to-b from-amber-700 to-amber-900 h-72 drop-shadow-lg mt-20 ml-[20%]'>
    <div className='absolute -left-64'><Image src={brown_cross} height={287} /></div>
      <div className='text-4xl font-bold italic text-white text-center align-middle flex h-full justify-center items-center'>
        <p className='w-3/5 h-min'>Water Baptism by immersion, and the baptism of the Holy Ghost for believers with signs that follow.</p>
      </div>
    </div>
    <div className='w-4/5 bg-gradient-to-b from-amber-700 to-amber-900 h-72 drop-shadow-lg relative mt-20'>
    <div className='absolute -right-64'><Image src={wine} height={287} /></div>
      <div className='text-4xl font-bold italic text-white text-center align-middle flex h-full justify-center items-center'>
        <p className='w-3/5 h-min'>Justification and Sanctification of believers through the finished work of Christ</p>
      </div>
    </div>
    <div className='w-4/5 bg-gradient-to-b from-amber-700 to-amber-900 h-72 drop-shadow-lg mt-20 ml-[20%]'>
    <div className='absolute -left-64'><Image src={bible_svg} height={287} /></div>
      <div className='text-4xl font-bold italic text-white text-center align-middle flex h-full justify-center items-center'>
        <p className='w-3/5 h-min'>Believe Holy Bible to be verbally inspired, innerant Word of God, and, when rightly interpreted by the Holy Spirit, to be the infallible rule of faith and practice.</p>
      </div>
    </div>
    </div>
  )
}

export default WeBelive