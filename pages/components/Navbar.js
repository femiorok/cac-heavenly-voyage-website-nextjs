import Image from 'next/image'
import caclogo from '/public/caclogo.png'

export default function Navbar() {
  return (
    <nav className="flex justify-center" >
    <div className="max-w-5xl h-24 basis-full">
      <ul className="flex justify-between">
        <Image src={caclogo} height={80} width={80} />
        <div className='flex items-center'>
        <li className='px-4 font-medium hover:text-neutral-300'>Home</li>
        <li className='px-4 font-medium hover:text-neutral-300'>About Us</li>
        <li className='px-4 font-medium hover:text-neutral-300'>Blog</li>
        <li className='px-4 font-medium hover:text-neutral-300'>Join Us</li>
        </div>
      </ul>
    </div>
    </nav>
  )
}
