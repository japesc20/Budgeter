import React from 'react'
import './NavBar.css'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <div>
            <div className="Navbar">
                <div className="logo">BudgetER</div>
                <div className="user_icons">
                    <FontAwesomeIcon className="nav_icon" icon={faCog} />
                    <FontAwesomeIcon className="nav_icon" icon={faUserCircle} />
                </div>
                <div className="menu">
                    <ul className="menu_list">
                        <Link to="/"><li className="menu_icon">Overview</li></Link>
                        <Link to="/InsertData"><li className="menu_icon">Insert Data</li></Link>
                        <Link to="/Targets"><li className="menu_icon">Targets</li></Link>
                        <Link to="/Logout"><li className="menu_icon">Logout</li></Link>
                    </ul> 
                </div>
            </div>
        </div>
    )
}

export default NavBar
