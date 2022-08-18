import Image from 'next/image'
import caclogo from '/public/caclogo.png';

const WhoWeAre = () => {
  return (
    <div className="h-[50rem] relative">
      <div className="flex flex-col basis-1/2 items-center pt-10 font-serif">
      <div className='flex flex-col items-center grow'>
      <h1 className="text-3xl font-thin">Who We</h1>
      <h2 className="text-7xl font-semibold">Are</h2>
      </div>
      <div className='border drop-shadow-2xl bg-slate-100 relative mt-40 flex justify-center'>
      <div className='absolute -top-28'>
      <Image src={caclogo} width={170} height={150} />  
      </div>
      <p className='max-w-2xl p-10 opacity-100 relative'><span className='font-semibold'> Christ Apostolic Church (Heavenly Voyage)</span> is a new assembly of Christ Apostolic Church, affiliated to Christ Apostolic Church North America Region(CAC-NA), under the global umbrella of Christ Apostolic Church (Worldwide).<br /><br />

      As of 2018, the current leader of CAC (Worldwide) is <span className='font-semibold'>Pastor A.O. Akinosun, President</span>, located in the Christ Apostolic Church Headquarters in Ibadan, Nigeria. The regional umbrella in North America, C.A.C.NA covers all C.A.C assemblies in USA and Canada, under the regional Superintendent, Pastor T.A.O. Agbeja, (Ph. D). The    Superintendent of the California Zone is <span className='font-semibold'> Pastor Gabriel Idowu.</span><br /><br />

      The C.A.C. mission has its offspring in Nigeria (West Africa), in 1918. This foremost African Pentecostal church now has memberships in the order of <span className='font-semibold'>7 million, and 
      1,000’s of church assemblies in Africa, Europe and North America.</span> 
      </p>
      </div>
      </div>
      
     
      
    </div>
  )
}

export default WhoWeAre