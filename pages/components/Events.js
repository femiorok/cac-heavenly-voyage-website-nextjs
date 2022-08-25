import EventCard from "./EventCard"
import styles from '/styles/Events.module.css';
import image6 from '/public/image6.jpg';
import image2 from '/public/image2.jpg';
import image3 from '/public/image3.jpg';
import image4 from '/public/image4.jpg';
import image5 from '/public/image5.jpg';
import navigation from '/public/navigation.svg';
import phone from '/public/phone.svg';
import Image from 'next/image'
import zoom from '/public/zoom.svg'
import cross_bg from '/public/cross_bg.svg'
import { useEffect, useState, useRef } from "react";

const Events = () => {

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
    isVisible ? setAnimate('animate-fade-in-down')
     : setAnimate('');
  }, [isVisible])

  return (
    <div id="events" ref={myRef} className={animate}>
      <div className="bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200">
      <div>
      <h2 className="text-4xl font-semibold text-center py-10">Join Us</h2>
      </div>
      <section className="flex gap-10 h-64 pb-14">
        <div className="card flex flex-col items-center w-1/3 drop-shadow-md bg-transparent hover:bg-slate-100/50 transition-all duration-300 ">
        <div className="w-full h-1 bg-gradient-to-r from-amber-100 to-amber-700 "></div>
          <div className="pb-2 mt-3 animate-bounce">
            <Image src={cross_bg} height={25}/>
          </div>
          <div className="w-48 text-center text-2xl h-12">
            <h2>Church Address</h2>
          </div>
          <div className="w-48 flex flex-col justify-center text-center h-20">
            <p>2700 Little Mountain Rd. San Bernardino, CA 92405</p>
          </div>
          <div className="w-48 text-center">
            <Image src={navigation} height={30} />
          </div>
        </div>
        <div className="card flex flex-col items-center w-1/3 drop-shadow-md bg-transparent hover:bg-slate-100/50 transition-all duration-300">
        <div className="w-full h-1 bg-gradient-to-r from-amber-100 to-amber-700"></div>
          <div className="pb-2 mt-3 animate-bounce">
            <Image src={cross_bg} height={25}/>
          </div>
          <div className="w-48 text-center text-2xl h-12">
            <h2>Conference Line</h2>
          </div>
          <div className="w-48 flex flex-col justify-center text-center h-20">
            <p>(774)220-4000 | Passcode: 7179122</p>
          </div>
          <div className="w-48 text-center">
            <Image src={phone} height={30} />
          </div>
        </div>
        <div className="card flex flex-col items-center w-1/3 drop-shadow-md bg-transparent hover:bg-slate-100/50 transition-all duration-300">
        <div className="w-full h-1 bg-gradient-to-r from-amber-100 to-amber-700"></div>
          <div className="pb-2 mt-3 animate-bounce">
            <Image src={cross_bg} height={25}/>
          </div>
          <div className="w-48 text-center text-2xl h-12">
            <h2>Zoom Link</h2>
          </div>
          <div className="w-48 flex flex-col justify-center text-center h-20">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Here</button>
          </div>
          <div className="w-48 text-center">
            <Image src={zoom} height={35} width={35} />
          </div>
        </div>
      </section>
      </div>
      <div>
        <h1 className="text-center text-4xl font-semibold font-sans mt-10">
          Weekly Events
        </h1>
      </div>
      
      <div className="flex flex-wrap gap-x-3 gap-y-10 py-10 w-4/5 justify-center m-auto">
        <EventCard event="Bible Study" day="Wednesday" time="7:30pm" location="Phone Conference" description="Join us in our weekly bible study, where we delve into the Word of God" />
        <EventCard event="Prayer Meeting (English)" day="Thursday" time="7:30pm" location="Phone Conference" description="Gather together in prayer fellowship" />
        <EventCard event="Prayer Meeting (Yoruba)" day="Friday" time="7:30pm" location="Phone Conference" description="Gather together in prayer fellowship" />
        <EventCard event="Sunday School" day="Sunday" time="10am" location="Church" description="Learn more about the tenets of Christianity as we read through our CAC Sunday School book together"/>
        <EventCard event="Sunday Service" day="Sunday" time="11am" location="Church" description="Join the fellowship of believers as we engage with God in worship, prayer, and studying His word"/>
      </div>
    </div>
    
  )
}

export default Events