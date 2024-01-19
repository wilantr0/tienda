'use client'
import CardSm from './ui/CardSm'
import CardLg from './ui/CardLg'
import Carrousel from './ui/Carrousel'
import useWindowSize from './assets/useWindowSize'

export default function Home () {
  const [width, height] = useWindowSize()

  return (
    <dev className='absolute flex flex-col justify-center'>
      <Carrousel />
      {width <= 680 ? <CardSm /> : <CardLg />}
    </dev>
  )
}
