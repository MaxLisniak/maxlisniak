import React from "react";

export default function Arrow(props){

    return (
        <div id={props.id} onClick={props.handleClick} className="arrow"></div>
    )
}