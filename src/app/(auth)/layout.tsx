"use client"
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';
import "./style.css"

import { useState } from 'react';

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
]

const AuthLayout = ({ children, }: { children: React.ReactNode; }) => {
    const pathname = usePathname();
    const [input, setInput] = useState("")

    return (
        <div>
            {/* When a state is put in layout.tsx, the state is preserve even if the link changes.
                If the state is put in page.tsx, the state reset if the link changes. */}
            {/* Template.tsx is almost the as layout.tsx except that template.tsx reset the state or
                doesn't preserve the state if the link changes */}
            <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}} className=' text-black' />
            {
                navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                        <Link href={ link.href } key={ link.name } className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                            { link.name }
                        </Link>
                    )
                })
            }
            { children }
        </div>
    )
}

export default AuthLayout