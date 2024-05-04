import React, { useState } from 'react'
import { tagList } from '../utils/tag-list'
import FilterTag from './FilterTag'
import RectangleBtn from './common/RectangleBtn'
import DownIcon from "../assets/arrow_drop_down-24px.svg"
import AddGroupIcon from "../assets/group_add-24px.png"
import { useAuth } from '../context/auth-context'
import exitGroupIcon from "../assets/exit_tgroup-24px.png"

const FilterGroup = () => {
    const [activeFilterTab, setActiveFilterTab] = useState("All Posts (32)");
    const {joinToggle} = useAuth();
  return (
    <>
    <div className='border-bottom d-none d-md-flex justify-content-between align-items-center container-fluid p-0' style={{ margin: "2rem 10rem", width: "auto"}}>
       <div className='d-flex gap-3 '>
       {
            tagList.map((tagName) => <FilterTag name={tagName} activeFilterTab={activeFilterTab} setActiveFilterTab={setActiveFilterTab} />)
        }
       </div>

       <div className='d-flex gap-3'>
        <RectangleBtn bgColor="#EDEEF0" textColor="black" label="Write a Post" rightIcon={DownIcon} />
        {
          joinToggle ?  <RectangleBtn bgColor="white" textColor="#6A6A6B" label="Leave Group" leftIcon={exitGroupIcon} borderColor="#6A6A6B" /> :  <RectangleBtn bgColor="#2F6CE5" textColor="white" label="Join Group" leftIcon={AddGroupIcon} />
        }
       
       </div>
    </div>


    <div className='d-flex d-md-none py-3 px-4 justify-content-between align-items-center'>
        <h4 className='fw-bold' style={{fontSize: "4vw"}}>Posts (368)</h4>


        <div className="dropdown">
  <button className="btn dropdown-toggle px-3"  style={{fontSize: "3.5vw", backgroundColor: "#F1F3F5", color: 'black'}} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Filter: All
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
   {
    tagList.map((tagName) => <FilterTag name={tagName} />)
   }
  </ul>
</div>
    </div>
    </>
  )
}

export default FilterGroup