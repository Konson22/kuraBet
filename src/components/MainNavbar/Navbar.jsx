import React, { useState } from 'react'
import { NabarButtons, MenuBars } from './NavbarButtons'
import { FaUser } from 'react-icons/fa'
import { useTransition, animated } from 'react-spring'
import NavbarLink from './NavbarLink'
import './Navbar.css'


export default function Navbar() {

	const [isOpen, setIsOpen] = useState(false)

	const transMenubar = useTransition(isOpen, null, {
		from:{ opacity:0, transform:"translateX(-100%)"},
		enter:{ opacity:1, transform:"translateX(0)"},
		leave:{ opacity:0, transform:"translateX(-100%)"}
	})

	const toggleMenu = () => setIsOpen(!isOpen) 
	const closeMenu = () => setIsOpen(false) 

	return (
		<nav className="my-bg main-navbar-wraper shadow d-flex align-items-center justify-content-between">
			<MenuBars isOpen={ isOpen } toggleMenu={ toggleMenu } />
			<div className="logo-wraper">
				<h4>SportBet</h4>
			</div>
			<div className="desktop-navbar-links pl-4">
				<NavbarLink />
			</div>
			{
				transMenubar.map(({item, key, props}) => item && 
				<animated.div key={ key } style={ props } className="mobile-navbar-links pl-4">
					<NavbarLink toggleMenu={ toggleMenu } />
				</animated.div>)
			}
			

			<div className="">
				<NabarButtons closeMenu={ closeMenu } />
			</div>
		</nav>
	)
}


