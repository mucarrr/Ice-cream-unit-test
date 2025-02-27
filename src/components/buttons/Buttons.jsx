import React, { useState } from 'react'
import Modal from '../modal/Modal'

const Buttons = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div className="sticky top-4 left-1 z-[999] mt-10 -mb-10 w-fit">
        <button onClick={()=>setIsOpen(true)} className="list-btn">
          Cart
          <img src="/cart.png" alt="" className="w-12 absolute right-1 bottom-0" />
        </button>
      </div>
      <Modal isOpen={isOpen} close={()=>setIsOpen(false)}/>
      <div className="flex justify-end">
      <button className="list-btn">
        Trends
        <img src="/fire.png" alt="" className="w-12 absolute right-1 bottom-0" />
      </button>
    </div>
    </div>
  )
}

export default Buttons