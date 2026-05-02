import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'



const Center = (props) => {
  return (
    <div className='py-10 pb-20 px-18 flex gap-10 items-center justify-between  h-[90vh]'>
        <Leftcontent />
        <Rightcontent users={props.users} />
    </div>
  )
}

export default Center
