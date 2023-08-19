import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from "yup";

import Input from "./Input";
import InputDate from "./InputDate";
import Button from "./Button";
import Select from "./Select";

import "../styles/prescoringForm.scss";


const validationSchema = Yup.object().shape({
    lastName: Yup.string().matches(/^[A-ZА-ЯЁ]+$/i, "Only letters").trim().required("Enter your last name"),
    firstName: Yup.string().matches(/^[A-ZА-ЯЁ]+$/i, "Only letters").trim().required("Enter your first name"),
    patronymic: Yup.string().matches(/^[A-ZА-ЯЁ]+$/i, "Only letters").trim(),
    email: Yup.string().trim().email("Incorrect email address").required("Incorrect email address"),
    date: Yup.string().required("Incorrect date of birth"),
    passportSeries: Yup.string().matches(/^\d+$/, "Only numbers").length(4, "The series must be 4 digits").trim().required("The series must be 4 digits"),
    passportNumber: Yup.string().matches(/^\d+$/, "Only numbers").length(6, "The number must be 6 digits").trim().required("The number must be 6 digits"),
});



const PrescoringForm: React.FC = () => {
    const [range, setRange] = React.useState(15000)

    const color1:string = "#5B35D5";
    const color2:string = "#E2E8F0";

    return (
        <Formik
            initialValues={{ 
                lastName: "",
                firstName: "",
                patronymic: "",
                select: "6 month",
                email: "", 
                date: "",
                passportSeries: "",
                passportNumber: "" 
            }}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={() => {

                console.log("Form is validated! Submitting the form...");
                fetch('http://localhost:8080/application', {
            method: 'POST',
            
        }) 
        .then(res => {
            console.log(res.status)
            
        })
        .catch(err => console.log(err));
            }}
            validationSchema={validationSchema}
            /* validate={(values) => {
                const errors = {
                    lastName: '',
                    firstName: '',
                    email: '',
                    date: '',
                    passportSeries: '',
                    passportNumber: ''
                };
                if (!values.lastName) {
                    errors.lastName = 'Enter your last name';
                }
                if (!values.firstName) {
                    errors.firstName = "Enter your first name";
                }
                if (!values.email) {
                    errors.email = "Incorrect email address"
                }
                if (!values.date) {
                    errors.date = "Incorrect date of birth"
                }
                if (!values.passportSeries) {
                    errors.passportSeries = "The series must be 4 digits"
                }
                if (!values.passportNumber) {
                    errors.passportNumber = "The series must be 6 digits"
                }
                return errors;
            }} */
        >
            {({errors}) => (
                <Form className="form" id="applyForm">
                    <div className="form__header">
                        <div className="form__header-marginRight">
                            <div className="form__info"> 
                                <h2 className="form__title">Customize your card</h2>
                                <p className="form__text">Step 1 of 5</p>
                            </div>
                            <div className="form__range">
                                <label htmlFor="range" className="form__text">Select amount</label>
                                <p>{range.toLocaleString()}</p>
                                
                                <input type="range" name="range" 
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRange(+event.target.value)}
                                    min='15000' max='600000' value={range} 
                                    style={{background: `linear-gradient(to right,  ${color1} 0%, ${color1} ${range/600000*100}%, ${color2} ${range/600000*100}%)`}}
                                />
                                <div >
                                    <p className="form__text">15 000</p>
                                    <p className="form__text">600 000</p>
                                </div>
                            </div>
                        </div>

                        <div className="form__result">
                            <p className="form__text"><span>You have chosen the amount</span></p>
                            <p className="form__text">{range.toLocaleString()} ₽</p>
                            <hr />
                        </div>
                    </div>
                    <h3 className="form_subtitle">Contact Information</h3>
                    <div className="form__inputs">  
                        <Input type='text' name='lastName' label='Your last name'
                            placeholder='For Example Doe' required={true}  errors={errors} 
                        />
                        <Input type='text' name='firstName' label='Your first name'
                            placeholder='For Example Jhon' required={true} errors={errors} 
                        />
                        <Input type='text' name='patronymic' label='Your patronymic'
                            placeholder='For Example Victorovich' required={false} errors={errors} 
                        />

                        <Select name='select' label='Select term' required={true}
                            arr={['6 month', '12 month', '18 month', '24 month']} 
                        />

                        <Input type='email' name='email' label='Your email' 
                            placeholder='test@gmail.com' required={true} errors={errors} 
                        />
                        <InputDate type='date' name='date' label='Your date of birth'
                            placeholder='Select Date and Time' required={true}
                        /> 

                        <Input type='text' name='passportSeries' label='Your passport series'
                            placeholder='0000' required={true} errors={errors} 
                        />
                        <Input type='text' name='passportNumber' label='Your passport number'
                            placeholder='000000' required={true} errors={errors} 
                        /> 
                    </div>    

                    <div className="form__buttons">
                        <Button type="submit" text='Continue' />
                    </div> 
                 </Form>
            )}
        </Formik>        
    )
}

export default PrescoringForm;