import React from 'react'

const MyButton = (prpos) => {
    // console.log(props)
    const {buttonText,bgColor,clickMe}=prpos
const hello=()=>{
    alert('button clicked');
}

  return (
<button style={{backgroundColor:bgColor}}onClick={clickMe}> {buttonText}</button>
  )
}

export default MyButton