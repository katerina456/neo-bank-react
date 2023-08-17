import React from "react";
import Tooltip from "./Tooltip";
import Tab from "./Tab";
import Prescoring from "./Prescoring";

import "../styles/main.scss";

function Loan() {
    return (
        <main>
            <Tooltip />
            <Tab />
            <Prescoring />
        </main>
    )
}

export default Loan;