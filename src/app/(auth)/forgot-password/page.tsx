"use client"
import React from 'react'
import { useState } from 'react'

const ForgotPassword = () => {
  const [val, setVal] = useState("")
  return (
    <div>
      <input type="text" value={val} onChange={(e) => {setVal(e.target.value)}} className='text-black' />
      ForgotPassword
    </div>
  )
}

export default ForgotPassword