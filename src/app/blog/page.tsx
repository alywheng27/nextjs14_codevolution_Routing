import React from 'react'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: "Blog"
  }
}

async function delay() {
  return await new Promise((resolve) => setTimeout(resolve, 3000))
}

const Blog = async () => {
  const de = await delay()
  return (
    <div>My Blog</div>
  )
}

export default Blog