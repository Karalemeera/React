import { Link } from 'react-router-dom';

export default function Layout({ children }) {
    return <>
        <div className="main-container">
            <header className="header-6">
                <div className="branding">
                    <a>


                        <span className="title">Project Clarity</span>
                    </a>
                    <nav className="navbar navbar-expand-lg p-3">
                        <ul className="nav">
                            <li className="nav-item active">
                                <Link to="/">Multi-Cloud Services</Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/solutions">Solutions
                                    <span className="badge badge-1">
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