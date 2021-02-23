import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function MobileNavbar() {
   
    return (
        <ul className="nav"> 
            <li><span activeClassName="active-class" className="nav-link" >  </span></li>
            <li><NavLink activeClassName="active-class" className="nav-link" to="/sport"> SOCCER</NavLink></li>
        </ul>
    )
}
