import React from "react";
import {Field, ErrorMessage } from 'formik';

import '../styles/input.scss';

interface Props {
    label: string,
    required: boolean,
    placeholder: string,
    name: string,
    type: "date"
}

const InputDate: React.FC<Props> = (props) => {
    return (
        <div className="input">
            <label htmlFor={props.name} className="input__label">
                {props.label} {props.required && <span>*</span>}
            </label>
            <Field
            name={props.name}
            className="input__field"
            placeholder={props.placeholder}
            id={props.name}
           /*  required={props.required} */
            onFocus={(e: React.FocusEvent<HTMLInputElement>) => (e.target.type = "date")}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => (e.target.type = "text")}
            />
        </div>
    )
}

export default InputDate;