import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaUser, FaSign, FaTicketAlt, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { BsCardChecklist, BsBucket } from 'react-icons/bs'
import { ActionProvider } from '../DataContextProvider/DataContext'

export  function NabarButtons({ closeMenu }) {
	const { state } = useContext(ActionProvider)
	let tempCardCount = state.tempCardData ? state.tempCardData.length : 0
	// console.log(state)
	return (
		<div className="navbar-btn-wraper" onClick={ closeMenu }>
			<div className="navbar-btn-wraper d-flex">
				<NavLink to="/shoping-card">
					<div className="navbar-icon-wraper slip-card">
						<BsBucket className="navbar-icon"/>
						<span className="badge-content badge badge-danger">{ tempCardCount }</span>
					</div>
				</NavLink>
				<NavLink to="/my-cards">
					<div className="navbar-icon-wraper">
						<BsCardChecklist className="navbar-icon" />
						<span className="badge-content badge badge-danger">4</span>
					</div>
				</NavLink>
				<NavLink to="/profile"><FaUser className="navbar-icon" /></NavLink>
			</div>
		</div>
	)
}

export const MenuBars = ({ isOpen, toggleMenu }) => {
	return (
		<div className="menubar-wraper">
			<span onClick={ toggleMenu } >{ isOpen ? <FaTimes className="navbar-icon"/> : <FaBars className="navbar-icon"/> }</span>
		</div>
	)
}