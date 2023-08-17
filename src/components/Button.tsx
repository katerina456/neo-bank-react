import React from "react";
import '../styles/button.scss';

interface Props {
    type: "button" | "submit",
    text: string,
  }
  

function Button({ type, text }: Props) {
    return (
        <button className="button" type={type}>
            <span>{text}</span>
        </button>
    )
}

export default Button;