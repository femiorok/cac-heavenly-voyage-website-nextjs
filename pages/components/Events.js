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

const Events = () => {
  return (
    <div >
      <div className="">
      <h2 className="text-7xl font-semibold font-serif text-center py-10">Join Us</h2>
      <div className="flex justify-around pb-10">
      <div className="w-1/4 h-72 rounded shadow-lg pt-5 flex flex-col justify-center cross_bg">
        <h2 className="text-5xl font-semibold font-serif text-center underline justify-self-start">Church Address</h2>
          <div className="flex justify-center w-full">
          <Image src={navigation}/>
          <h2 className="text-3xl font-serif px-5 w-1/2 pb-5">2700 Little Mountain Rd. San Bernadino, CA 92405</h2>
          </div>
      </div>
      <div className="w-1/4 h-72 rounded shadow-lg pt-5 flex flex-col justify-center">
        <h2 className="text-5xl font-semibold font-serif text-center underline justify-self-start">Phone Line</h2>
          <div className="flex justify-center w-full">
          <Image src={phone}/>
          <h2 className="text-3xl font-serif px-5 w-1/2 pb-5">(774)220-4000 Passcode: 7179122</h2>
          </div>
          </div>
          <div className="w-1/4 h-72 rounded shadow-lg pt-5 flex flex-col">
        <h2 className="text-5xl font-semibold font-serif text-center underline justify-self-start">Zoom Link </h2>
          <div className="flex justify-center w-full">
          <Image src={zoom}/>
          <a className="text-3xl font-serif px-5 w-1/2 pb-5 place-self-center" href="https://us02web.zoom.us/j/82477465726?pwd=K01IOE80NVRYY2kwOGF6Tks4T1N6dz09#success">Click Here</a>
          </div>
          </div>
      </div>
      </div>
      
      <div className="flex justify-around ">
        <EventCard event="Bible Study" day="Wednesday" time="7:30pm" location="Phone Conference" image={image6} description="Join us in our weekly bible study, where we delve into the Word of God" />
        <EventCard event="Prayer Meeting (English)" day="Thursday" time="7:30pm" location="Phone Conference" image={image2} description="Gather together in prayer fellowship" />
        <EventCard event="Prayer Meeting (Yoruba)" day="Friday" time="7:30pm" location="Phone Conference" image={image3} description="Gather together in prayer fellowship" />
        <EventCard event="Sunday School" day="Sunday" time="10am" location="Church" image={image4} description="Learn more about the tenets of Christianity as we read through our CAC Sunday School book together"/>
        <EventCard event="Sunday Service" day="Sunday" time="11am" location="Church" image={image5} description="Join the fellowship of believers as we engage with God in worship, prayer, and studying His word"/>
      </div>
      <style jsx> {`
        .cross_bg {
          background-image: url("/public/cross_bg.svg");
          background-color: #cccccc;
        }
        `}
      </style>
    </div>
    
  )
}

export default Events