'use client'

import React,{useState} from 'react'

const ButtonComp = ({price}) => {
    const [value, setValue] = useState()

    const handleVal = ()=> {
        setValue(price)
    }
  return (
    <div>
        <button onClick={()=>alert(price)}>cheak price</button>
        <button onClick={handleVal}>click</button>
        <h1>{value}</h1>
    </div>
  )
}

export default ButtonComp