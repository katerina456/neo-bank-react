import React from "react";

import "../styles/map.scss";

const BankMap: React.FC = () => {
    return (
        <section className="map">
            <div className="container">
                <h2 className="map__title">You can use our services anywhere in the world</h2>
                <p className="map__text">Withdraw and transfer money online through our application</p>
                <div className="map__foto">
                    <img src="images/map.png" alt=""/>
                </div>
            </div>
        </section>
    )
}

export default BankMap;