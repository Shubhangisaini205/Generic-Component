import React, { forwardRef } from 'react'

const Pin = forwardRef(({ maxChar, forOnChange,forBackSpace }, ref) => {
  const handleKeyUp=(e)=>{
    if(e.keyCode==8){
        //handle backspace keyStroke
        forBackSpace(e)
    }else{
        //default behaviour
        forOnChange(e)
        
    }
  }
    return <input className='pintab'
        maxLength={maxChar}
        ref={ref}
        // onChange={forOnChange}
        onKeyUp={handleKeyUp}
         />
})

export default Pin