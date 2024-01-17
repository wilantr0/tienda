'use client'
import Link from 'next/link'
import { products } from '../assets/data'

export default function Card () {
  return (
    <div className='flex flex-row flex-wrap text-white justify-center sm:justify-start '>
      {products.map(e => {
        return (
          <Link
            href={`/pages/${e.id.toString}`}
            key={e.id}
            className=' w-full rounded-lg bg-slate-700 m-4 p-4 shadow-2xl hover:shadow-slate-500 flex flex-row gap-2'
          >
            <img src='/powerRanger.jpg' alt='' className='h-12 w-12' />
            <section>
              <h3>{e.productName}</h3>
              <span className='text-xs'>{e.price} €</span>
            </section>
          </Link>
        )
      })}
    </div>
  )
}
