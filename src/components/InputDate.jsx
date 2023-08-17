import React from "react";
import {Field, ErrorMessage } from 'formik';

import '../styles/input.scss';

function InputDate(props) {

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
            required={props.required}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            />
        </div>
    )
}

export default InputDate;