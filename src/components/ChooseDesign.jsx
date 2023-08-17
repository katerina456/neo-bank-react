import React from "react";
import Button from "./Button";

import "../styles/chooseDesign.scss";

function ChooseDesign() {
    return (
        <section className="chooseDesign">
            <div className="container">
                <div className="chooseDesign__container">
                    <div >
                        <h1 className="chooseDesign__title">
                            Choose the design you like and apply for card right now
                        </h1>
                        <Button text='Choose the card' />
                    </div>
                    <div className="chooseDesign__item">
                        <div>
                            <img src="images/cardImage1 1.jpg" alt=""/>
                        </div>
                        <div>
                            <img src="images/cardImage2 1.jpg" alt=""/>
                        </div>
                        <div>
                            <img src="images/cardImage3 1.jpg" alt=""/>
                        </div>
                        <div>
                            <img src="images/cardImage4 1.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseDesign;