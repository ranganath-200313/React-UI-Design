import React from 'react'

const Rightcard = (props) => {
    return (
        <div className='h-full shrink-0 overflow-hidden w-80  relative rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            <div className="h-full absolute top-0 left-0 w-full  p-6 flex flex-col justify-between">
                <h2 className='bg-white justify-center items-center text-xl font-semibold flex h-10 w-10 rounded-full'>{props.id + 1}</h2>
                <div >
                    <p className="text-lg leading-normal text-white mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis dolorum repellat expedita cum provident.</p>
                    <div className="">
                        <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                        <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Rightcard
