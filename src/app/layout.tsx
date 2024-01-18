import type { Metadata } from 'next'
import { ClerkProvider} from '@clerk/nextjs'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable:'--font-poppins'
})

export const metadata: Metadata = {
  title: 'EpicEvents',
  description: 'EpicEvents is a platform for event managment.',
  icons:{
    icon:'https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png'
  }
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout