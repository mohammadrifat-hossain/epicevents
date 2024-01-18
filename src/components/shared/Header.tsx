import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Salsa } from 'next/font/google'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const salsa = Salsa({ 
    subsets: ['latin'],
    weight: ['400'],
    variable:'--font-salsa'
})

const Header = () => {
    
    return (
        <header className='w-full border-b'>
            <div className='wrapper flex items-center justify-between'>
                <Link href={'/'} className='w-36 flex items-center justify-center gap-2'>
                    <Image src={'https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png'} alt='logo' width={38} height={38}/>
                    <h1 className='text-2xl font-bold'><p className={salsa.className}>EpicEvents<span className='text-orange-500'>.</span></p></h1>
                </Link>

                <SignedIn>
                    <nav className='md:flex-between hidden w-full max-w-xs'>
                        <NavItems/>
                    </nav>
                </SignedIn>

                <div className='flex w-32 justify-end gap-3'>
                    <SignedIn>
                        <UserButton afterSignOutUrl='/'/>
                        <MobileNav/>
                    </SignedIn>
                    <SignedOut>
                        <Button asChild className='rounded-full' size={'lg'}>
                            <Link href={'/sign-in'}>
                                Login
                            </Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}

export default Header