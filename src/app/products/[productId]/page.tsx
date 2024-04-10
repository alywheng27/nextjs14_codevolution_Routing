import React from 'react'

import { Metadata } from 'next'

type Props = {
  params: {
    productId: string
  }
}

// Dynamic Metadata
// ? With Async
// ! The name 'generateMetadata' function is required
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${ params.productId }`)
    }, 100)
  })
  return {
    title: `Product ${title}`
  }
}

// Dynamic Metadata
// ? Without Async
// ! The name 'generateMetadata' function is required
// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${ params.productId }`
//   }
// }

const ProductID = ({ params, }: Props) => {
  return (
    <div>ProductID: { params.productId }</div>
  )
}

export default ProductID