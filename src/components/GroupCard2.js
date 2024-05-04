import React from 'react'
import ShareBtn from './common/ShareBtn';

const GroupCard2 = ({data}) => {
    const {
        img,
        tag,
        title,
        left_tag_icon,
        left_tag,
        location_tag,
        location,
        link,
        link_color,
        author_profile_img,
        author_name,
        author_views,
      } = data;
    
      return (
        <div className="container-fluid p-0 shadow bg-white py-3 rounded border-md">
         {img && <img
            src={img}
            className="img-fluid"
            alt={img}
            style={{ width: "100%", height: "30vh" }}
          />}
    
          <div className="px-3 py-2">
            <p className="pt-2 mb-2 text-xs">{tag}</p>
            <div
              className="d-flex justify-content-between align-items-start"
              style={{ gap: "8px" }}
            >
              <div className="fw-bold text-md">{title}</div>
              <div className="fw-bold" style={{ fontSize: "20px", lineHeight: "30%" }}>
                ...
              </div>
            </div>

            <div className='my-3'>
                <div className='d-flex mb-2' style={{gap: "26px"}}>
                    <div className='d-flex gap-2'>
                        <img src={left_tag_icon} alt={left_tag} />
                        <small>{left_tag}</small>
                    </div>

                    <div className='d-flex gap-1'>
                        <img src={location_tag} alt={location} />
                        <small>{location}</small>
                    </div>
                </div>

                <button className='my-2 fw-bold w-100 bg-transparent p-2 rounded-3 border' style={{color: link_color, fontSize: "12px"}}>{link}</button>
            </div>
    
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-3">
                    <img src={author_profile_img} alt={author_name} className="rounded-circle" />
    
                    <div className="d-flex flex-column">
                        <small className="m-0 fw-bold">{author_name}</small>
                        <small className="m-0">{author_views} views</small>
                    </div>
                </div>
    
                <ShareBtn />
            </div>
          </div>
         </div>
      );
}

export default GroupCard2