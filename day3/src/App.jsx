import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton';

function App() {
  //  let content;
  //  let Authentication =true;
   
    const hello=()=>
    {
      console.log("welcome");
    }
  const cart=()=>{
    console.log("your cart");
  }
  const pay=()=>{
    alert("hello")
  }
return (<div>
  
  <MyButton buttonText="hello" bgColor="yellow" clickMe={hello} />
   <MyButton buttonText="cart" bgColor="pale" clickMe={cart}/>
   <MyButton buttonText="pay" bgColor="red" clickMe={pay}/>
</div>
  )
}

export default App
