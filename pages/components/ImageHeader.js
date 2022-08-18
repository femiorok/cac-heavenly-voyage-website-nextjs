import Image from 'next/image'
import image1 from '/public/image1.jpg'

const ImageHeader = () => {
  return (
    <div style={{ height: '35rem', position: 'relative' }}>
      <Image layout="fill" objectFit="cover" src={image1} className="brightness-75" />
      <div className='absolute top-1/3 w-full flex flex-col items-center '>
      <h1 className="text-7xl font-bold text-white">Christ Apostolic Church</h1>
      <h1 className="text-5xl italic text-white">Heavenly Voyage</h1>
      </div>
    </div>
  )
}

export default ImageHeader