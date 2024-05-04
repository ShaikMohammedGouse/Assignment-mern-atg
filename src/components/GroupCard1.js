import React from "react";
import ShareBtn from "./common/ShareBtn";

const GroupCard1 = ({ data }) => {
  const {
    img,
    tag,
    title,
    description,
    author_profile_img,
    author_name,
    author_views,
  } = data;

  return (
    <div className="container-fluid p-0 shadow bg-white py-3 rounded border-md">
      <img
        src={img}
        className="img-fluid"
        alt={img}
        style={{ width: "100%", height: "30vh" }}
      />

      <div className="px-3 py-2">
        <p className="pt-2 mb-2 text-xs ">{tag}</p>
        <div
          className="d-flex justify-content-between align-items-start"
          style={{ gap: "8px" }}
        >
          <div className="fw-bold text-md">{title}</div>
          <div className="fw-bold" style={{ fontSize: "20px", lineHeight: "10px" }}>
            ...
          </div>
        </div>
        <p className="fw-light" style={{ fontSize: "14px" }}>
          {description}
        </p>

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
};

export default GroupCard1;
