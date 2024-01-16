import React, { useState } from "react";
const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    // ... the previous codes
}
export default Tabs;

<ul className="nav" role="tablist">
    <li role="presentation" className={activeTab === "tab1" ? "active nav-item" : "nav-item"}>
        <button id="tab1" className="btn btn-link nav-link active" aria-controls="panel1" aria-selected="true" type="button">
            Dashboard
        </button>
    </li>
    <li role="presentation" className={activeTab === "tab2" ? "active nav-item" : "nav-item"} >
        <button id="tab2" className="btn btn-link nav-link" aria-controls="panel2" aria-selected="false" type="button">
            Management
        </button>
    </li>
</ul>