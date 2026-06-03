import React from 'react'
import { Button } from '../ui/button'

const About = () => {
  return (
    <section id="about" className="space-y-10 h-screen flex justify-center items-center">
          <div className='flex justify-between items-center max-w-7xl mx-auto'>
          <div className='flex flex-col gap-3'>
            <h2 className="text-3xl font-bold ">About us</h2>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad corporis unde, magnam sint odit mollitia dolores excepturi eveniet a quia ducimus pariatur praesentium soluta temporibus, voluptas veniam quam dolorem.
            Numquam dolorem molestiae quidem amet, quia dicta! Ea excepturi doloremque ducimus iusto quasi animi voluptas debitis consequuntur! Obcaecati rerum itaque provident quis ipsa beatae harum aspernatur quibusdam, vero eius voluptate!
            Magni autem, eveniet alias perferendis est sit! Minus quo voluptatum obcaecati? Saepe cum, eius cumque, vitae quod suscipit totam dolores ratione nemo, temporibus doloribus repudiandae! Laboriosam eum quia corporis magni.
            Molestiae consectetur earum dignissimos autem rem excepturi, facilis maxime qui adipisci dolore sed voluptatum numquam possimus expedita dolorum porro enim nam? Porro magni perspiciatis consequatur architecto molestiae reiciendis officia sequi?
            Quaerat in vero, dolores necessitatibus numquam doloribus, corporis iusto, minus placeat ea voluptatum. Enim eum exercitationem dignissimos suscipit nisi perferendis consectetur, modi sunt velit eaque, unde dolorum ipsam amet vero.</p>
            <Button className='self-start'>Learn more</Button>
          </div>
          <img src="https://pngimg.com/uploads/student/student_PNG62532.png" alt="" height={"500px"} width={"500px"}/>  
          </div>
        </section>
  )
}

export default About