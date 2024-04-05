import React from 'react'
// import "./Greeting.css"
import style from "./Greeting.module.css"
 console.log(style);
function Greeting() {
  return (
    <>

    <h2>Greeting</h2>
    <h2>earthlings</h2>
    <h3 className={style.App} >hello</h3>
    </>
  )
}

export default Greeting