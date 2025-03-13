import { useState } from 'react'
import './App.css'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbers,setNumbers]=useState(false)
  const [caracter,setCaracter]=useState(false)
  const [Password,setPassword]=useState("")

  //ref hook
  const passwordRef=useRef(null)


  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqazxswedcvfrtgbnhyujmkiolp"
    if (numbers) str+="0123456789";
    if (caracter) str+="!@#$%^&*()~{}[]/?><.,"

    for (let i=0 ; i<length ; i++){
      let char=Math.floor(Math.random() * str.length +1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numbers,caracter,setPassword])

  const copypasswordToClip =useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
    // alert("Copyed")
  },[Password])

  useEffect(()=>{passwordGenerator()},[length,numbers,caracter,passwordGenerator])
  return (
    <>
       <div className= ' flex-col shadow-lg bg-gray-700 rounded-2xl h-auto p-10 m-10 w-[550px]'>

        <h1 className='text-3xl font-bold text-center p-3 text-white'>Password Generator</h1>

        <input 
        type="text" 
        value={Password} 
        readOnly 
        ref={passwordRef}
        className='w-full ontline-none py-2 px-3 rounded-lg'
        />

        <button className='w-full ontline-none py-2 px-3 bg-black mt-3 text-white rounded-lg' onClick={passwordGenerator}>Re-Genrate</button>

        <button className='w-full ontline-none py-2 px-3 bg-black my-3 text-white rounded-lg' onClick={copypasswordToClip}>Copy</button>

        <div className='flex gap-x-2 mt-3 '>
          <input type="range" min={6} max={30} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
          <label className='text-white font-bold mr-3'> Length : {length}</label>

          <input type="checkbox" defaultChecked={setNumbers} onChange={(e)=>{setNumbers((prev)=>!prev)}} id='numberInput' className='w-5 h-5'/>
          <label className='text-white font-bold' htmlFor='numberInput'>Numbers</label>

          <input type="checkbox" defaultChecked={setCaracter} onChange={(e)=>{setCaracter((prev)=>!prev)}} id='charInput' className='w-5 h-5'/>
          <label className='text-white font-bold' htmlFor='charInput'>Character</label>
        </div>
       </div>
    </>
  )
}

export default App
