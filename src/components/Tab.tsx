import React from "react";
import { useState } from "react";
import TabMenu from "./TabMenu";
import TabAbout from "./TabAbout";
import TabRates from "./TabRates";
import TabCashback from "./TabCashback";
import TabFaq from "./TabFaq";

import "../styles/tabs.scss";

const Tab: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0)
    function toggleTab(index: number): void {
        setActiveTab(index)
    }
    
    return (
        <section className="tab">
            <div className="container">
                <TabMenu handleclick={toggleTab} activeTab={activeTab} />

                <div className="tabsContent">
                    {activeTab === 0 && <TabAbout />}

                    {activeTab === 1 && <TabRates />}

                    {activeTab === 2 && <TabCashback />}

                    {activeTab === 3 && <TabFaq />}
                </div> 
            </div>
        </section>
    )
}

export default Tab;