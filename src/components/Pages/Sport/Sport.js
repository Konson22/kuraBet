import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaBaseballBall, FaFootballBall, FaPlay } from 'react-icons/fa'
import GamesTable from '../../GamesTable/GamesTable'


export default function Sport() {
    return (
        <>
        <nav className="sport-navbar">
            <ul className="nav">
                <li><NavLink className="nav-link" to="/"><FaHome className="nav-link-icon" /> FOOTBALL</NavLink></li>
                <li><NavLink className="nav-link" to="/sport"><FaFootballBall className="nav-link-icon" /> BASKETBALL</NavLink></li>
                <li><NavLink className="nav-link" to="/sport"><FaFootballBall className="nav-link-icon" /> TENNIS</NavLink></li>
                <li><NavLink className="nav-link" to="/basketball"><FaBaseballBall className="nav-link-icon" /> LIVE GAMES</NavLink></li>
                <li><NavLink className="nav-link" to="/inplay"><FaPlay className="nav-link-icon" /> INPLAY</NavLink></li>
            </ul>

        </nav>
        <GamesTable />
        </>
    )
}
