import React from 'react'
import Header from './Header'
import Center from './Center'


const Section1 = (props) => {
  return (
    <div className='h-screen w-full  '>
     <Header />
     <Center users={props.users} />
    </div>
  )
}

export default Section1
