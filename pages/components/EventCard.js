import Image from 'next/image'
import { useState, useEffect, useRef } from 'react';


const EventCard = ({event, day, time, location, description, image}) => {

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
    isVisible ? setAnimate('w-1/4 border-2 border-t-8 border-amber-300 hover:shadow-lg hover:shadow-amber-100 hover:border-amber-100 transition-all ease-in-out duration-500 animate-fade-in-down')
     : setAnimate('w-1/4 border-2 border-t-8 border-amber-300 hover:shadow-lg hover:shadow-amber-100 hover:border-amber-100 transition-all ease-in-out duration-500');
  }, [isVisible])

  return (
    <div ref={myRef} className={animate}>
      <div className="rounded overflow-hidden">
      <div className='h-64 px-5'>
      <div className='flex flex-col items-center h-32 divide-y divide-amber-300'>
      <div className="font-bold text-xl mb-2 pt-5 underline">{event}</div>
      <div className="font-semibold text-xl mb-2 text-center w-3/5">{day} {time} {location}</div>
      </div>  
      <p className="text-gray-700 text-base text-center mt-4">
      {description}
      </p>
      </div>
      </div>
    </div>
  )
}

export default EventCard