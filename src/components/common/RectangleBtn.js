import React from 'react'

const RectangleBtn = ({bgColor, textColor, label, leftIcon, rightIcon, borderColor}) => {
  return (
    <div className='d-flex justify-content-center align-items-center gap-2 w-auto p-2 px-3 rounded mb-2 ' style={{backgroundColor: bgColor, color: textColor, border: "1px solid" + borderColor}} >
       {leftIcon && <img src={leftIcon} alt={leftIcon} /> }
       <p className='m-0' style={{fontSize: "1vw"}}>{label}</p> 
       {rightIcon && <img src={rightIcon} alt={rightIcon} /> }
        
        </div>
  )
}

export default RectangleBtn