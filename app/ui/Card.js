import { products } from '../assets/data'

export default function Card () {
  return (
    <div className='flex flex-row flex-wrap text-white '>
      {products.map(e => {
        return (
          <div
            key={e.id}
            className=' min-h-64 w-48 rounded-lg bg-slate-700 m-4 p-4 gap-0 shadow-2xl hover:shadow-slate-500'
          >
            <img src={e.img} className='mb-2' alt={e.description} />
            <h3>{e.productName}</h3>
            <span className='text-xs'>{e.price} €</span>
          </div>
        )
      })}
    </div>
  )
}
