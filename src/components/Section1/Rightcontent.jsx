import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div id='right'className='h-full overflow-x-auto rounded-4xl flex flex-nowrap gap-10 w-2/3 p-6 '>


      {props.users.map(function(elem,index){
        return <Rightcard key={index} id={index} img={elem.img} tag={elem.tag}/>
      })}


    </div>
  )
}

export default Rightcontent
