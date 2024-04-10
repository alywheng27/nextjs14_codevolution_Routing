import React from 'react'

const ProductLayout = ({ children, }: { children: React.ReactNode }) => {
  return (
    <>
        { children }
        <div className='text-center w-full px-2 py-2 bg-slate-400 my-2'>Product Layout</div>
    </>
    
  )
}

export default ProductLayout