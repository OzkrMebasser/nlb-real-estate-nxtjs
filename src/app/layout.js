import './globals.css'
import { Inter } from 'next/font/google'
import ContactButtons from "./components/ContactButtons/ContactButtons"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NLB Real Estate',
  description: 'Your money in good hands',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css" rel="stylesheet"/>  
    
    </head>
      <body className={inter.className}>{children}
      
      <ContactButtons/>
      </body>
      
    </html>
  )
}
