import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
    const [activeList, setActiveTab] = useState("list1");
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("list1");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("list2");
    };
    const handleTab3 = () => {
        // update the state to tab2
        setActiveTab("list3");
    };
    return <>
        <div className="main-container">
            <header className="header-6">
                <div className="branding">
                    <a>
                        <span className="title">Datacenter Migration</span>
                    </a>
                    <nav className="navbar navbar-expand-lg p-3">
                        <ul className="nav">
                            <li onClick={handleTab1} className={activeList === "list1" ? "active nav-item" : "nav-item"} id='list1'>
                                <Link to="/">Multi-Cloud Services</Link>

                            </li>
                            <li onClick={handleTab2} className={activeList === "list2" ? "active nav-item" : "nav-item"} id='list2'>
                                <Link to="/products">Datacenter Dashboard</Link>
                            </li>
                            <li onClick={handleTab3} className={activeList === "list3" ? "active nav-item" : "nav-item"} id='list3'>
                                <Link to="/solutions">Solutions
                                    <span className="badge badge-1 my-2">
                                        90
                                        <span className="clr-sr-only">items in a badge</span>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="settings">
                    <a className="nav-link nav-icon">
                        <cds-icon shape="cog"></cds-icon>
                    </a>

                </div>
            </header>
            <div className="content-container">
                <div className="content-area">
                    {children}
                </div>
            </div>
        </div>
    </>
}