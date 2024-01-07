import { Inter } from 'next/font/google'
import { Lora } from 'next/font/google'
import { Inconsolata } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header"
import {Providers} from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dictionary',
  description: 'Challenge from frontend mentor  ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
    <body className={`${inter.className} p-5`}>
      <Providers>
        <Header/>
        {children}
      </Providers>
    </body>
  </html>
  )
}
