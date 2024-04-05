import React, { useState } from 'react'

const  Button=(props)=> {
  const{count,onClick} = props;
    
   
 
  return (
    <>
     
    <button onClick={onClick}>click  </button> </>
  
  )
}

export default Button