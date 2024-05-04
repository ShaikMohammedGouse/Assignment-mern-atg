import React from 'react'
import { groupData } from '../utils/group-data'
import GroupCard1 from './GroupCard1';
import GroupCard2 from './GroupCard2';

const Groups = () => {
  return (
    <>
    <div className='d-none d-md-flex flex-column container-fluid p-0 gap-3' style={{width: "50vw"}}  >
    {
    groupData.map((data) => {
        const {id, tag} = data;
        return(
            <div key={id} className='container-fluid p-0'>
            {
                tag?.includes("Article") || tag.includes("Education") ? <GroupCard1 data={data} /> : <GroupCard2 data={data} />
            }
            </div>
        )
    })
}
    </div>

<div className='d-flex d-md-none flex-column container-fluid p-0 gap-3'>
{
    groupData.map((data) => {
        const {id, tag} = data;
        return(
            <div key={id} className='container-fluid p-0'>
            {
                tag?.includes("Article") || tag.includes("Education") ? <GroupCard1 data={data} /> : <GroupCard2 data={data} />
            }
            </div>
        )
    })
}
</div>
</>
  )
}

export default Groups