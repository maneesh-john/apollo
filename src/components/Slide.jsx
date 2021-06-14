import React from "react";

export default function Slide({ slide, current, index }){

  const isCurrent = (current === index);

  if(!isCurrent) return null;

  return(
    <img
      src={slide.fileURL}
      className={`slide ${isCurrent? "active": "inactive"}`}
      style={{backgroundSize: "cover"}}
    />
  );
};