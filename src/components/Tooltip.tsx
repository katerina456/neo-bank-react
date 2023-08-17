import React from "react";
import Button from "./Button";
import TooltipItem from "./TooltipItem";

import "../styles/tooltip.scss";


const Tooltip: React.FC = () => {
    return (
        <section className="tooltip">
            <div className="container">
                <div className="tooltip__contailer">
                    <div>
                        <h2 className="tooltip__title">Platinum digital credit card</h2>
                        <p className="tooltip__text">
                            Our best credit card. 
                            Suitable for everyday spending and shopping.
                            Cash withdrawals and transfers without commission and interest.
                        </p>
                        <div className="tooltip_info">
                            <TooltipItem title='Up to 160 days' text='No percent' />
                            <TooltipItem title='Up to 600 000 ₽' text='Credit limit' />
                            <TooltipItem title='0 ₽' text='Card service is free' />
                        </div>
                        <Button text='Apply for card' />
                    </div>
                    <div className="tooltip__foto">
                        <img src="images/credit-card.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tooltip;