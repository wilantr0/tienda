'use client'
import Image from 'next/image'
import { useState } from 'react'
import Desplegable from './ui/Desplegable'
import { Montserrat } from 'next/font/google'
import { LiaShoppingCartSolid } from 'react-icons/lia'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Layout () {
  const [show, setShow] = useState(false)
  return (
    <>
      <header>
        <nav className=' flex flex-row justify-between items-center bg-cyan-600'>
          <section>
            <a href='/'>
              <Image
                src={'/logo-nbg.png'}
                alt='logo'
                width={200}
                height={100}
                className=' p-0 mx-5'
              />
            </a>
          </section>
          <section className=' flex flex-row justify-center items-center gap-x-4 mx-4'>
            <a
              className=' h-[100px] flex justify-center items-center px-5 hover:bg-white hover:text-blue-500'
              href='/'
            >
              Home
            </a>
            <a
              className=' h-[100px] flex justify-center items-center px-5 hover:bg-white hover:text-blue-500'
              href='/contact'
            >
              Contact
            </a>
            <a
              className=' h-[100px] text-3xl flex justify-center items-center px-5 hover:bg-white hover:text-blue-500'
              href='/cart'
            >
              <LiaShoppingCartSolid />
            </a>
            <a
              className=' '
              onClick={() => {
                setShow(!show)
              }}
              href='#'
            >
              <Image
                src={'/logo-sq.png'}
                alt='logo'
                width={34}
                height={34}
                className='rounded-full outline-0 outline outline-slate-700 hover:outline-4'
              />
            </a>
          </section>
        </nav>
        {show ? <Desplegable /> : ''}
      </header>
      <h1 className=' text-white'>{show}</h1>
    </>
  )
}
