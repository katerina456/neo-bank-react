import React from "react";

import "../styles/tabsMenu.scss";

function TabMenu(props) {
    let menuArray = ['About card', 
                    'Rates and conditions', 
                    'Cashback', 
                    'FAQ'
    ];

    return (
        <div className="tabsMenu">
            {
                menuArray.map((item, index) => {
                    return (
                        <div key={item} onClick={() => props.handleclick(index)}
                            className={`tabsMenu__item ${props.activeTab === index? 'tabsMenu__item-active' : ''}`} 
                        >
                            <p className="tabsMenu__text">{item}</p>
                        </div>
                    )
                })
            }
            <hr />
        </div>
    )
}

export default TabMenu;