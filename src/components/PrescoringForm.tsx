import React from "react";
import { Formik, Form } from 'formik';
import Input from "./Input";
import InputDate from "./InputDate";
import Button from "./Button";
import Select from "./Select";

import "../styles/prescoringForm.scss";


const PrescoringForm: React.FC = () => {
    const [range, setRange] = React.useState(15000)

    const color1:string = "#5B35D5";
    const color2:string = "#E2E8F0";

    return (
        <Formik
            initialValues={{ 
                'last-name': "",
                'first-name': "",
                patronymic: "",
                select: "6 month",
                email: "", 
                date: "",
                'pas-series': "",
                'pas-number': "" 
            }}
            onSubmit={() => {
                console.log("Form is validated! Submitting the form...");
            }}
        >
            {() => (
                <Form className="form">
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
                        <Input type='text' name='last-name' label='Your last name'
                            placeholder='For Example Doe' required={true} 
                        />
                        <Input type='text' name='first-name' label='Your first name'
                            placeholder='For Example Jhon' required={true}
                        />
                        <Input type='text' name='patronymic' label='Your patronymic'
                            placeholder='For Example Victorovich' required={false}
                        />

                        <Select name='select' label='Select term' required={true}
                            arr={['6 month', '12 month', '18 month', '24 month']} 
                        />

                        <Input type='email' name='email' label='Your email' 
                            placeholder='test@gmail.com' required={true}
                        />
                        <InputDate type='date' name='date' label='Your date of birth'
                            placeholder='Select Date and Time' required={true}
                        /> 

                        <Input type='text' name='pas-series' label='Your passport series'
                            placeholder='0000' required={true}
                        />
                        <Input type='text' name='pas-number' label='Your passport number'
                            placeholder='000000' required={true}
                        /> 
                    </div>    

                    <div className="form__buttons">
                        <Button type="button" text='Continue' />
                    </div> 
                 </Form>
            )}
        </Formik>        
    )
}

export default PrescoringForm;