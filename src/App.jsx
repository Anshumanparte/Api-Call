import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'

import './App.css'

function App() {

  const [alldata, setAlldata] = useState([]);

  const clickHandler=async ()=>{
    
    const res =await axios.get("https://picsum.photos/v2/list")
      setAlldata(res.data);
      console.log(res.data);
      
      
      
      
  }


  return (
    <>
      <div className='p-10 bg-zinc-800'>
        <button 
        onClick={clickHandler}
         className='text-2xl border-black border-2 bg-black text-white px-8 py-3 rounded-2xl'>Get Data</button>
        <div className='pt-10 '>
            {alldata.map((elem)=>{
              return (
              <div key={elem.id} className=' mb-5 p-5 rounded-3xl flex justify-between bg-white'>
                <img className='w-96 rounded-2xl mb-2' src={elem.download_url} alt="image" />
                <h1 className='font-semibold text-4xl'>{elem.author}</h1>

              </div>
              
              
              )
              
            })}
        </div>
      </div>


    </>
  )
}

export default App
