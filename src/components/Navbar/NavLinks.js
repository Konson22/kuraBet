import React from 'react'
import { FaHome, FaGolfBall, FaBaseballBall, FaFootballBall, FaHorseHead, FaPlay } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


export default function NavLinks() {
    return (
        <>
        <ul className="nav">
            <li><NavLink className="nav-link" to="/"><FaHome className="nav-link-icon" /> HOME</NavLink></li>
            <li><NavLink className="nav-link" to="/sport"><FaFootballBall className="nav-link-icon" /> SPORT</NavLink></li>
            <li><NavLink className="nav-link" to="/basketball"><FaBaseballBall className="nav-link-icon" /> LIVE GAMES</NavLink></li>
            <li><NavLink className="nav-link" to="/inplay"><FaPlay className="nav-link-icon" /> INPLAY</NavLink></li>
            <li><NavLink className="nav-link" to="/multi-market">MULTI MARKET</NavLink></li>
            <li><NavLink className="nav-link" to="/cricket">CRICKET</NavLink></li>
            <li><NavLink className="nav-link" to="/soccer">SOCCER</NavLink></li>
            <li><NavLink className="nav-link" to="/tennis">TENNIS</NavLink></li>
            <li><NavLink className="nav-link" to="/hourse-race"><FaHorseHead className="nav-link-icon" /> HOURSE RACE</NavLink></li>
        </ul>
        </>
    )
}
