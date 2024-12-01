import React from 'react'

function Navbar() {
  return (
    <div className='px-10 py-5 w-10px h-10px bg-black'>
        <div className='flex flex-row justify-end gap-10'>
            {["Home","About US","Features","Contact US"].map((item,index) => (
                <div className="text-white text-pretty text-xl gap-1 uppercase font-light" key={index}>
                    {item}
                </div>))}
        </div>
    </div>
  )
}

export default Navbar