import { Montserrat } from 'next/font/google'
import './globals.css'
import Layout from './LayoutComp'
import Aside from './ui/Aside'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'CustomIce',
  description: 'Esto no se donde sale'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={` relative bg-slate-500 ${montserrat.className}`}>
        <Layout />
        <Aside />
        <div className=' ml-40'>{children}</div>
      </body>
    </html>
  )
}
