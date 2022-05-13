import React from "react";

export default function Slide(props){
  const className = props.currentImg === props.id ? "slide-content" : "slide-content disabled";
    return (
        <div className="slide">
          <div className={className}>
            <img className="slide-img" src={props.url} alt={props.alt} />
          </div>
        </div>
    )
}