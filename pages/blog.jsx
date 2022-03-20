import React from 'react'
import Blog from './Home_section/Blog'
import Head from 'next/head'
const blog = () => {
  return (
    <div>
      <Head>
        <title>Moon Night Group | Blogs</title>
      </Head>
      <div>

        <Blog></Blog>
      </div>
    </div>
  )
}

export default blog