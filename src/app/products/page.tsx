import React from 'react'
import Link from 'next/link'

const Product = () => {
  return (
    <div>
        <h1>Product List</h1>
        <h2><Link href="/products/1">Product 1</Link></h2>
        <h2><Link href="/products/2">Product 2</Link></h2>
        {/* 'Replace' replaces the current history state instead of adding a new url to the stack. */}
        {/* 'Replace' is like clearing the url history so when you press back, you go back to home page. */}
        <h2><Link href="/products/3" replace>Product 3</Link></h2>
    </div>
  )
}

export default Product