import React from 'react'
import { FaTimes, FaBars, FaUserCircle, FaSearch, FaBell } from 'react-icons/fa'

export default function HeaderIcons({ toggleMenu,  openMenu}) {

    return (
        <div className="header-icons-container">
            <span onClick={ toggleMenu }>{ openMenu ? <FaTimes className="header-icon" /> : <FaBars className="header-icon" /> }</span>
            <div>
                <FaSearch className="header-icon mr-2" />
                <FaBell className="header-icon mr-2" />
                <FaUserCircle className="header-icon" />
            </div>
        </div>
    )
}
