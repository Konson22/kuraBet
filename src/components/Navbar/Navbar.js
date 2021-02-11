import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { FaTimes, FaBars } from 'react-icons/fa'

import NavLinks from './NavLinks'
import MobileNavLinks from './MobileNavLinks'

import './Navbar.css'
export default function Navbar() {
    const [ openMenu, setOpenMenu ] = useState(false)

    const transitions = useTransition(openMenu, null, {
        from:{opacity:0, transform:'translateX(-100%'},
        enter:{opacity:1, transform:'translateX(0)'},
        leave:{opacity:0, transform:'translateX(-100%'}
    })

    function toggleMenu(){ 
        setOpenMenu(!openMenu) 
    }
    // function hideMenu(){
    //     setOpenMenu(false) 
    // }
    const bckImg = process.env.PUBLIC_URL+"/images/football.jpg"
    return (
        <header className="nav-container-wraper" style={{backgroundImage:`URL(${bckImg})`, backgroundSize:"100% 90%"}}>
            <nav className="text-center links-container">
                <div className="big-screen">
                    <NavLinks />
                    <div>
                        <MobileNavLinks toggleMenu={ toggleMenu } openMenu={ openMenu }/>
                    </div>
                </div>
                <div className="mobile-screen">
                    <span onClick={ toggleMenu }>{ openMenu ? <FaTimes className="header-icon" /> : <FaBars className="header-icon" /> }</span>
                    <MobileNavLinks toggleMenu={ toggleMenu } openMenu={ openMenu }/>
                </div>
            </nav>
            {
            transitions.map(({item, key, props})=> 
                item && <animated.div key={key} style={props} className="menu-container">
                    <NavLinks />
            </animated.div>
            )
        }
        </header>
    )
}
