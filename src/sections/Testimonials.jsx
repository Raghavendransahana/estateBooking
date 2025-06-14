import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div
      className="flex flex-col items-center justify-center 
    container mx-auto sm:p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <div className="flex text-center items-center mt-3">
        <h1 className="text-3xl">
         TESTIMONIALS 
          <span className="text-2xl block underline-offset-4 decoration-1 under font-light ">
            THAT MATTER
          </span>
          <p className="text-sm">
           Real stories that found home 
          </p>
        </h1>
      </div>
      
    <div className='flex flex-wrap justify-center gap-8'>
       {testimonialsData.map((testimonials,index) =>(
        

        <div key={index} className='h-96 w-70 p-5 shadow-xl m-3 bg-gray-50 flex flex-col items-center justify-center'>
            <img src={testimonials.image} alt="" />
            <h2 className='m-3 text-2xl'>{testimonials.name}</h2>
            <p>{testimonials.title}</p>
            <div className='flex justify-center gap-1 text-red-500 m-4'>
          {Array.from({length : testimonials.rating},(item,index)=>(
            
            <img  key={index} src={assets.star_icon}/>
          
          ))}

            </div>
           <p clas>
             {testimonials.text}
           </p>
            </div>
       ))}
    </div>


    
      </div>
  )
}

export default Testimonials