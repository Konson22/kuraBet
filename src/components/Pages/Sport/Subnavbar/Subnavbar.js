import React from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonGroup, Button, FormControl } from 'react-bootstrap'
import './Subnavbar.css'
import { FaSearch, FaCalendarCheck, FaPlay, FaStepForward, FaListOl } from 'react-icons/fa'

export default function Subnavbar() {
	return (
		<div className="sub-navbar-wraper blue-bg">
			<ul className="nav"> 
				<li><NavLink activeClassName="active-class" className="nav-link" to="/live-now"><FaPlay className="sub-nav-icon" /> Live now</NavLink></li>
				<li><NavLink activeClassName="active-class" className="nav-link" to="/Upcoming"><FaStepForward className="sub-nav-icon" /> Upcoming</NavLink></li>
				<li><NavLink activeClassName="active-class" className="nav-link" to="/sport"><FaCalendarCheck className="sub-nav-icon" /> Fixtures</NavLink></li>
				<li><NavLink activeClassName="active-class" className="nav-link" to="/results"><FaListOl className="sub-nav-icon" /> Results</NavLink></li>
			</ul>
			<div className="search-wraper">
				<ButtonGroup>
					<FormControl type="search" placeholder="Search" />
					<Button ><FaSearch /> </Button>
				</ButtonGroup>
			</div>
		</div>
	)
}
