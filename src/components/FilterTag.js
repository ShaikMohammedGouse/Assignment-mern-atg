import React from 'react'

const FilterTag = ({name, activeFilterTab, setActiveFilterTab}) => {
  return (
   <>
    <div className='fw-light p-0 pb-4 d-none d-md-block' style={{borderBottom:  name === activeFilterTab && "1px solid black", cursor: "pointer", color: name === activeFilterTab ? "black" : "gray", fontSize: "1.2vw" }} onClick={() => setActiveFilterTab(name)} >
        {name}
    </div>

    <div className='d-block d-md-none'>
    <li className='dropdown-item'>{name}</li>
    </div>
   </>
  )
}

export default FilterTag