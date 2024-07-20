"use client"

import Image from "next/image"
import Link from "next/link"
import { RiMenu3Line } from 'react-icons/ri'
import { dataHeader } from "./Header.data"
import { useState } from "react"
import { MotionTransition } from "../MotionTransition/"

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    return (
        <MotionTransition>
            <nav className="flex flex-wrap items-center justify-between max-w-5xl p-4 mx-auto md:py-8">
                <Link href="/" className="flex items-center">
                    <Image src="/assets/logo.png" width="90" height="90" alt="Logo TNX" />
                </Link>
                <RiMenu3Line className="block text-3xl md:hidden cursor-pointer" onClick={() => setOpenMobileMenu(!openMobileMenu)} />
                <div className={`${openMobileMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <div className="flex flex-col items-center justify-center p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        {dataHeader.map(({ id, name, idLink }) => (
                            <div key={id} className="px-4 transition-all duration-500 ease-in-out">
                                <Link href={idLink} className="text-lg hover:text-secondary">{name}</Link>
                            </div>
                        ))}
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link href="https://dashboard-tnx.netlify.app/sign-in?redirect_url=https%3A%2F%2Fdashboard-tnx.netlify.app%2F" className="px-4 py-2 text-lg text-white border border-secondary rounded hover:bg-blueRadial">Login</Link>
                            <Link href="https://dashboard-tnx.netlify.app/sign-in?redirect_url=https%3A%2F%2Fdashboard-tnx.netlify.app%2F" className="px-4 py-2 text-lg text-white border border-transparent rounded bg-blueRadial hover:bg-none hover:border-secondary">Sign Up</Link>
                            
                            
                    
                        </div>
                    </div>
                </div>
            </nav>
        </MotionTransition>
    )
}
