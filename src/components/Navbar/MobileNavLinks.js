import React, { useState } from 'react'
import { FaUserCircle, FaTicketAlt,  FaBell, FaSearch, FaUser, FaCog } from 'react-icons/fa'
import { Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function MobileNavLinks({ toggleMenu, openMenu }) {
    const [isIconBoxOpen, setIsIconBoxOpen] = useState(false)
    const toggleUserMenu = () => setIsIconBoxOpen(!isIconBoxOpen)
    return (
        <div className="mobile-links-container">
            <div className="user-action-bar">
                <FaSearch className="header-icon mr-2" />
                <div className="badg-count-box">
                    <NavLink to="/" className=""><FaTicketAlt className="header-icon mr-2" /></NavLink>
                    <span class="badge badge-danger">4</span>
                </div>
                <span onClick={ toggleUserMenu }><FaBell className="header-icon mr-2" /></span>
                <FaUserCircle className="header-icon" />
                    <div className={ !isIconBoxOpen ? "show-nitification-container" : "hide-nitification-container" }>
                       <div><NavLink className="notification-link" to="/profile"><FaUser /> Profile</NavLink></div>
                       <div><NavLink className="notification-link" to="/setting"><FaUser /> Profile</NavLink></div>
                       <div><NavLink className="notification-link" to="/setting"><FaCog /> Setting</NavLink></div>
                </div>
            </div>
        </div>
    )
}
