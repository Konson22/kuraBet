import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SubNavbar() {
	const links = [
		{
			name:"Soccer",
			path:"/sport/soccer",
			icon:process.env.PUBLIC_URL+"/images/football.jpg"
		},
		{
			name:"Tennis",
			path:"/sport/soccer",
			icon:process.env.PUBLIC_URL+"/images/tennis2.jpg"
		},
		{
			name:"Basketball",
			path:"/sport/basketball",
			icon:process.env.PUBLIC_URL+"/images/basketball.jpg"
		},
		{
			name:"Ballyball",
			path:"/sport/basketball",
			icon:process.env.PUBLIC_URL+"/images/balbal.jpg"
		},
		{
			name:"Ice hock",
			path:"/sport/ice-hock",
			icon:process.env.PUBLIC_URL+"/images/ice-hock.jpg"
		}
	]
	return (
		<>
		<div className="subnavbar-container mb-2 d-flex">
				{
					links.map(link => (
						<div className="subnav-item">
							<NavLink  to={ link.path } >
								<img className="nav-icon-img" src={ link.icon } alt="images" /> <br/>
								<div className="text-center">
									<span>{ link.name }</span>
								</div>
							</NavLink>
						</div>
					))
				}
			
		</div>
		<div className="sport-inner-nav mb-2">
			<ul className="nav">
				<li className="nav-item"><NavLink className="nav-link" to="/sport">Fixture</NavLink></li>
				<li className="nav-item"><NavLink className="nav-link" to="/sport/table">Table</NavLink></li>
				<li className="nav-item"><NavLink className="nav-link" to="/sport/results">Results</NavLink></li>
			</ul>
		</div>
		</>
	)
}
