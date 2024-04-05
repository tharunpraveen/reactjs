import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Button from './components/Statechange/Button'


function App() {
  const [count,setCount]=useState(0)
    const handle=()=>{
        setCount(count+1)
    }
   const authentication=true;


  return (
    <div>
      {authentication?<h1 className='App'> Valid User</h1>:<h1 >not a valid user</h1>}
     <Greeting ></Greeting>
     <h1>{count}</h1>
     <Button count={count} onClick={handle}/>
     <Button count={count} onClick={handle}/>
      </div>
  )
}

export default App
