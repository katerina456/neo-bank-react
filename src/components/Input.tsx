import React from "react";
import {Field, ErrorMessage } from 'formik';

import '../styles/input.scss';

interface Props {
    label: string,
    required: boolean,
    type: "text" | "email" | "number",
    placeholder: string,
    name: string,
}

const Input: React.FC<Props> = (props) => {
    return (
        <div className="input">
            <label htmlFor={props.name} className="input__label">
                {props.label} {props.required && <span>*</span>}
            </label>
            <Field
            type={props.type}
            name={props.name}
            className="input__field"
            placeholder={props.placeholder}
            id={props.name}
            required={props.required}
            />
        </div>
    )
}

export default Input;