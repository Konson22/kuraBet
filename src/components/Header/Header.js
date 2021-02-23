import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import { FaBars, FaTimes, FaUser, FaCog } from 'react-icons/fa'
import Navbar from './Navbar/Navbar'
import './Header.css'


export default function Header() {
   const [openMenu, setOpenMenu] = useState(false)

   const transitions = useTransition(openMenu, null, {
        from:{opacity:0, transform:'translateX(-100%'},
        enter:{opacity:1, transform:'translateX(0)'},
        leave:{opacity:0, transform:'translateX(-100%'}
    })

   const toggleMenu = () => setOpenMenu(!openMenu)
   const closeMenu = () => setOpenMenu(false)

   return (
      <>
         <header className="light-dark-bg main-header-wraper">
            <h1>Mzanisbet </h1>
         </header>
         <div className="title-wraper main-navbar-wraper">
            <div className="big-screen-wraper">
               <Navbar />
               <div className="right-main-nav">
                  <ul className="nav"> 
                     <li><NavLink className="nav-link" to="/sport"><FaCog className="main-icons" /> </NavLink></li>
                     <li><NavLink className="nav-link" to="/sport"><FaUser className="main-icons"/> </NavLink></li>
                  </ul>
               </div>
            </div>

            {
               transitions.map(({item, key, props})=> 
                  item && <animated.div key={key} style={props} className="mobile-main-wraper">
                     <Navbar closeMenu={ closeMenu }/>
               </animated.div>
            )}
            
            <div className="mobile-screen-wraper">
               <ul className="nav"> 
                  <li>
                     <span activeClassName="active-class" className="nav-link" onClick={ toggleMenu }> 
                        { openMenu ? <FaTimes className="main-icons" /> : <FaBars className="main-icons"/>}  
                     </span>
                  </li>
                  <li><NavLink activeClassName="active-class" className="nav-link" to="/sport"> SOCCER</NavLink></li>
               </ul>
               <div className="mobile-icons-wraper">
                  <ul className="nav" > 
                     <li><button className="btn btn-sm my-btn nav-link mr-2"> Join </button></li>
                     <li><button className="btn btn-sm my-btn nav-link"> Sign up </button></li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   )
}


export function MobileNavbar() {
   
    return (
        <ul className="nav" > 
                <li><NavLink activeClassName="active-class" className="nav-link" to="/"> <FaBars className="main-icons" /> </NavLink></li>
                <li><NavLink activeClassName="active-class" className="nav-link" to="/sport"> SOCCER</NavLink></li>
         
        </ul>
    )
}