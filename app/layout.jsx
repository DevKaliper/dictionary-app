

import './globals.css'

import {Providers} from "./providers";



export const metadata = {
  title: 'Dictionary',
  description: 'Challenge from frontend mentor  ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
    <body className={`p-5 lg:px-[352px] lg:py-5`}>
      <Providers>
     
        {children}
      </Providers>
    </body>
  </html>
  )
}
