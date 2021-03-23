import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavbarLink({ toggleMenu }){
	const links = [
		{
			name:"Main",
			path:"/"
		},
		{
			name:"Soccer",
			path:"/sport"
		},
		{
			name:"Basketball",
			path:"/"
		},
		{
			name:"Tennis",
			path:"/"
		},
		{
			name:"Ice hocky",
			path:"/sport"
		},
		{
			name:"Games",
			path:"/"
		},
		{
			name:"Promotion",
			path:"/"
		},
		{
			name:"News",
			path:"/"
		}
	]
	return (
		<div className="main-navlink-wraper">
			<ul className="nav" onClick={ toggleMenu }>
				{
					links.map(link => (
						<li className="nav-item">
							<NavLink activeClassName="active-class" className="nav-link" to={ link.path } >
								{ link.name }
							</NavLink>
						</li>
					))
				}
			</ul>
		</div>
	)
}
						