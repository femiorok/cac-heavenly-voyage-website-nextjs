import Image from 'next/image'
import caclogo from '/public/caclogo.png'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-center animate-fade-in-down" >
    <div className="max-w-5xl basis-full">
      <ul className="flex justify-between">
        <div className='my-2'>
        <Image src={caclogo} height={70} width={80} />
        </div>
        <div className='flex items-center'>
        <li className='px-4 font-medium hover:text-amber-500 hover:underline transition-all'><Link href='/'>Home</Link></li>
        <li className='px-4 font-medium hover:text-amber-500 hover:underline transition-all'><Link href='/#aboutus'>About Us</Link></li>
        <li className='px-4 font-medium hover:text-amber-500 hover:underline transition-all'><Link href='/we-believe'>Our Beliefs</Link></li>
        <li className='px-4 font-medium hover:text-amber-500 hover:underline transition-all'>Blog</li>
        <li className='px-4 font-medium hover:text-amber-500 hover:underline transition-all'><Link href='/#events'>Join Us</Link></li>
        </div>
      </ul>
    </div>
    </nav>
  )
}
