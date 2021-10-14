import React from 'react'
function handleChange(event){
    console.log('Entering password...')

}

function KeyPad (){
    return <input onChange={handleChange} type="password"/>

}

export default KeyPad;