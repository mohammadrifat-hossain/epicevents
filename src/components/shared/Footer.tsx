import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Salsa } from 'next/font/google'

const salsa = Salsa({ 
    subsets: ['latin'],
    weight: ['400'],
    variable:'--font-salsa'
})

const Footer = () => {
    return (
        <footer className='border-t'>
            <div className='flex-center wrapper flex-between flex flex-col gap-4 p-4 text-center sm:flex-row'>
                <Link href={'/'} className='w-36 flex items-center justify-center gap-2'>
                    <Image src={'https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png'} alt='logo' width={38} height={38}/>
                    <h1 className='text-2xl font-bold'><p className={salsa.className}>EpicEvents<span className='text-orange-500'>.</span></p></h1>
                </Link>
                <p>2024 EpicEvents. All Rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer