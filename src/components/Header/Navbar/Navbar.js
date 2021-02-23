import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar({closeMenu}) {
   
    return (
        <ul className="nav" > 
                <li><NavLink activeClassName="active-class" className="nav-link" to="/" onClick={ closeMenu }> HOME</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/sport" onClick={ closeMenu }> SOCCER</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/result" onClick={ closeMenu }> TENNIS</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/fixture" onClick={ closeMenu }> FIXTURE</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/basketball" onClick={ closeMenu }> BASKETBALL</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/teams" onClick={ closeMenu }> TEAMS</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/champions" onClick={ closeMenu }> CHAMPIONS</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/news" onClick={ closeMenu }> NEWS</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/promotion" onClick={ closeMenu }> PROMOTION</NavLink></li>
        </ul>
    )
}


