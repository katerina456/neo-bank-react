import React from "react";

import "../styles/acordeon.scss";

interface Props {
    title: string,
    array: {summary: string, text: string}[],
}

const Acordeon: React.FC<Props> = ({title, array}) => {  
    const [open, setOpen] = React.useState(-1); 

   /*  function onToggl(event: React.SyntheticEvent<HTMLInputElement>, index:number):void {
        
    }; */

    return (
        <div className="acordeon">
            <h2 className="acordeon__title">{title}</h2>
            {
                array.map((item, index) => {
                    return (
                        <details key={item.summary} className="acordeon__details" open={open === index}
                        onToggle={(event: React.SyntheticEvent) => {
                            const target = event.currentTarget as HTMLInputElement;
                            console.log(target)
                           /*  if (target.value) {
                                setOpen(index)
                            }  */
                        }} 
                        
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