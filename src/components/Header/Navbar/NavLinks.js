
import React from 'react'

export default function Navlinks() {
   
    return (
        <ul className="nav primary-nav" > 
                <li><NavLink activeClassName="active-class" className="nav-link" to="/"> HOME</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/sport"> SOCCER</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/result"> TENNIS</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/fixture"> FIXTURE</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/basketball"> BASKETBALL</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/teams"> TEAMS</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/champions"> CHAMPIONS</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/news"> NEWS</NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/promotion"> PROMOTION</NavLink></li>
        </ul>
    )
}
