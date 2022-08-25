import { sanityClient } from "../../sanity"
import {PortableText} from '@portabletext/react'
import Navbar from "../components/Navbar"

const Post = ({post}) => {
  console.log(post, 'post info')
  return (
    <div>
    <Navbar />
    <article className="my-20 w-3/5 mx-auto">
      <h1 className="text-center text-4xl my-5">{post?.title}</h1>
      <h2></h2>
      <PortableText value={post?.body} components={components}/>
    </article>
    </div>
  )
}

const query = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  body
}`

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await sanityClient.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}

const components = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({children}) => <h1 className="text-4xl my-4 underline">{children}</h1>,
    h2: ({children}) => <h2 className="text-2xl my-2 underline">{children}</h2>,

  },
}

export default Post