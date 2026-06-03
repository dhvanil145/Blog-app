import React from 'react'
import { Button } from '../ui/button'

const Services = () => {
  return (
    <section id="services" className="mt-8 h-screen flex flex-col justify-center gap-4">
          <h2 className="text-3xl font-bold text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-3 ">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Ai/ml</h3>
              <p className="text-gray-400">We are providing the best services we have so many ai modals with positive feedback. We are providing the best services we have so many ai modals with positive feedback.We are providing the best services we have so many ai modals with positive feedback.</p>
              <Button>Learn more</Button>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Ai/ml</h3>
              <p className="text-gray-400">We are providing the best services we have so many ai modals with positive feedback. We are providing the best services we have so many ai modals with positive feedback.We are providing the best services we have so many ai modals with positive feedback.</p>
              <Button>Learn more</Button>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Ai/ml</h3>
              <p className="text-gray-400">We are providing the best services we have so many ai modals with positive feedback. We are providing the best services we have so many ai modals with positive feedback.We are providing the best services we have so many ai modals with positive feedback.</p>
              <Button>Learn more</Button>
            </div>
          </div>
        </section>
  )
}

export default Services