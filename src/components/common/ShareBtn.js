import React from 'react'
import shareIcon from "../../assets/baseline-share-24px.png"
import Image from "../../assets/visible.png"
const ShareBtn = ({path}) => {
  return (
    <div className='d-flex align-items-center gap-2 w-auto p-2 rounded'>
       <p style={{padding:"20px"}}><img src={Image}></img> 1.4k views</p>
        <img src={shareIcon}  style={{backgroundColor: "#F1F3F5",padding:"5px"}} alt="share" />
     
    </div>
  )
}

export default ShareBtn