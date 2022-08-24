import Image from 'next/image'
import image1 from '/public/image1.jpg'
import Link from 'next/link'

const ImageHeader = () => {
  return (
    <div style={{ height: '35rem', position: 'relative' }}>
      <Image layout="fill" objectFit="cover" src={image1} className="brightness-75" />
      <div className='absolute top-1/3 w-full flex flex-col items-center '>
      <h1 className="text-7xl font-bold text-white">Christ Apostolic Church</h1>
      <h1 className="text-5xl italic text-white">Heavenly Voyage</h1>
      <button className='border-8 border-amber-300/75 hover:border-amber-100/75 duration-500 text-3xl px-10 hover:drop-shadow-lg transition ease-in-out tracking-wider bg-gray-500/50 my-10 p-4 text-white '><span className='hover:drop-shadow-md'><Link href="/#events">Join Us</Link></span></button>
      </div>
    </div>
  )
}

export default ImageHeader