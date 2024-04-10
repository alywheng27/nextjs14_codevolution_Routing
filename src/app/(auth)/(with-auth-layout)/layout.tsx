import React from 'react'

const AuthLayout = ({ children, }: { children: React.ReactNode }) => {
  return (
    <>
        <div className='text-center w-full px-2 py-2 bg-slate-400 my-2'>Auth Layout</div>
        { children }
    </>
  )
}

export default AuthLayout