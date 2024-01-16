import Card from './ui/Card'
import Carrousel from './ui/Carrousel'

export default function Home () {
  return (
    <dev className='flex flex-col sm:justify-center'>
      <Carrousel />
      <Card />
    </dev>
  )
}
