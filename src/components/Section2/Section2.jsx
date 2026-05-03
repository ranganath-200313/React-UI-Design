import { useState } from 'react'
import { X } from 'lucide-react'

const Section2 = () => {

  //hooks
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [task, setTask] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, detail });
    setTask(copyTask);


    console.log(title, detail);

    setTitle('')
    setDetail('')
  }

const deleteTask=(idx)=>{
  const copyTask=[...task];
  copyTask.splice(idx,1);
  setTask(copyTask);
}



  return (
    <div className='h-screen bg-black text-white flex px-10 py-10'>

      <form onSubmit={submitHandler}
        className='gap-5 flex flex-col w-1/2 p-10'>

        <h1 className='text-4xl font-bold mb-2'>Add Notes</h1>

        <input className='px-5 w-full font-medium py-2 border-2 outline-none rounded' type="text" placeholder='Enter Title' value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} />

        <textarea className='text-white resize-none px-5 font-medium w-full h-32 py-2  border-2 outline-none rounded' placeholder='Enter Description' value={detail} onChange={(e) => {
          setDetail(e.target.value)

        }}></textarea>


        <button className='bg-white active:scale-95 px-5 font-medium outline-none rounded text-black font-bold h-14 w-full'>ADD Note</button>



      </form>

      <div className='p-10 w-1/2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className=' flex flex-wrap gap-5 h-full overflow-auto mt-6'>
          {task.map(function (elem, idx) {

            return <div key={idx} className='relative h-52 w-40 rounded-xl py-6 px-4 text-black bg-[url("https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")] bg-cover bg-no-repeat' >

              <h2 onClick={()=>{
                deleteTask(idx)
              }} className='absolute top-5 right-0 '><X /></h2>

              <h3 className='text-lg font-bold leading-tight'>{elem.title}</h3>
              <p className='leading-tight text-xs mt-4 font-medium text-gray-500'>{elem.detail}</p>
            </div>
          })}


        </div>

      </div>

    </div>
  )
}

export default Section2
