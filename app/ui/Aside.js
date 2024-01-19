import Link from 'next/link'

export default function Aside () {
  return (
    <div className='absolute flex flex-col w-40 h-screen bg-cyan-600 gap-2 pt-2'>
      <Link
        href='#'
        id='Gorras'
        className='bg-cyan-800 w-full h-40 flex flex-col gap-2 items-center justify-center '
      >
        <img
          width='64'
          height='64'
          src='https://img.icons8.com/pastel-glyph/64/cap--v2.png'
          alt='cap--v2'
        />
        <h2 className='font-semibold'>Gorras</h2>
      </Link>

      <Link
        href='#'
        id='Gorras'
        className='bg-cyan-800 w-full h-40 flex flex-col gap-2 items-center justify-center '
      >
        <img
          width='64'
          height='64'
          src='https://img.icons8.com/pastel-glyph/64/t-shirt--v3.png'
          alt='t-shirt--v3'
        />
        <h2 className='font-semibold'>Camisetas</h2>
      </Link>
      <Link
        href='#'
        id='Gorras'
        className='bg-cyan-800 w-full h-40 flex flex-col gap-2 items-center justify-center '
      >
        <img
          width='64'
          height='64'
          src='https://img.icons8.com/external-wanicon-lineal-wanicon/64/external-hoodie-autumn-clothes-accesories-wanicon-lineal-wanicon.png'
          alt='external-hoodie-autumn-clothes-accesories-wanicon-lineal-wanicon'
        />
        <h2 className='font-semibold'>Sudaderas</h2>
      </Link>
      <Link
        href='#'
        id='Gorras'
        className='bg-cyan-800 w-full h-40 flex flex-col gap-2 items-center justify-center '
      >
        <img
          width='64'
          height='64'
          src='https://img.icons8.com/pastel-glyph/64/warm-socks--v2.png'
          alt='warm-socks--v2'
        />
        <h2 className='font-semibold'>Calcetines</h2>
      </Link>
    </div>
  )
}
