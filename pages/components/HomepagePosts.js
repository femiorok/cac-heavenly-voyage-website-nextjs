import Link from 'next/link'
import post from '../../cac-heavenly-voyage-blog/schemas/post'
import {PortableText} from '@portabletext/react'

function HomepagePosts({posts}) {
  return (
    <div className='justify-center items-center py-20 bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200'>
    <h1 className="text-center text-4xl font-semibold font-sans block mb-5">
    Recent Blog Articles
    </h1>
    <div className='flex justify-around'>
    {posts?.map(post => (
      <Link key={post._id} href={`/blog/${post.slug.current}`}>
      
      <div className="block rounded-lg shadow-lg bg-white w-1/4 text-center border-2 border-amber-500 hover:shadow-2xl transition-all ease-in-out">
      <h1 className='text-gray-900 text-xl font-medium py-5 px-3'>{post.title}</h1>
      <p className='text-gray-700 border-t border-gray-300 py-3'>{post.description}</p>
      <button type="button" className=" inline-block px-6 py-2.5 my-3 bg-amber-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-700 hover:shadow-lg transition duration-150 ease-in-out">Read More</button>
      </div>
      
      </Link>
    ))}
    </div>
    </div>
  )
}

export default HomepagePosts