import React from 'react'
import Modal from '../utilities/Modal'

const ServiceCard = ({img,title,description}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-2 hover:shadow-lg transition-shadow flex flex-col">
        <div className='mb-2'>
            <img className='h-[250px] w-full object-cover' src={img} alt={`${title} img`} />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 text-center mb-1">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
        {/* <div className='mt-auto'>
          <Modal/> 
        </div> */}
    </div>
  )
}

export default ServiceCard