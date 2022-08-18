import Image from 'next/image'


const EventCard = ({event, day, time, location, description, image}) => {
  return (
    <div>
      <div className="max-w-xs rounded overflow-hidden shadow-lg h-[30rem]">
      <div className='h-48 overflow-hidden'>
      <Image src={image}/>
      </div>
      <div className='h-[18rem]'>
      <div className='flex flex-col items-center h-32'>
      <div className="font-bold text-xl mb-2 pt-5">{event}</div>
      <div className="font-semibold text-xl mb-2 text-center">{day} {time} {location}</div>
      </div>  
      <p className="text-gray-700 text-base mt-10 text-center px-5">
      {description}
      </p>
      </div>
      </div>
    </div>
  )
}

export default EventCard