import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <section id="hero" className="pt-8 max-w-7xl mx-auto flex justify-between items-center">
          <div className='flex flex-col gap-3'>
            <h1 className='text-5xl font-bold'>Master AI for coading</h1>
            <p className='text-gray-400'>AI Makes Programming Effortless Skip memorizing code and let AI help you become a programmer today AI Makes Programming Effortless Skip memorizing code and let AI help you become a programmer today AI Makes Programming Effortless Skip memorizing code and let AI help you become a programmer today</p>
            <Button className='self-start'>Join now</Button>
          </div>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/057/228/817/small/a-smiling-black-man-in-an-orange-hoodie-holding-books-free-png.png" alt="" />
        </section>
  )
}

export default Hero