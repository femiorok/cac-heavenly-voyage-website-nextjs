import Image from 'next/image'
import caclogo from '/public/caclogo.png';
import styles from '../../styles/WhoWeAre.module.css'
import { useRef, useState, useEffect } from 'react';

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState();
  const [animate, setAnimate] = useState();
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.isIntersecting && setIsVisible(true)
      })
    })
    observer.observe(myRef.current);
    return () => {
      isVisible && observer.unobserve(myRef.current)
    }

  }, [])

  useEffect(() => {
    isVisible ? setAnimate('border drop-shadow-2xl bg-slate-100 relative my-40 flex justify-center animate-fade-in-down')
     : setAnimate('border drop-shadow-2xl bg-slate-100 relative my-40 flex justify-center');
  }, [isVisible])

  return (
    <div className="h-[50rem] relative mb-20" id="aboutus">
      <div className="flex flex-col basis-1/2 items-center">
      <div className='flex flex-col items-center grow bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200 py-10 w-full'>
      <h1 className="text-3xl font-thin wider">Who We</h1>
      <h2 className="text-7xl font-semibold">Are</h2>
      </div>
      <div ref={myRef} className={animate}>
      <div className='absolute -top-28 drop-shadow-md'>
      <Image src={caclogo} width={170} height={150} />  
      </div>
      <p className='max-w-2xl p-10 opacity-100 relative'><span className='font-semibold bg-amber-100 p-1'> Christ Apostolic Church (Heavenly Voyage)</span> is a new assembly of Christ Apostolic Church, affiliated to Christ Apostolic Church North America Region(CAC-NA), under the global umbrella of Christ Apostolic Church (Worldwide).<br /><br />

      As of 2018, the current leader of CAC (Worldwide) is <span className='font-semibold bg-amber-100 p-1'>Pastor A.O. Akinosun, President</span>, located in the Christ Apostolic Church Headquarters in Ibadan, Nigeria. The regional umbrella in North America, C.A.C.NA covers all C.A.C assemblies in USA and Canada, under the regional Superintendent, Pastor T.A.O. Agbeja, (Ph. D). The    Superintendent of the California Zone is <span className='font-semibold bg-amber-100 p-1'> Pastor Gabriel Idowu.</span><br /><br />

      The C.A.C. mission has its offspring in Nigeria (West Africa), in 1918. This foremost African Pentecostal church now has memberships in the order of <span className='font-semibold bg-amber-100 p-1'>7 million, and 
      1,000’s of church assemblies in Africa, Europe and North America.</span> 
      </p>
      </div>
      </div>
      
     
      
    </div>
  )
}

export default WhoWeAre