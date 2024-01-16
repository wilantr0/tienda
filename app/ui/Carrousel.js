'use client'
import { LiaArrowLeftSolid, LiaArrowRightSolid } from 'react-icons/lia'
import { data } from '../assets/data'
import { useEffect, useRef, useState } from 'react'

export default function Carrousel () {
  const listRef = useRef()

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const listNode = listRef.current
    const imgNode = listNode.querySelectorAll('li > img')[currentIndex]

    imgNode ? imgNode.scrollIntoView({ behavior: 'smooth' }) : ''
  }, [currentIndex])

  function goToSlide (index) {
    setCurrentIndex(index)
  }

  const scrollToImage = direction => {
    if (direction == 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0
        return isFirstSlide ? (curr = data.length - 1) : curr - 1
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1)
      } else {
        setCurrentIndex(0)
      }
    }
  }

  return (
    <div className=' select-none relative w-full flex flex-col justify-center items-center mt-5'>
      <div className=' relative flex flex-row items-center overflow-hidden justify-center w-full gap-2'>
        <a
          onClick={() => scrollToImage('prev')}
          className='absolute w-12 h-12 rounded-full bg-white flex items-center justify-center left-8 z-10'
        >
          <LiaArrowLeftSolid />
        </a>
        <ul
          ref={listRef}
          className=' gap-2 relative h-full w-4/5 flex flex-row items-center overflow-hidden '
        >
          {data.map(item => {
            return (
              <li
                className='flex items-center justify-center min-w-full'
                key={item.id}
              >
                <img
                  className=' w-full rounded-2xl'
                  src={item.imgSrc}
                  alt={`Banner${item.id}`}
                />
              </li>
            )
          })}
        </ul>
        <a
          onClick={() => scrollToImage('next')}
          className='absolute w-12 h-12 rounded-full bg-white flex items-center justify-center right-2'
        >
          <LiaArrowRightSolid />
        </a>
      </div>
      <div className='flex absolute bottom-2'>
        {data.map((_, idx) => {
          return (
            <div
              onClick={() => goToSlide(idx)}
              className={` text-xs cursor-pointer ${
                idx === currentIndex ? ' text-stone-400' : 'text-white'
              }`}
              key={idx}
            >
              &#9673;
            </div>
          )
        })}
      </div>
    </div>
  )
}
