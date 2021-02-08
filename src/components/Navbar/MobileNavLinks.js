import React from 'react'
import { FaGolfBall } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import HeaderIcons from '../Navbar/HeaderIcons'
import { FaUserCircle, FaCog, FaBell, FaTimes, FaBars, FaSearch } from 'react-icons/fa'

export default function MobileNavLinks({ toggleMenu, openMenu }) {
    return (
        <div className="mobile-links-container">
            <span onClick={ toggleMenu }>{ openMenu ? <FaTimes className="header-icon" /> : <FaBars className="header-icon" /> }</span>
            <div>
                <FaSearch className="header-icon mr-2" />
                <FaBell className="header-icon mr-2" />
                <FaUserCircle className="header-icon" />
            </div>
        </div>
    )
}
