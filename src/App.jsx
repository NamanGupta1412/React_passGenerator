import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {

const [length, setLength] = useState(8);
const [numallowed, setnumallowed] = useState(true);
const [charallowed, setcharallowed] = useState(false);
const [password, setpassword] = useState("");

const abc = useCallback(() => {

  let pass = "";
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

if (numallowed) str+= "0123456789";
if (charallowed) str+= "!@#$%^&*()?/>,<."


for (let i = 1; i <=length; i++) {
  let char = Math.floor(Math.random()*str.length+1)
  pass += str.charAt(char)
}
setpassword(pass)
} ,[length, numallowed, charallowed, setpassword])


useEffect(abc, [length, numallowed, charallowed, setpassword])




  return (
<>
<div className='text-green-500 flex items-center justify-center text-[50px]'>Password genrator</div>
<div className='flex items-center justify-center'>
  <input type="text" 
    value={password}
    className='w-[200px] bg-slate-600 text-red-700 px-1 py-1'
    placeholder='password'
    readOnly
  />
  <button className='bg-slate-400'>
    Copy
  </button>
  <input type="range" 
    value={length}
    min={6}
    max={100}
    onChange={(e)=>{setLength(e.target.value)}}
  />
  <label>
    Length: {length}
  </label>
  <input type="checkbox"
    defaultChecked={numallowed}
    id='num'
    onChange={()=>
    setnumallowed((prev) => !prev)}
  />
  <label htmlFor="num">Number</label>
  <input type="checkbox"
    defaultChecked={charallowed}
    id='char'
    onChange={()=>
    setcharallowed((prev) => !prev)}
  />
  <label htmlFor="char">Charachter</label>
</div>
</>
  )
}

export default App
