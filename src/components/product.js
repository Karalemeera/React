import React, { useState } from 'react';


import FirstTab from './FirstTab';
import SecondTab from './secondTab'



export default function Contact() {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
    };
    return (
        <>

            <ul className="nav" role="tablist">
                <li role="presentation" className="nav-item" onClick={handleTab1}>
                    <button id="tab1" className={activeTab === "tab1" ? "active btn btn-link nav-link" : "btn btn-link nav-link"} aria-controls="panel1" aria-selected="true" type="button">
                        Dashboard
                    </button>
                </li>
                <li role="presentation" className="nav-item" onClick={handleTab2} >
                    <button id="tab2"
                        className={activeTab === "tab2" ? "active btn btn-link nav-link" : "btn btn-link nav-link"} aria-controls="panel2" aria-selected="false" type="button">
                        Management
                    </button>
                </li>
            </ul>
            <div className='outlet'>
                {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
            </div>


        </>
    )
}