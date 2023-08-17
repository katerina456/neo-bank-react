import React from "react";

import "../styles/acordeon.scss";

function Acordeon({ title, array }) {  
    const [open, setOpen] = React.useState(); 

    function onToggle(event, index) {
        if (event.target.open) {
            setOpen(index)
        } 
    };

    return (
        <div className="acordeon">
            <h2 className="acordeon__title">{title}</h2>
            {
                array.map((item, index) => {
                    return (
                        <details key={item.summary} className="acordeon__details"
                        onToggle={(event) => onToggle(event, index)} open={open === index}
                        >
                            <summary className="acordeon__summary">{item.summary}</summary>
                            <p className="acordeon__text">{item.text}</p>
                        </details>
                    )
                })
            }
        </div>
    )
}

export default Acordeon;