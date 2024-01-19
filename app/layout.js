import { Montserrat } from 'next/font/google'
import './globals.css'
import Layout from './LayoutComp'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'CustomIce',
  description: 'Esto no se donde sale'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={`bg-slate-500 ${montserrat.className}`}>
        <Layout />
        {children}
      </body>
    </html>
  )
}
