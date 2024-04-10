import Link from 'next/link'
import React from 'react'

/**
 * ! Intercepting Routes
 * * Intercepting routes allows you to intercept or stop the default routing behaviour to 
 * * present an alternative view or component when navigating through the UI,
 * * while still preserving the intended route for scenarios like page reload.
 * 
 * * This can be useful if you want to show a route while keeping the context of the current page.
 * 
 * ! Intercepting Routes Conventions
 * * (.)foldername to match segements of the same level as page.tsx and the interceptor folder must be at the same level as page.tsx.
 * * (..)foldername to match segements one level above of page.tsx and the interceptor folder must be at the same level as page.tsx.
 * * (..)(..)foldername to match segements two level above of page.tsx and the interceptor folder must be at the same level as page.tsx.
 * // (..)(..) not working as of October 2023
 * * (...)foldername to match segements from the root app directory and the interceptor folder must be at the same level as page.tsx.
 */

export default function F1() {
  return (
    <div>
        F1
        <Link href="/f1/f2">F2</Link>
    </div>
  )
}
