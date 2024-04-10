"use client"
import React from 'react'

import { useRouter } from 'next/navigation'

const OrderProduct = () => {
    const router = useRouter()

    const handleClick = () => {
        console.log("Placing your order...")
        router.push("/")
        /**
         * ? router.replace("/")
         * ? router.back()
         * ? router.forward()
         */
    }

    return (
        <>
            <div>Order Product</div>
            <button onClick={handleClick} className='px-4 py-2 bg-slate-500' >Place Order</button>
        </>
        
    )
}

export default OrderProduct