import React from "react";
import {BrowserRouter,Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="headercontainer">
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="#">Developer Tool</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <hr />
            </BrowserRouter>
        </div>
    )


}
export default Header;