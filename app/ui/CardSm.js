'use client'
import Link from 'next/link'
import { products } from '../assets/data'

export default function CardSm () {
  return (
    <div className='flex flex-row flex-wrap text-white justify-center sm:justify-start '>
      {products.map(e => {
        return (
          <Link
            href={`/pages/${e.id.toString}`}
            key={e.id}
            className=' w-full rounded-lg bg-slate-700 m-4 justify-center items-center p-4 shadow-2xl hover:shadow-slate-500 flex flex-row gap-4'
          >
            <img src='/powerRanger.jpg' alt='' className='h-24 w-24' />
            <section className='flex flex-col relative w-full h-full gap-4'>
              <h3>{e.productName}</h3>
              <span className='text-3xl'>{e.price} €</span>
              <h4 className='m-0 p-0'>
                {e.tallas[0]}-{e.tallas[e.tallas.length - 1]}
              </h4>
              <button className='relative bottom-0 bg-yellow-500 px-6 p-2 rounded-full'>
                Añadir a la cesta
              </button>
            </section>
          </Link>
        )
      })}
    </div>
  )
}
