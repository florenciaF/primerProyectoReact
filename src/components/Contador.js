import React, { useState } from 'react'

export const Contador = () => {
    const [numero, setNumero] = useState(1)

    const aumentar = () => {
        console.log("click en aumentar")
        setNumero( numero + 1)
    }

    return (
    <>
        <h1>Contador { numero }</h1>
        {/* { numero } */}
        <button onClick={aumentar}> Aumentar valor </button>
    
    </>
  )
}

