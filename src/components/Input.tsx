import React from "react";
import {Field, ErrorMessage } from 'formik';

import '../styles/input.scss';

interface Props {
    label: string,
    required: boolean,
    type: "text" | "email" | "number",
    placeholder: string,
    name: string,
    errors: any,
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
            className={`input__field ${props.errors[props.name] && 'input__field-red' }`}
            placeholder={props.placeholder}
            id={props.name}
            /* required={props.required} */     
            />
            <ErrorMessage
            component="div"
            name={props.name}
            className="input_error"
            />
        </div>
    )
}

export default Input;