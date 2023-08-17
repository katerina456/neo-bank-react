import React from "react";


function TooltipItem(props) {
    return (
        <div className="tooltip__item">
            <p className="info_subtitle">{props.title}</p>
            <p className="tooltip__text-dark">{props.text}</p>
        </div>
    )
}

export default TooltipItem;