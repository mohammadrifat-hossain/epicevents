import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { Salsa } from 'next/font/google'
import { Separator } from "@/components/ui/separator"
import NavItems from './NavItems'



const salsa = Salsa({ 
    subsets: ['latin'],
    weight: ['400'],
    variable:'--font-salsa'
})

const MobileNav = () => {
    return (
        <nav className='md:hidden'>
            <Sheet>
            <SheetTrigger className='align-middle'>
                <Image
                    src={'/assets/icons/menu.svg'}
                    alt='menu'
                    width={24}
                    height={24}
                    className='cursor-pointer'
                />
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
                <Link href={'/'} className='w-36 flex items-center justify-center gap-2'>
                    <Image src={'https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png'} alt='logo' width={38} height={38}/>
                    <h1 className='text-2xl font-bold'><p className={salsa.className}>EpicEvents<span className='text-orange-500'>.</span></p></h1>
                </Link>
                <Separator className='border border-gray-50' />
                <NavItems />

            </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav